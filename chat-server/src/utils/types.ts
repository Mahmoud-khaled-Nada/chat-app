import { Conversation, Message, User } from './typeorm';
import type { Multer } from 'multer';
import { Socket } from 'socket.io';


export interface AuthenticatedRequest extends Request {
  user: User;
}



export interface AuthenticatedSocket extends Socket {
  user?: User;
}

export interface Attachment extends Express.Multer.File {}

export type UserProfileFiles = {
  avatar?: Express.Multer.File[];
};

export type UpdateUserProfileParams = Partial<{
  about?: string;
  avatar?: Express.Multer.File;
}>;

export type FriendRequestStatus = 'accepted' | 'pending' | 'rejected';

export type AccessParams = {
  id: number;
  userId: number;
};

export type CreateConversationParams = {
  email: string;
  message: string;
};

export type GetConversationMessagesParams = {
  id: number;
  limit: number;
};

export type UpdateConversationParams = Partial<{
  id: number;
  lastMessageSent: Message;
}>;


export type CreateMessageParams = {
  conversationId: number;
  content?: string;
  attachments?: Attachment[];
  user: User;
};

export type CreateMessageResponse = {
  message: Message;
  conversation: Conversation;
};

export type DeleteMessageParams = {
  userId: number;
  conversationId: number;
  messageId: number;
};

export type EditMessageParams = {
  conversationId: number;
  messageId: number;
  userId: number;
  content: string;
};

export type FindMessageParams = {
  userId: number;
  conversationId: number;
  messageId: number;
};