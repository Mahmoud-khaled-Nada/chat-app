import { FaVideo } from "react-icons/fa6";
import {
  ActionButton,
  Avatar,
  ChatActions,
  ChatHeader,
  ChatName,
  ChatStatus,
  UserInfo,
} from "../../styled-components";
import avatar2 from "@asset/avatars/avatar_2.jpg";
import { FaEllipsisV, FaPhoneAlt } from "react-icons/fa";
import { useToast } from "../../utils/hooks/useToast";
import { ConversationsDetails, UserProfileDetails } from "../../utils/types";
import { FC } from "react";
import { conversationAvatar, conversationformatName } from "../../utils/helper";

type Props = {
  user: UserProfileDetails;
  conversation: ConversationsDetails;
};

export const ChatWindowHeader: FC<Props> = ({ user, conversation }) => {
  const { success } = useToast();
  return (
    <ChatHeader>
      <UserInfo>
        <Avatar src={conversationAvatar(conversation, user.id) || avatar2} alt="User" />
        <div>
          <ChatName>{conversationformatName(conversation, user.id)}</ChatName>
          <ChatStatus>Online</ChatStatus>
        </div>
      </UserInfo>
      <ChatActions>
        <ActionButton onClick={() => success("Calling...")}>
          <FaPhoneAlt />
        </ActionButton>
        <ActionButton onClick={() => success("FaVideo...")}>
          <FaVideo />
        </ActionButton>
        <ActionButton onClick={() => success("FaEllipsisV...")}>
          <FaEllipsisV />
        </ActionButton>
      </ChatActions>
    </ChatHeader>
  );
};
