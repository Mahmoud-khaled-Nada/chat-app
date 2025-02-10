import { MulterField } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

export enum Routes {
  AUTH = 'auth',
  USERS = 'users',
  PROFILE = 'profile',
  CONVERSATIONS = 'conversations',
  MESSAGES = 'messages',
}

export enum Services {
  AUTH = 'AUTH_SERVICE',
  USERS = 'USERS_SERVICE',
  PROFILE = 'PROFILE_SERVICE',
  CONVERSATIONS = 'CONVERSATIONS_SERVICE',
  MESSAGES = 'MESSAGES_SERVICE',
  GATEWAY_SESSION_MANAGER = 'GATEWAY_SESSION_MANAGER',
}

export enum ServerEvents {
  FRIEND_REQUEST_ACCEPTED = 'friendrequest.accepted',
  FRIEND_REQUEST_REJECTED = 'friendrequest.rejected',
  FRIEND_REQUEST_CANCELLED = 'friendrequest.cancelled',
  FRIEND_REMOVED = 'friend.removed',
}

export enum WebsocketEvents {
  FRIEND_REQUEST_ACCEPTED = 'onFriendRequestAccepted',
  FRIEND_REQUEST_REJECTED = 'onFriendRequestRejected',
  VIDEO_CALL_REJECTED = 'onVideoCallRejected',
  VOICE_CALL_ACCEPTED = 'onVoiceCallAccepted',
  VOICE_CALL_HANG_UP = 'onVoiceCallHangUp',
  VOICE_CALL_REJECTED = 'onVoiceCallRejected',
}

export const UserProfileFileFields: MulterField[] = [
  {
    name: 'avatar',
    maxCount: 1,
  },
];
