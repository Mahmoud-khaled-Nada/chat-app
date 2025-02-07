import { useRef, useState } from "react";

import { FaEdit } from "react-icons/fa";
import {
  Avatar,
  EditButton,
  Input,
  UserAboutDetails,
  UserCard,
  UserInfo,
} from "../../../styled-components/settings";

import avatar1 from "@asset/avatars/avatar_1.jpg";

export const UserCardSetting = () => {
  const [avatar, setAvatar] = useState(avatar1);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Josephin Water");
  const [location, setLocation] = useState("Alabama, USA");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatar(URL.createObjectURL(file));
    }
  };

  return (
    <UserCard>
      <Avatar src={avatar} alt="User" onClick={handleAvatarClick} />
      <Input type="file" accept="image/*" ref={fileInputRef} onChange={handleAvatarChange} />
      <UserInfo>
        {isEditing ? (
          <UserAboutDetails>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <input value={location} onChange={(e) => setLocation(e.target.value)} />
          </UserAboutDetails>
        ) : (
          <>
            <h3>{name}</h3>
            <p>{location}</p>
          </>
        )}
      </UserInfo>
      <EditButton onClick={() => setIsEditing((prev) => !prev)}>
        <FaEdit />
      </EditButton>
    </UserCard>
  );
};
