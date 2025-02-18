// groutine-fe-v.0\src\pages\home\components\BottomNavigation.tsx
import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom"; // useNavigate 추가
import ChallengeIcon from "@icon/ic-bottomnav-challenge.svg";
import MissionIcon from "@icon/ic-bottomnav-mission.svg";
import MyIcon from "@icon/ic-bottomnav-my.svg";
import { useMediaQuery } from "react-responsive";

const BottomNavigation: React.FC = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const location = useLocation(); // useLocation 훅 사용

  // 현재 경로 확인
  const isChallengeActive = location.pathname === '/home';
  const isMissionActive = location.pathname === '/mission'; // 미션 페이지 경로에 따라 수정
  const isMyActive = location.pathname === '/my';

  // 반응형 화면 크기 체크
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isDesktop = useMediaQuery({ minWidth: 992 });

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Nav isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop}>
      <NavItem
        isMobile={isMobile}
        isTablet={isTablet}
        isDesktop={isDesktop}
        onClick={() => handleNavigation('/home')}
        className={isChallengeActive ? 'active' : ''}
      >
        <Logo
          isMobile={isMobile}
          isTablet={isTablet}
          isDesktop={isDesktop}
          src={ChallengeIcon}
          alt="챌린지 아이콘"
        />
        <p>챌린지</p>
      </NavItem>
      <NavItem
        isMobile={isMobile}
        isTablet={isTablet}
        isDesktop={isDesktop}
        onClick={() => handleNavigation('/mission')} // 미션 페이지 경로에 따라 수정
        className={isMissionActive ? 'active' : ''}
      >
        <Logo
          isMobile={isMobile}
          isTablet={isTablet}
          isDesktop={isDesktop}
          src={MissionIcon}
          alt="미션 아이콘"
        />
        <p>미션</p>
      </NavItem>
      <NavItem
        isMobile={isMobile}
        isTablet={isTablet}
        isDesktop={isDesktop}
        onClick={() => handleNavigation('/my')}
        className={isMyActive ? 'active' : ''}
      >
        <Logo
          isMobile={isMobile}
          isTablet={isTablet}
          isDesktop={isDesktop}
          src={MyIcon}
          alt="MY 아이콘"
        />
        <p>MY</p>
      </NavItem>
    </Nav>
  );
};

export default BottomNavigation;

interface NavProps {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const Nav = styled.nav<NavProps>`
  width: 100%;
  height: ${(props) => (props.isMobile ? "60px" : props.isTablet ? "70px" : "80px")};
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  border-top: 1px solid #e5e7eb;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

interface NavItemProps extends NavProps {
  className?: string;
}

const NavItem = styled.div<NavItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 14px;
  cursor: pointer;

  &.active {
    color: #02343f;
    font-weight: bold;
  }

  p {
    font-size: ${(props) => (props.isMobile ? "12px" : props.isTablet ? "14px" : "16px")};
    margin-top: 4px;
  }
`;

interface LogoProps extends NavProps { }

const Logo = styled.img<LogoProps>`
  width: ${(props) => (props.isMobile ? "20px" : props.isTablet ? "24px" : "32px")};
  height: auto;
`;
