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
import { Text } from "../../../styled-components";
import { UserProfileDetails } from "../../../utils/types";

type Props = {
  user: UserProfileDetails;
};

export const NotificationSidebar = ({user}:Props) => {
  return (
    <>
      <ChatListHeader>
        <HeaderTop>
          <h2>Notification</h2>
        </HeaderTop>
      </ChatListHeader>

      <ChatListContent>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <ChatListItem>
            <Avatar src={avatar1} alt="User" />
            <ChatInfo>
              <ChatName>Jane Doe</ChatName>
              <Text size="0.9rem">friend request</Text>
            </ChatInfo>
            <IoClose className="text-[#757575]" />
          </ChatListItem>
        ))}
      </ChatListContent>
    </>
  );
};
