import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Routes, Services } from '../utils/constants';
import { Auth } from '../utils/decorators';
import { User } from '../utils/typeorm';
import { IMessageService } from './message';
//   import { EventEmitter2 } from '@nestjs/event-emitter';
//   import { SkipThrottle, Throttle } from '@nestjs/throttler';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Attachment } from '../utils/types';
import { EmptyMessageException } from './exceptions/EmptyMessage';
import { EditMessageDto } from './dtos/EditMessage.dto';
import { JwtAuthGuard } from '@/users/jwt.auth.guard';
import { CreateMessageDto } from './dtos/CreateMessageDto.dto';
import { GetMessageDto } from './dtos/GetMessageDto.dto';

@Controller(Routes.MESSAGES)
export class MessageController {
  constructor(
    @Inject(Services.MESSAGES) private readonly messageService: IMessageService,
    //   private eventEmitter: EventEmitter2,
  ) {}

  // @Throttle(5, 10)
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'attachments', maxCount: 5 }]),
  )

  @UseGuards(JwtAuthGuard)
  @Post()
  async createMessage(
    @Auth() user: User,
    @UploadedFiles() { attachments }: { attachments: Attachment[] },
    @Body() { content, conversationId }: CreateMessageDto,
  ) {
    if (!attachments && !content) throw new EmptyMessageException();

    const params = { user, conversationId, content, attachments };
    const response = await this.messageService.createMessage(params);
    //   this.eventEmitter.emit('message.create', response);
    return response;
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  // @SkipThrottle()
  async getMessagesFromConversation(
    @Auth() user: User,
    // @Param('id') id: number,
    @Body() {conversationId} : GetMessageDto,
  ) {

    console.log(conversationId)
    const messages = await this.messageService.getMessages(conversationId);
    return { conversationId, messages };
  }

  @Delete(':messageId')
  async deleteMessageFromConversation(
    @Auth() user: User,
    @Param('id', ParseIntPipe) conversationId: number,
    @Param('messageId', ParseIntPipe) messageId: number,
  ) {
    const params = { userId: user.id, conversationId, messageId };
    await this.messageService.deleteMessage(params);
    //   this.eventEmitter.emit('message.delete', params);
    return { conversationId, messageId };
  }
  // api/conversations/:conversationId/messages/:messageId
  @Patch(':messageId')
  async editMessage(
    @Auth() { id: userId }: User,
    @Param('id') conversationId: number,
    @Param('messageId') messageId: number,
    @Body() { content }: EditMessageDto,
  ) {
    const params = { userId, content, conversationId, messageId };
    const message = await this.messageService.editMessage(params);
    //   this.eventEmitter.emit('message.update', message);
    return message;
  }
}
