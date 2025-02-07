import { Avatar, Message, MessageContent, MessagesContainer, MessageTimestamp2 } from "@styled";

import avatar2 from "@asset/avatars/avatar_2.jpg";
export const MessagesList = () => {
  return (
    <MessagesContainer>
      <Message isSent={false}>
        <Avatar src={avatar2} alt="User" />
        <MessageContent>
          <p>Hey! How are you?</p>
          <MessageTimestamp2>10:30 AM</MessageTimestamp2>
        </MessageContent>
      </Message>

      <Message isSent={true}>
        <MessageContent>
          <p>I'm good, thanks! What about you?</p>
          <MessageTimestamp2>10:32 AM</MessageTimestamp2>
        </MessageContent>
      </Message>
    </MessagesContainer>
  );
};
