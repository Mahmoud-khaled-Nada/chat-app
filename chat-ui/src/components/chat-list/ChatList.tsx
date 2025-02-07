import { ChatList as ChatListUi } from "@styled";

import { FriendsSidebar } from "./sidebar-toggle/FriendsSidebar";
import { NotificationSidebar } from "./sidebar-toggle/NotificationSidebar";
import { FavoriteSidebar } from "./sidebar-toggle/FavoriteSidebar";
import { SettingsSidebar } from "./sidebar-toggle/SettingsSidebar";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ChatSidebar } from "./sidebar-toggle/ChatSidebar";

export const ChatList = () => {
  const activeTab = useSelector((state: RootState) => state.sidebarToggle.sidebarTabs);

  const handle = () => {
    switch (true) {
      case activeTab === "chats":
        return <ChatSidebar />;
      case activeTab === "friends":
        return <FriendsSidebar />;
      case activeTab === "notification":
        return <NotificationSidebar />;
      case activeTab === "favorite":
        return <FavoriteSidebar />;
      case activeTab === "settings":
        return <SettingsSidebar />;
    }
  };

  return <ChatListUi>{handle()}</ChatListUi>;
};
