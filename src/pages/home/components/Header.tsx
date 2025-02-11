import React from "react";
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';

const Header: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  // 화면 크기에 따라 동적으로 높이 설정
  let headerHeight = isMobile ? '180px' : isTablet ? '220px' : '260px';

  return (
    <HeaderContainer style={{ height: headerHeight }}>
      <HeaderContent>
        <HeaderTitle>다양한 챌린지에 도전하고</HeaderTitle>
        <HeaderSubtitle>~~~~하세요!</HeaderSubtitle>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: relative; /* HomePageContainer 내부에서 상대적 위치 */
  width: 100%;
  background: url("/images/header-background.png.jpg") no-repeat center center;
  background-size: cover;
  z-index: 1000;
`;


const HeaderContent = styled.div`
  position: absolute;
  bottom: 30px;
  left: 20px;
  color: #f9f6f2;
  font-size: 18px;
`;

const HeaderTitle = styled.h1`
  font-weight: bold;
  margin: 0;
`;

const HeaderSubtitle = styled.p`
  margin-top: 5px;
`;
