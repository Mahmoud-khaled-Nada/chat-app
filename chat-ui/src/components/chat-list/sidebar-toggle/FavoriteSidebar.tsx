import {
  Avatar,
  ChatInfo,
  ChatListContent,
  ChatListHeader,
  ChatListItem,
  ChatName,
  HeaderTop,
} from "@styled";

import avatar1 from "@asset/avatars/avatar_1.jpg";

import { IoClose } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { Text } from "../../../styled-components";
import { FlexIcon } from "../../../styled-components/index";

export const FavoriteSidebar = () => {
  return (
    <>
      <ChatListHeader>
        <HeaderTop>
          <h2>Favorite</h2>
        </HeaderTop>
      </ChatListHeader>

      <ChatListContent>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <ChatListItem>
            <Avatar src={avatar1} alt="User" />
            <ChatInfo>
              <ChatName>Jane Doe</ChatName>
              <Text size="0.8rem">friend caption</Text>
            </ChatInfo>
            <FlexIcon>
              <FaStar className="text-[#01aa85]" />
              <IoClose className="text-[#757575]" />
            </FlexIcon>
          </ChatListItem>
        ))}
      </ChatListContent>
    </>
  );
};
