export type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type Profile = {
  id: number;
  about?: string;
  avatar?: string | null;
};

export type UserProfileDetails = User & {
  profile?: Profile;
};

export type LoginParams = {
  email: string;
  password: string;
};

export type RegisterParams = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export type LoginResponse = {
  data: {
    user: User;
    access_token: string;
  };
};

export type RegisterResponse = {
  data: {
    user: User;
    access_token: string;
  };
};

export type UpdateUserProfileParams = {
  about?: string;
  avatar?: Blob;
};

export type CreateConversationParams = {
  email: string;
  message: string;
};

export type LastMessageSent = {
  id: number;
  content: string;
  createdAt: string;
};

export type ConversationsDetails = {
  id: number;
  createdAt: string;
  lastMessageSentAt: string;
  creator: UserProfileDetails;
  recipient: UserProfileDetails;
  lastMessageSent?: {
    id: number;
    content: string;
    createdAt: string;
  };
};

export type ConversationMessageDetails = {
  id: number;
  content: string;
  createdAt: string;
};

export type ConversationDetails = {
  id: number;
  lastMessageSentAt: string;
  createdAt: string;
  lastMessageSent: LastMessageSent | null;
  creator: UserProfileDetails;
  recipient: UserProfileDetails;
  messages: ConversationMessageDetails[];
};

export type Message = {
  id: number;
  content: string;
  createdAt: string;
  author: UserProfileDetails;
};

export type MessagesResponse = {
  id: number;
  messages: Message[];
};

export type MessageParams = {
  conversationId: number;
  content: string;
  attachments: File | string;
};

/////

export type ConversationMessage = {
  id: number;
  createdAt: string;
  lastMessageSentAt: string;
  creator: UserProfileDetails;
  recipient: UserProfileDetails;
};


export type MessageDetails = {
  id: number;
  content: string;
  createdAt: string;
  author: UserProfileDetails;
  attachments: any[];
  conversation: ConversationsDetails;
};

export type CreateMessageResponse = {
  conversation: ConversationMessage;
  message: MessageDetails;
};
