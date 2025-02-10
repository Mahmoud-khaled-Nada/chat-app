import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChatWindow as ChatWindowUi, EmptyMessagesImage } from "../../styled-components";
import { MessageInput } from "./MessageInput";
import { MessagesList } from "./MessagesList";
import { ChatWindowHeader } from "./ChatWindowHeader";
import emptyBackground from "@asset/empty.gif";
import { AppDispatch, RootState } from "../../store";
import { UserProfileDetails, Message, MessagesResponse } from "../../utils/types";
import { getMessagesById } from "../../utils/api";
import { selectConversationById, updateConversation } from "../../store/conversationSlice";
import { socket } from "../../utils/socket";

type Props = {
  user: UserProfileDetails;
};

export const ChatWindow = ({ user }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { conversationId } = useSelector((state: RootState) => state.conversation);
  const conversation = useSelector((state: RootState) => selectConversationById(state, conversationId!));
  const [messages, setMessages] = useState<Message[]>([]);

  const fetchMessages = useCallback(async () => {
    if (!conversationId) return;

    try {
      const { data }: { data: MessagesResponse } = await getMessagesById(conversationId);
      setMessages(data.messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  }, [conversationId]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  useEffect(() => {
    const handleNewMessage = (data: { conversation: any; message: Message }) => {
      const { conversation, message } = data;

      dispatch(updateConversation(conversation));

      setMessages((prev) => {
        const updatedMessages = [message, ...prev];

        return updatedMessages.slice(0, 10);
      });
    };

    socket.on("onMessage", handleNewMessage);

    return () => {
      socket.off("onMessage", handleNewMessage);
    };
  }, [conversationId, dispatch]);

  return (
    <ChatWindowUi>
      {conversationId ? (
        <React.Fragment>
          {conversation && <ChatWindowHeader user={user} conversation={conversation} />}
          <MessagesList user={user} messages={messages} />
          <MessageInput conversationId={conversationId} />
        </React.Fragment>
      ) : (
        <EmptyMessagesImage src={emptyBackground} />
      )}
    </ChatWindowUi>
  );
};
