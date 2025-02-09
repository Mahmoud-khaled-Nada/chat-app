import { Profile } from './entities/Profile';
import { User } from './entities/User';
import { Conversation } from './entities/Conversation';
import { Message } from './entities/Message';
import { MessageAttachment } from './entities/MessageAttachment';
import { FriendRequest } from './entities/FriendRequest';
import { Friend } from './entities/Friend';

const entities = [
  User,
  Profile,
  Conversation,
  Message,
  MessageAttachment,
  FriendRequest,
  Friend,
];

export default entities;

export {
  User,
  Profile,
  Conversation,
  Message,
  MessageAttachment,
  FriendRequest,
  Friend,
};
