import { FaVideo } from "react-icons/fa6";
import { ActionButton, Avatar, ChatActions, ChatHeader, ChatName, ChatStatus, UserInfo } from "@styled";
import avatar2 from "@asset/avatars/avatar_2.jpg";
import { FaEllipsisV, FaPhoneAlt } from "react-icons/fa";
import { useToast } from "../../utils/hooks/useToast";

export const ChatWindowHeader = () => {
  const { success } = useToast();
  return (
    <ChatHeader>
      <UserInfo>
        <Avatar src={avatar2} alt="User" />
        <div>
          <ChatName>Jane Doe</ChatName>
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
