import { Sidebar } from "@/components/chat/Sidebar";
import { ChatContainer } from "@styled";
import { ChatList } from "../chat-list/ChatList";
import { ChatWindow } from "../chat-window/ChatWindow";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const ChatLayout = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <ChatContainer>
      <Sidebar user={user!} />

      <ChatList user={user!} />

      <ChatWindow user={user!}/>
    </ChatContainer>
  );
};
