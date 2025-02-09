import { ChatWindow as ChatWindowUi } from "@styled";
import { MessageInput } from "./MessageInput";
import { MessagesList } from "./MessagesList";
import { ChatWindowHeader } from "./ChatWindowHeader";
import { EmptyMessagesImage } from "../../styled-components";
import emptyBackground from "@asset/empty.gif";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { UserProfileDetails } from "../../utils/types";
import React, { useEffect } from "react";
import { getConversationById } from "../../utils/api";

type Props = {
  user: UserProfileDetails;
};

export const ChatWindow = ({ user }: Props) => {
  const { conversationId } = useSelector((state: RootState) => state.conversation);
  const []

  useEffect(() => {
    if (!conversationId) return;

    getConversationById(conversationId)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, [conversationId]);

  return (
    <ChatWindowUi>
      {conversationId ? (
        <React.Fragment>
          <ChatWindowHeader />
          <MessagesList />
          <MessageInput />
        </React.Fragment>
      ) : (
        <EmptyMessagesImage src={emptyBackground} />
      )}
    </ChatWindowUi>
  );
};
