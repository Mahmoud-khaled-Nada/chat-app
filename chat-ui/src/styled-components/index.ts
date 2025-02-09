import styled from "styled-components";
import { colors } from "@styled/provider";
import { fontFamily } from "./provider";
import { CheckActiveParams, TextType } from "./types";
import chatBackground from "@asset/chat-body-2.jpg";

export const Text = styled.p<TextType>`
  font-size: ${({ size }) => (size ? size : `1rem`)};
  color: ${({ color }) => (color ? color : `#757575`)};
  font-weight: ${({ weight }) => (weight ? weight : `normal`)};
  font-family: ${({ family }) => (family ? family : `inherit`)};
`;

export const SignSection = styled.section`
  background-color: ${colors.secondary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const SignTab = styled.div`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: ${colors.w};
  border-radius: 15px;
  box-shadow: 0 7px 29px rgba(127, 131, 132, 0.2);
  padding: 15px 25px;
  width: max-content;
  z-index: 100;
`;

export const SignTabBtn = styled.button`
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  font-family: ${fontFamily};
  min-width: 180px;
  padding: 7px 30px;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary};
  }

  &[aria-selected="true"] {
    background-color: ${colors.secondary};
    color: ${colors.primary};
    font-weight: 700;
  }
`;

export const SignCard = styled.div`
  background-color: ${colors.w};
  width: 550px;
  border-radius: 15px;
  box-shadow: 0 7px 29px rgba(127, 131, 132, 0.2);
  padding: 25px;
  text-align: center;
  box-sizing: border-box;
`;

export const SignCardHeader = styled.div`
  margin-bottom: 2rem;
`;

export const SignCardLogo = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 1rem;
  object-fit: contain;
  margin: 0 auto;
`;

export const SignCardH1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: ${fontFamily};
  margin-bottom: 0.5rem;
  color: ${colors.primary};
`;

// Paragraph text inside sign card
export const SignCardP = styled.p`
  font-size: 1rem;
  font-weight: 400;
  font-family: ${fontFamily};
  color: ${colors.p}; // Assuming colors.secondaryText exists
  margin-bottom: 1rem;
  line-height: 1.5;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

//________________________________________________________________________________________

export const ChatContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const Sidebar = styled.div`
  background-color: ${colors.primary};
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;
  padding: 1rem;
  height: 100%;
`;

export const SidebarTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    margin-bottom: 1rem;
    border-radius: 50%;
  }

  svg {
    font-size: 2rem;
    margin: 1rem 0;
    cursor: pointer;
    transition: color 0.3s;
    color: #fff; /* Default color */

    &:hover {
      color: #00e676;
    }
  }

  .active {
    color: #00e676; /* Active tab color */
  }
`;

export const LogoutIcon = styled.div`
  svg {
    font-size: 2rem;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #ff5252;
    }
  }
`;

export const ChatList = styled.div`
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 420px;
  width: 420px;
`;

export const ChatListHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
  background-color: #fff;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.3rem;
    font-weight: 600;
    color: ${colors.primary};
  }
`;

export const ChatListActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  font-size: 1.3rem;
  color: ${colors.primary};
  cursor: pointer;
  padding: 0.4rem;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  padding: 0.5rem;
  gap: 0.5rem;
  border: 1px solid #ddd;

  svg {
    color: ${colors.primary};
    font-size: 1.2rem;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  color: #333;

  &::placeholder {
    color: #aaa;
  }
`;

export const ChatListContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 0.5rem 1rem;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.primary};
  }
`;

export const ChatListItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isActive",
})<CheckActiveParams>`
  display: flex;
  align-items: center;
  padding: 0.8rem;
  border-bottom: 2px solid #e0e0e0;
  transition: background-color 0.3s;
  cursor: ${({ isActive }) => (isActive ? `pointer` : "default")};

  &:hover {
    background-color: ${({ isActive }) => (isActive ? `#f5f5f5` : "")};
  }
`;

export const Avatar = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== "isActive",
})<CheckActiveParams>`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: ${({ isActive }) => (isActive ? `2px solid ${colors.primary}` : "none")};
  object-fit: cover;
  margin-right: 1rem;
`;

export const ChatInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.2rem;
`;

export const ChatName = styled.span`
  font-weight: bold;
  font-size: 1rem;
  color: ${colors.primary};
`;

export const LastMessage = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isActive",
})<CheckActiveParams>`
  display: flex;
  align-items: center;
  gap: 5px;

  p {
    font-size: 0.85rem;
    color: #757575;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
  }

  svg {
    color: ${({ isActive }) => (isActive && colors.primary) || "#757575"};
    font-size: 1.1rem;
  }
`;

export const MessageTimestamp = styled.span`
  font-size: 0.8rem;
  color: #bdbdbd;
  white-space: nowrap;
`;

export const FloatingUpdateButton = styled.button`
  position: fixed;
  top: 90%;
  left: 450px;
  transform: translateY(-50%);
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
`;

// Dropdown Menu
export const UpdateMenu = styled.div`
  position: fixed;
  top: 75%;
  left: 295px;
  transform: translateY(-50%);
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  width: 180px;
  display: flex;
  flex-direction: column;
  z-index: 100;
`;

// Menu Item Styling
export const MenuItem = styled.button`
  background: none;
  border: none;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  cursor: pointer;
  color: ${colors.primary};
  transition: background 0.3s ease;

  &:hover {
    background: #f5f5f5;
  }

  svg {
    font-size: 1.2rem;
  }
`;

export const ChatWindow = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100vh;
  flex-grow: 1;
  background-color: ${colors.secondary};
`;

/* Header Section */
export const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ChatStatus = styled.div`
  font-size: 0.85rem;
  color: #4caf50;
`;

export const ChatActions = styled.div`
  display: flex;
  gap: 10px;
`;

//-------------------

export const EmptyMessagesImage = styled.img`
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
  padding: 1rem;
  width: 25%;
  margin: auto;
`;

// Messages Container

export const MessagesContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
  padding: 1rem;
  background-image: url(${chatBackground});
  background-size: cover;
  background-position: center;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: ${colors.primary};

  }
`;

// Message Content
export const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px;
  p {
    margin: 0;
    font-size: 0.95rem;
    color: #333;
  }
`;

export const Message = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isSent",
})<{ isSent: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
  justify-content: ${({ isSent }) => (isSent ? "flex-end" : "flex-start")};

  ${MessageContent} {
    background-color: ${({ isSent }) => (isSent ? "#DCF8C6" : "#f1f1f1")};
    border-radius:${({ isSent }) => (isSent ? "15px 0 15px 15px" : "0 15px 15px 15px")}  ;
    padding: 10px;
    max-width: 60%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Add a subtle shadow for depth */
  }
`;

// Message Timestamp
export const MessageTimestamp2 = styled.span`
  font-size: 0.75rem;
  color: #888;
  align-self: flex-end;
`;

//----------------

/* Input Section */
export const MessageInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const MessageInputWrapper = styled.div`
  display: flex;
  align-items: center; /* Centers items vertically */
  justify-content: center; /* Centers content horizontally */
  flex-grow: 1;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;
  gap: 10px;
  position: relative;
  height: 70px;
`;

export const MessageInput = styled.textarea`
  flex-grow: 1;
  border: none;
  outline: none;
  resize: none;
  font-size: 1rem;
  background-color: transparent;
  padding: 8px 10px;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;

  &::placeholder {
    color: #aaa;
    font-size: 0.95rem;
  }

  &:focus {
    outline: none;
  }
`;

export const SendButton = styled.button`
  background-color: ${colors.primary};
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;

  svg {
    font-size: 1.5rem;
  }
`;

export const SecondaryCircleButton = styled.button`
  background-color: ${colors.secondary};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${colors.primary};
  .icon {
    font-size: 1.5rem;
    color: ${colors.primary};
    cursor: pointer;
    transition: color 0.3s;
  }
`;

// Menu Container
export const MenuContainer = styled.div`
  position: absolute;
  bottom: 60px;
  right: -100px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
  width: auto;
  display: flex;
  gap: 10px;
`;

// Menu Item (Icon Button)
export const MenuUploadItem = styled.button`
  background: none;
  border: none;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    background-color: #f5f5f5;
  }
`;

// Icon Circle
export const MenuIcon = styled.div`
  background-color: ${colors.primary};
  color: white;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.2rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005ecb;
  }
`;

export const FlexIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  .comment {
    cursor: pointer;
    transition: color 0.3ms;
    color: #01aa85;
    font-size: 19px;
  }

  .delete {
    cursor: pointer;
    transition: color 0.3ms;
    color: #fb1414;
    font-size: 19px;
  }
`;

export const NotificationWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const NotificationBadge = styled.span`
  position: absolute;
  top: 15px;
  right: 20px;
  background-color: red;
  color: white;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  border: 2px solid white;
  padding: 2px; // Add padding to ensure text fits properly
`;
