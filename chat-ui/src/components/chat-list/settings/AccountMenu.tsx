import { useState } from "react";
import { Arrow, SettingItemHeader, SettingMenu } from "../../../styled-components/settings";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { Text } from "../../../styled-components";

export const AccountMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <SettingItemHeader onClick={toggleMenu}>
        <div>
          <Text weight="600">Account</Text>
          <Text color="#696969">Update Your Account Details</Text>
        </div>
        <Arrow>{isMenuOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</Arrow>
      </SettingItemHeader>
      {isMenuOpen && (
        <SettingMenu>
          <p>Menu content here: Add options like "Change Password," "Edit Profile," etc.</p>
        </SettingMenu>
      )}
    </>
  );
};
