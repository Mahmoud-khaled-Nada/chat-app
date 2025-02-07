import { IoIosNotifications } from "react-icons/io";
import { NotificationBadge, NotificationWrapper } from "../../styled-components";
import { Dispatch } from "@reduxjs/toolkit";
import { setActiveTab } from "../../store/sidebarToggleSlice";

type Tab = "chats" | "friends" | "notification" | "favorite" | "settings";

type SetActiveTabAction = { type: string; payload: Tab };

type Props = {
  activeTab: Tab;
  dispatch: Dispatch<SetActiveTabAction>;
  notificationCount: number;
};

const Notification: React.FC<Props> = ({ activeTab, dispatch, notificationCount }) => {
  return (
    <NotificationWrapper
      onClick={() => dispatch(setActiveTab("notification"))}
      aria-label="Notification icon"
    >
      <IoIosNotifications className={activeTab === "notification" ? "active" : ""} aria-hidden="true" />
      {notificationCount > 0 && <NotificationBadge>{notificationCount}</NotificationBadge>}
    </NotificationWrapper>
  );
};

export default Notification;
