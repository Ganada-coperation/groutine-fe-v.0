import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BackKeyIcon from "@shared/assets/icon/ic-backkey.svg";

interface ChallengeHeaderProps {
  title: string;
}

const ChallengeHeader: React.FC<ChallengeHeaderProps> = ({ title }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/home");
  };

  return (
    <HeaderContainer>
      <BackIcon src={BackKeyIcon} alt="뒤로 가기" onClick={handleBackClick} />
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};

export default ChallengeHeader;

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BackIcon = styled.img`
  position: absolute;
  left: 20px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const HeaderTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #171717;
`;
