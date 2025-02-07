import { useState } from "react";

import {
  ActionButton,
  Avatar,
  ChatInfo,
  ChatListActions,
  ChatListContent,
  ChatListHeader,
  ChatListItem,
  ChatName,
  FloatingUpdateButton,
  HeaderTop,
  LastMessage,
  MessageTimestamp,
  SearchBar,
  SearchInput,
} from "@styled";

import avatar1 from "@asset/avatars/avatar_1.jpg";
import avatar2 from "@asset/avatars/avatar_2.jpg";
import { LuEllipsisVertical } from "react-icons/lu";

import { MdAddComment } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

import { IoCheckmarkDone } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { UpdateMenu } from "../dropdown-menu/UpdateMenu";
import { NewConnectModel } from "../../models/NewConnectModel";

export const ChatSidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <NewConnectModel open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <ChatListHeader>
        <HeaderTop>
          <h2>Chats</h2>
          <ChatListActions>
            <ActionButton>
              <MdAddComment onClick={() => setIsDialogOpen(true)} />
            </ActionButton>
            <ActionButton>
              <LuEllipsisVertical />
            </ActionButton>
          </ChatListActions>
        </HeaderTop>

        <SearchBar>
          <IoMdSearch />
          <SearchInput type="text" placeholder="Search chats..." />
        </SearchBar>
      </ChatListHeader>

      <ChatListContent>
        <ChatListItem isActive={true}>
          <Avatar src={avatar1} alt="User" />
          <ChatInfo>
            <ChatName>Jane Doe</ChatName>
            <LastMessage>
              <IoCheckmarkDone />
              <p> Hey! How are you?</p>
            </LastMessage>
          </ChatInfo>
          <MessageTimestamp>10:30 AM</MessageTimestamp>
        </ChatListItem>

        <ChatListItem isActive={true}>
          <Avatar src={avatar2} alt="User" isActive={true} />
          <ChatInfo>
            <ChatName>Jane Doe</ChatName>
            <LastMessage isActive={true}>
              <IoCheckmarkDone />
              <p> Hey! How are you?</p>
            </LastMessage>
          </ChatInfo>
          <MessageTimestamp>10:30 AM</MessageTimestamp>
        </ChatListItem>
      </ChatListContent>
      {/* Floating Update Button */}
      <FloatingUpdateButton onClick={toggleMenu}>
        <IoMdAdd />
      </FloatingUpdateButton>

      {/* Dropdown Menu */}
      {isMenuOpen && <UpdateMenu closeMenu={closeMenu} />}
    </>
  );
};
