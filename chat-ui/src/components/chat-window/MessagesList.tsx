import React from "react";
import { Message, MessageContent, MessagesContainer, MessageTimestamp2 } from "../../styled-components";
import { Message as MessageType, UserProfileDetails } from "../../utils/types";
import { formatTime, isAuthor } from "../../utils/helper";

type Props = {
  user: UserProfileDetails;
  messages: MessageType[];
};

export const MessagesList = ({ user, messages }: Props) => {
  return (
    <MessagesContainer>
      {messages.map((message, index) => (
        <React.Fragment key={index}>
          <Message isSent={isAuthor(message.author, user)}>
            <MessageContent>
              <p>{message.content}</p>
              <MessageTimestamp2>{formatTime(message.createdAt)}</MessageTimestamp2>
            </MessageContent>
          </Message>
        </React.Fragment>
      ))}
    </MessagesContainer>
  );
};
