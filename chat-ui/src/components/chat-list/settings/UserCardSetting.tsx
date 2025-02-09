import { useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";
import avatar1 from "@asset/avatars/avatar_1.jpg";
import { postUpdateUserProfile } from "../../../utils/api";
import { UserProfileDetails } from "../../../utils/types";
import { getAvatar } from "../../../utils/helper";
import { useToast } from "../../../utils/hooks/useToast";
import { storage } from "../../../utils/storage";
import {
  Avatar,
  EditButton,
  Input,
  UserAboutDetails,
  UserCard,
  UserInfo,
} from "../../../styled-components/settings";

type Props = {
  user: UserProfileDetails;
};

export const UserCardSetting = ({ user }: Props) => {
  const userAvatar = user && getAvatar(user.profile);
  const userAbout = user && user.profile?.about;
  const [avatar, setAvatar] = useState(userAvatar || avatar1);
  const [uploadAvatar, setUploadAvatar] = useState<Blob | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [about, setAbout] = useState(userAbout || "Josephin Water");
  const [location, setLocation] = useState("Alabama, USA");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ✅ Handle File Upload
  const handleAvatarClick = () => fileInputRef.current?.click();

  const { success, error } = useToast();

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadAvatar(file);
      setAvatar(URL.createObjectURL(file));
    }
  };

  // ✅ Handle Profile Update
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("about", about);
    if (uploadAvatar) {
      formData.append("avatar", uploadAvatar);
    }

    postUpdateUserProfile(formData)
      .then((res) => {
        storage.cookies_delete("user_token");
        success("Profile updated successfully");
      })
      .catch((err) => {
        error("Failed to update profile", err.message);
      });

    setIsEditing(false);
  };

  return (
    <UserCard>
      <Avatar src={avatar} alt="User Avatar" onClick={handleAvatarClick} />
      <Input type="file" accept="image/*" ref={fileInputRef} onChange={handleAvatarChange} hidden />

      <UserInfo>
        {isEditing ? (
          <UserAboutDetails as="form" onSubmit={handleSubmit}>
            <input value={about} onChange={(e) => setAbout(e.target.value)} />
            <input value={location} onChange={(e) => setLocation(e.target.value)} />
            <button type="submit">Save</button> {/* ✅ Submit Button */}
          </UserAboutDetails>
        ) : (
          <>
            <h3>{about}</h3>
            <p>{location}</p>
          </>
        )}
      </UserInfo>

      <EditButton onClick={() => setIsEditing((prev) => !prev)}>
        <FaEdit size={20} />
      </EditButton>
    </UserCard>
  );
};
