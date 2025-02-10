import { IoMdSend } from "react-icons/io";
import {
  MessageInput as Input,
  MessageInputContainer,
  MessageInputWrapper,
  SendButton,
} from "../../styled-components";

import EmojiPicker from "emoji-picker-react";

import { FaSmile } from "react-icons/fa";
import { SecondaryCircleButton } from "../../styled-components";
import FloatingMenu from "./FloatingMenu";
import { useState } from "react";
import { postMessage } from "../../utils/api";

type Props = {
  conversationId: number;
};

export const MessageInput = ({ conversationId }: Props) => {
  const [message, setMessage] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const handleEmojiClick = (emoji: any) => {
    setMessage((prev) => prev + emoji.emoji);
    setShowPicker(false);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && message.trim() !== "") {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (!message.trim()) return;
  
    const formData = new FormData();
    formData.append("conversationId", conversationId.toString());
    formData.append("content", message);  
    postMessage(formData)
      .then((res) => console.log("Message sent successfully:"))
      .catch((err) => console.error("Message send failed:"));
  
    console.log("Sending message:", message);
    setMessage("");
  };
  

  return (
    <MessageInputContainer>
      <MessageInputWrapper>
        <FloatingMenu />

        <Input
          as="textarea"
          placeholder="Write your message..."
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} // ✅ Corrected type
          onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => handleKeyDown(e)} // ✅ Corrected type
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

        <SendButton onClick={sendMessage}>
          {" "}
          {/* ✅ Send message on button click */}
          <IoMdSend />
        </SendButton>
      </MessageInputWrapper>
    </MessageInputContainer>
  );
};
