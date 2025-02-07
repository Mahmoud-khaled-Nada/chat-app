import { FC, useState } from "react";
import { FaUserPlus } from "react-icons/fa6";
import { UpdateMenu as UpdateMenuUi, MenuItem } from "../../../styled-components";
import { NewConnectModel } from "../../models/NewConnectModel";
import { FaCommentAlt, FaPhoneAlt } from "react-icons/fa";


type Props = {
    closeMenu: () => void;
  };
  
  export const UpdateMenu: FC<Props> = ({ closeMenu }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
 
    return (
      <>
        <UpdateMenuUi>
          <MenuItem onClick={closeMenu}>
            <FaCommentAlt /> New Chat
          </MenuItem>
          <MenuItem onClick={closeMenu}>
            <FaPhoneAlt /> New Call
          </MenuItem>
          <MenuItem onClick={() => setIsDialogOpen(true)}>
            <FaUserPlus /> New Connect
          </MenuItem>
        </UpdateMenuUi>
  
        {/* Ensure the modal remains mounted even when menu closes */}
        <NewConnectModel open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      </>
    );
  };