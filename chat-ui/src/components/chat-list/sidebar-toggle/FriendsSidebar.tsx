import {
  Avatar,
  ChatInfo,
  ChatListContent,
  ChatListHeader,
  ChatListItem,
  ChatName,
  HeaderTop,
  SearchBar,
  SearchInput,
} from "@styled";

import avatar1 from "@asset/avatars/avatar_1.jpg";

import { MdAddComment } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

import { IoClose } from "react-icons/io5";
import { FlexIcon } from "../../../styled-components";

export const FriendsSidebar = () => {
  return (
    <>
      <ChatListHeader>
        <HeaderTop>
          <h2>Friends</h2>
        </HeaderTop>
        <SearchBar>
          <IoMdSearch />
          <SearchInput type="text" placeholder="Search friends..." />
        </SearchBar>
      </ChatListHeader>

      <ChatListContent>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <ChatListItem>
            <Avatar src={avatar1} alt="User" />
            <ChatInfo>
              <ChatName>Jane Doe</ChatName>
            </ChatInfo>
            <FlexIcon>
              <MdAddComment className="comment" />
              <IoClose className="delete" />
            </FlexIcon>
          </ChatListItem>
        ))}
      </ChatListContent>
    </>
  );
};
