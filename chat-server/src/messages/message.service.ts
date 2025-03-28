import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { instanceToPlain } from 'class-transformer';
import { Repository } from 'typeorm';
import { IConversationsService } from '../conversations/conversations';
import { Services } from '../utils/constants';
import { Conversation, Message } from '../utils/typeorm';
import { IMessageService } from './message';
import {
  CreateMessageParams,
  DeleteMessageParams,
  EditMessageParams,
} from '../utils/types';
import { ConversationNotFoundException } from '@/conversations/exceptions/ConversationNotFoundException';

@Injectable()
export class MessageService implements IMessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
    @Inject(Services.CONVERSATIONS)
    private readonly conversationService: IConversationsService,
  ) {}

  async createMessage(params: CreateMessageParams) {
    const { user, content, conversationId } = params;

    const conversation = await this.conversationService.findById(conversationId);

    if (!conversation) throw new ConversationNotFoundException();

    // const { creator, recipient } = conversation;

    // const isFriends = await this.friendsService.isFriends(
    //   creator.id,
    //   recipient.id,
    // );

    // if (!isFriends) throw new FriendNotFoundException();

    // if (creator.id !== user.id && recipient.id !== user.id)
    //   throw new CannotCreateMessageException();

    const message = this.messageRepository.create({
      content,
      conversation: instanceToPlain(conversation),
      author: instanceToPlain(user),
      attachments: params.attachments ? [] : [],
    });

    const savedMessage = await this.messageRepository.save(message);

    conversation.lastMessageSent = savedMessage;

    await this.conversationService.save(conversation);

    const sanitizedConversation = {
      ...conversation,
      lastMessageSent: message,
    };

    return { message: savedMessage, conversation: sanitizedConversation };
  }

  getMessages(conversationId: number): Promise<Message[]> {
    return this.messageRepository.find({
      relations: ['author', 'attachments', 'author.profile'],
      where: { conversation: { id: conversationId } },
      order: { createdAt: 'DESC' },
      take: 10,
    });
  }

  async deleteMessage(params: DeleteMessageParams) {
    // const { conversationId } = params;
    // const msgParams = { id: conversationId, limit: 5 };
    // const conversation = await this.conversationService.getMessages(msgParams);
    // if (!conversation) throw new ConversationNotFoundException();
    // const findMessageParams = buildFindMessageParams(params);
    // const message = await this.messageRepository.findOne(findMessageParams);
    // if (!message) throw new CannotDeleteMessage();
    // if (conversation.lastMessageSent.id !== message.id)
    //   return this.messageRepository.delete({ id: message.id });
    // return this.deleteLastMessage(conversation, message);

    return 'deleteMessage';
  }

  async deleteLastMessage(conversation: Conversation, message: Message) {
    // const size = conversation.messages.length;
    // const SECOND_MESSAGE_INDEX = 1;
    // if (size <= 1) {
    //   console.log('Last Message Sent is deleted');
    //   await this.conversationService.update({
    //     id: conversation.id,
    //     lastMessageSent: null,
    //   });
    //   return this.messageRepository.delete({ id: message.id });
    // } else {
    //   console.log('There are more than 1 message');
    //   const newLastMessage = conversation.messages[SECOND_MESSAGE_INDEX];
    //   await this.conversationService.update({
    //     id: conversation.id,
    //     lastMessageSent: newLastMessage,
    //   });
    //   return this.messageRepository.delete({ id: message.id });
    // }

    return 'deleteLastMessage';
  }

  async editMessage(params: EditMessageParams) {
    const messageDB = await this.messageRepository.findOne({
      where: {
        id: params.messageId,
        author: { id: params.userId },
      },
      relations: [
        'conversation',
        'conversation.creator',
        'conversation.recipient',
        'author',
        'author.profile',
      ],
    });
    if (!messageDB)
      throw new HttpException('Cannot Edit Message', HttpStatus.BAD_REQUEST);
    messageDB.content = params.content;
    return this.messageRepository.save(messageDB);
  }
}
