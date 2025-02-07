import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderOverlay>
        <HeaderTitle>다양한 챌린지에 도전하고</HeaderTitle>
        <HeaderSubtitle>~~~~하세요!</HeaderSubtitle>
      </HeaderOverlay>
    </HeaderContainer>
  );
};

export default Header;

/* ✅ 헤더 전체 스타일 */
const HeaderContainer = styled.header`
  background: url("/images/header-background.png.jpg") no-repeat center center;
  background-size: cover;
  position: relative;
  height: 250px; /* 기본 높이 */

  @media (max-width: 767px) {
    height: 200px; /* 모바일 */
  }
  @media (min-width: 768px) and (max-width: 991px) {
    height: 250px; /* 테블릿 세로 */
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    height: 300px; /* 테블릿 가로 */
  }
  @media (min-width: 1200px) {
    height: 350px; /* 데스크탑 */
  }
`;

/* ✅ 헤더 오버레이 */
const HeaderOverlay = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #F9F6F2;
`;

/* ✅ 헤더 타이틀 */
const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 20px; /* 모바일 */
  }
  @media (min-width: 1200px) {
    font-size: 28px; /* 데스크탑 */
  }
`;

/* ✅ 헤더 서브 타이틀 */
const HeaderSubtitle = styled.p`
  font-size: 16px;
  margin-top: 5px;

  @media (max-width: 767px) {
    font-size: 14px; /* 모바일 */
  }
  @media (min-width: 1200px) {
    font-size: 18px; /* 데스크탑 */
  }
`;
