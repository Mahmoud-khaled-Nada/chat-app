import { Sidebar } from "@/components/chat/Sidebar";
import { ChatContainer } from "@styled";
import { ChatList } from "../chat-list/ChatList";
import { ChatWindow } from "../chat-window/ChatWindow";

export const ChatLayout = () => {
  return (
    <ChatContainer>
      <Sidebar />

      <ChatList />

      <ChatWindow />
    </ChatContainer>
  );
};
