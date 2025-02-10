import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
//   import { SkipThrottle } from '@nestjs/throttler';
import { Routes, Services } from '../utils/constants';
import { User } from '../utils/typeorm';
import { IConversationsService } from './conversations';
import { CreateConversationDto } from './dtos/CreateConversation.dto';
import { Auth } from '@/utils/decorators';
import { JwtAuthGuard } from '@/users/jwt.auth.guard';

//   @SkipThrottle()
@Controller(Routes.CONVERSATIONS)
@UseGuards(JwtAuthGuard)
export class ConversationsController {
  constructor(
    @Inject(Services.CONVERSATIONS)
    private readonly conversationsService: IConversationsService,
    private readonly events: EventEmitter2,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createConversation(
    @Auth() user: User,
    @Body() createConversationPayload: CreateConversationDto,
  ) {
    console.log('createConversation');
    const conversation = await this.conversationsService.createConversation(
      user,
      createConversationPayload,
    );
    this.events.emit('conversation.create', conversation);
    return conversation;
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getConversations(@Auth() { id }: User) {
    return this.conversationsService.getConversations(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getConversationById(@Param('id') id: number) {
    return this.conversationsService.findById(id);
  }
}
