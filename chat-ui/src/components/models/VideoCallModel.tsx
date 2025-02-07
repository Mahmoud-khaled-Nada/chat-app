import React, { useState } from "react";
import styled from "styled-components";
import { FiPhoneOff, FiMic, FiUser } from "react-icons/fi";

const VideoCallContainer = styled.div`
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -15%);
  width: 600px;
  height: 450px;
  background: #222;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  padding: 10px 15px;
  background: #333;
  color: white;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 75%;
  position: relative;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DefaultVideo = styled.div`
  width: 80px;
  height: 80px;
  background: #555;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
`;

const MainVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SmallVideo = styled.video`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 100px;
  height: 80px;
  border-radius: 8px;
  border: 2px solid white;
  object-fit: cover;
`;

const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 12px;
  background: rgba(0, 0, 0, 0.5);
`;

const ControlButton = styled.button<{ bgColor: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 22px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.1);
    opacity: 0.85;
  }
`;

const VideoCallModel: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [hasVideo, setHasVideo] = useState(false);

  return (
    <VideoCallContainer>
      <Header>
        <HeaderTitle>
          <FiUser /> John Doe
        </HeaderTitle>
        <span>00:32</span>
      </Header>
      <VideoContainer>
        {hasVideo ? <MainVideo autoPlay /> : <DefaultVideo><FiUser /></DefaultVideo>}
        {hasVideo && <SmallVideo autoPlay muted />}
      </VideoContainer>
      <Controls>
        <ControlButton bgColor="#FF3B30">
          <FiPhoneOff />
        </ControlButton>
        <ControlButton
          bgColor={isMuted ? "#999" : "#4CAF50"}
          onClick={() => setIsMuted(!isMuted)}
        >
          <FiMic />
        </ControlButton>
      </Controls>
    </VideoCallContainer>
  );
};

export default VideoCallModel;
