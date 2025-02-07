import { MulterField } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

export enum Routes {
  AUTH = 'auth',
  USERS = 'users',
}

export enum Services {
  AUTH = 'AUTH_SERVICE',
  USERS = 'USERS_SERVICE',
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
    name: 'banner',
    maxCount: 1,
  },
  {
    name: 'avatar',
    maxCount: 1,
  },
];