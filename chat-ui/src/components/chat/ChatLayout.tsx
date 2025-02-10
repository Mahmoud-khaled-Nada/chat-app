import { ChatContainer } from "../../styled-components";
import { ChatList } from "../chat-list/ChatList";
import { ChatWindow } from "../chat-window/ChatWindow";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Sidebar } from "./Sidebar";
import { useEffect } from "react";
import { socket } from "../../utils/socket";

export const ChatLayout = () => {
  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    // Ensure WebSocket is connected on mount or after login
    if (user) {
      socket.connect();
      console.log("WebSocket connected");

      // Listen for WebSocket connection events
      socket.on("connected", () => {
        console.log("WebSocket connection established");
      });

      socket.on("disconnect", () => {
        console.log("WebSocket disconnected");
      });

      return () => {
        // Clean up the connection on unmount
        socket.off("connected");
        socket.off("disconnect");
        socket.disconnect();
        console.log("WebSocket disconnected");
      };
    }
  }, [user]);

  return (
    <ChatContainer>
      <Sidebar user={user!} />

      <ChatList user={user!} />

      <ChatWindow user={user!} />
    </ChatContainer>
  );
};
