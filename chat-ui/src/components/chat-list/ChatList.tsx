import { ChatList as ChatListUi } from "@styled";

import { FriendsSidebar } from "./sidebar-toggle/FriendsSidebar";
import { NotificationSidebar } from "./sidebar-toggle/NotificationSidebar";
import { FavoriteSidebar } from "./sidebar-toggle/FavoriteSidebar";
import { SettingsSidebar } from "./sidebar-toggle/SettingsSidebar";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ChatSidebar } from "./sidebar-toggle/ChatSidebar";
import { UserProfileDetails } from "../../utils/types";

type Props = {
  user: UserProfileDetails;
};

export const ChatList = ({user}:Props) => {
  const activeTab = useSelector((state: RootState) => state.sidebarToggle.sidebarTabs);

  const handle = () => {
    switch (true) {
      case activeTab === "chats":
        return <ChatSidebar user={user!} />;
      case activeTab === "friends":
        return <FriendsSidebar user={user!} />;
      case activeTab === "notification":
        return <NotificationSidebar user={user!}/>;
      case activeTab === "favorite":
        return <FavoriteSidebar user={user!}/>;
      case activeTab === "settings":
        return <SettingsSidebar user={user!}/>;
    }
  };

  return <ChatListUi>{handle()}</ChatListUi>;
};
