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
  lastMessageSentAt: string;
  createdAt: string;
  lastMessageSent: LastMessageSent | null;
  creator: UserProfileDetails;
  recipient: UserProfileDetails;
};

export type Message = {
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
  messages: Message[];
};
