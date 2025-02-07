import React from "react";
import styled from "styled-components";

interface ChallengeHeaderProps {
  title: string;
}

const ChallengeHeader: React.FC<ChallengeHeaderProps> = ({ title }) => {
  return (
    <HeaderContainer>
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
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #171717;
`;
