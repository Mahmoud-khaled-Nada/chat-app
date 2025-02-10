import { ConversationsDetails, Profile, UserProfileDetails } from "./types";

const CDN = import.meta.env.VITE_CDN_ATTACHMENT;

export const getAttachment = (attach: string, dir: string | null = null) => `${CDN}/${dir}/${attach}`;

export const getAvatar = (profile?: Profile): string => {
  if (profile?.avatar) {
    return getAttachment(profile.avatar, "profile");
  }
  return "";
};

export const formatUsername = (firstName: string, lastName: string) => {
  return `${firstName} ${lastName}`;
};

export const conversationAvatar = (conversation: ConversationsDetails, userId: number) => {
  if (conversation.recipient.id !== userId) {
    return conversation.recipient.profile && getAvatar(conversation.recipient.profile);
  } else {
    return conversation.creator.profile && getAvatar(conversation.creator.profile);
  }
};

export const conversationformatName = (conversation: ConversationsDetails, userId: number) => {
  if (conversation.recipient.id !== userId) {
    return formatUsername(conversation.recipient.firstName, conversation.recipient.lastName);
  } else {
    return formatUsername(conversation.creator.firstName, conversation.creator.lastName);
  }
};

export function formatTime(timestamp: string, timeZone = "UTC") {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone,
  }).format(new Date(timestamp));
}

export const conversationalPartner = (user: UserProfileDetails, conversation: ConversationsDetails) => {
  if (conversation.creator.id !== user.id) {
    return conversation.creator;
  } else {
    return conversation.recipient;
  }
};

export const isAuthor = (author: UserProfileDetails, user: UserProfileDetails) => author.id === user.id;
