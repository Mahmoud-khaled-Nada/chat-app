import styled from "styled-components";
import { colors } from "./provider";

export const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const CloseButton = styled.button`
  font-size: 1.5rem;
  border: none;
  background: none;
  cursor: pointer;
`;

export const UserCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: ${colors.primary};
  border-radius: 12px;
  gap: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

export const UserInfo = styled.div`
  flex-grow: 1;

  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #f1f1f1;
  }

  p {
    margin: 4px 0 0;
    font-size: 0.9rem;
    color: #f1f1f1;
  }
`;

export const UserAboutDetails = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 95%;

  input {
    border: none;
    border-bottom: 1px solid #e5e5e5;
    color: #fff; 
    background: transparent;
    outline: none;
  }
  button {
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    margin-top: 5px;
    cursor: pointer;
  }
`;


export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const EditableField = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 1rem;
  margin: 4px 0;
  width: 100%;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #eee;
  margin: 20px 0;
`;

export const SettingItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e5e5e5;
`;

export const SettingItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px 0;

  div {
    h4 {
      margin: 0;
      font-size: 1rem;
      color: #333;
    }

    p {
      margin: 0;
      font-size: 0.85rem;
      color: #666;
    }
  }
`;

export const Arrow = styled.span`
  font-size: 1.5rem;
  color: #3a3a3a;
  transition: transform 0.3s ease;
  background-color: #eff1f2;
  border-radius: 50%;
  padding: 5px;
  border: none !important;

  &:hover {
    color: #fff;
    background-color: ${colors.primary};
  }
`;

export const SettingMenu = styled.div`
  padding: 10px 20px;
  background-color: #f1f1f1;
  border-radius: 5px;
  margin-top: 5px;
`;