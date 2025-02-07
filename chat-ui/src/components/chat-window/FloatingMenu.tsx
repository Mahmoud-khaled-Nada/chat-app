import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

import { FaFileAlt, FaImage, FaCamera } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MenuContainer, MenuIcon, MenuUploadItem, SecondaryCircleButton } from "@styled";

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <SecondaryCircleButton onClick={() => setIsOpen(!isOpen)}>
        <IoMdAdd className="icon" />
      </SecondaryCircleButton>

      {/* Menu */}
      {isOpen && (
        <MenuContainer>
          <div>
            <MenuUploadItem onClick={() => alert("New Chat")}>
              <MenuIcon>
                <FaFileAlt />
              </MenuIcon>
            </MenuUploadItem>
            <MenuUploadItem onClick={() => alert("New Call")}>
              <MenuIcon>
                <FaImage />
              </MenuIcon>
            </MenuUploadItem>
          </div>
          <div>
            <MenuUploadItem onClick={() => alert("New Contact")}>
              <MenuIcon>
                <FaLocationDot />
              </MenuIcon>
            </MenuUploadItem>
            <MenuUploadItem onClick={() => alert("New Camera")}>
              <MenuIcon>
                <FaCamera />
              </MenuIcon>
            </MenuUploadItem>
          </div>
        </MenuContainer>
      )}
    </div>
  );
};

export default FloatingMenu;
