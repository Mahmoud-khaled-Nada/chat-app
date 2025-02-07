import { Sidebar as SidebarUi, SidebarTop, LogoutIcon } from "@styled";
import sidebarlogo from "@asset/sidebar-logo.png";
import { IoIosChatbubbles } from "react-icons/io";
import { HiUsers } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { AppDispatch, RootState } from "../../store/index";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../store/sidebarToggleSlice";
import Notification from "../notification/Notification";
import { LogoutModel } from "../models/LogoutModel";
import { useState } from "react";

export const Sidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const activeTab = useSelector((state: RootState) => state.sidebarToggle.sidebarTabs);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  return (
    <SidebarUi>
      <SidebarTop>
        <img src={sidebarlogo} alt="Sidebar Logo" />
        <IoIosChatbubbles
          className={activeTab === "chats" ? "active" : ""}
          onClick={() => dispatch(setActiveTab("chats"))}
        />
        <HiUsers
          className={activeTab === "friends" ? "active" : ""}
          onClick={() => dispatch(setActiveTab("friends"))}
        />

        <Notification activeTab={activeTab} dispatch={dispatch} notificationCount={10} />

        <FaStar
          className={activeTab === "favorite" ? "active" : ""}
          onClick={() => dispatch(setActiveTab("favorite"))}
        />
        <IoMdSettings
          className={activeTab === "settings" ? "active" : ""}
          onClick={() => dispatch(setActiveTab("settings"))}
        />
      </SidebarTop>
      <LogoutIcon onClick={() => setIsLogoutOpen(true)}>
        <RiLogoutCircleLine />
        <LogoutModel open={isLogoutOpen} onOpenChange={setIsLogoutOpen} />
      </LogoutIcon>
    </SidebarUi>
  );
};
