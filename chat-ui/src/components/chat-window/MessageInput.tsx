import { IoMdSend } from "react-icons/io";
import {
  MessageInput as MessageInputUi,
  MessageInputContainer,
  MessageInputWrapper,
  SendButton,
} from "@styled";

import EmojiPicker from "emoji-picker-react";

import { FaSmile } from "react-icons/fa";
import { SecondaryCircleButton } from "../../styled-components";
import FloatingMenu from "./FloatingMenu";
import { useState } from "react";

export const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const handleEmojiClick = (emoji: any) => {
    setMessage((prev) => prev + emoji.emoji);
    setShowPicker(false);
  };
  return (
    <MessageInputContainer>
      <MessageInputWrapper>
        <FloatingMenu />

        <MessageInputUi
          placeholder="Write your message..."
          value={message}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
        />

        <div className="relative">
          <SecondaryCircleButton onClick={() => setShowPicker((prev) => !prev)}>
            <FaSmile className="icon" />
          </SecondaryCircleButton>

          {showPicker && (
            <div className="absolute bottom-12 right-0 z-50">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>

        <SendButton>
          <IoMdSend />
        </SendButton>
      </MessageInputWrapper>
    </MessageInputContainer>
  );
};
