import { useEffect, useState } from "react";
import avatar2 from "@asset/avatars/avatar_2.jpg";
import { LuEllipsisVertical } from "react-icons/lu";
import { MdAddComment } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { IoCheckmarkDone } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { UpdateMenu } from "../dropdown-menu/UpdateMenu";
import { NewConnectModel } from "../../models/NewConnectModel";
import { UserProfileDetails } from "../../../utils/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { fetchConversationsThunk, setSelectedConversation } from "../../../store/conversationSlice";
import { conversationAvatar, conversationformatName, formatTime } from "../../../utils/helper";
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
} from "../../../styled-components";


type Props = {
  user: UserProfileDetails;
};

export const ChatSidebar = ({ user }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    dispatch(fetchConversationsThunk());
  }, []);

  const { conversations } = useSelector((state: RootState) => state.conversation);

  const openConversation = (id: number) => {
    dispatch(setSelectedConversation(id));
  };

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
        {conversations &&
          conversations.length > 0 &&
          conversations.map((conversation, index) => (
            <ChatListItem key={index} isActive={true} onClick={() => openConversation(conversation.id)}>
              <Avatar src={conversationAvatar(conversation, user.id) || avatar2} alt="User" isActive={true} />
              <ChatInfo>
                <ChatName>{conversationformatName(conversation, user.id)}</ChatName>
                <LastMessage isActive={false}>
                  <IoCheckmarkDone />
                  <p>{conversation.lastMessageSent?.content}</p>
                </LastMessage>
              </ChatInfo>
              <MessageTimestamp>{formatTime(conversation.lastMessageSentAt) || "10:30 AM"}</MessageTimestamp>
            </ChatListItem>
          ))}
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
