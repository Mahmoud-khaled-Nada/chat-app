import { ChatWindow as ChatWindowUi } from "@styled";
import { MessageInput } from "./MessageInput";
import { MessagesList } from "./MessagesList";
import { ChatWindowHeader } from "./ChatWindowHeader";
import { EmptyMessagesImage } from "../../styled-components";

import emptyBackground from "@asset/empty.gif";
export const ChatWindow = () => {
  const conversation = false;

  return (
    <ChatWindowUi>
      {
        conversation ? (
          <>
          
          <ChatWindowHeader />
          <MessagesList />
          <MessageInput />
          </>
        ) : (
          <EmptyMessagesImage src={emptyBackground}/>
        )
      }

    </ChatWindowUi>
  );
};
