import React from "react";
import styled from "styled-components";

const BottomNavigation: React.FC = () => {
  return (
    <Nav>
      <NavItem className="active">
        <span>🏠</span>
        <p>챌린지</p>
      </NavItem>
      <NavItem>
        <span>📅</span>
        <p>미션</p>
      </NavItem>
      <NavItem>
        <span>👤</span>
        <p>MY</p>
      </NavItem>
    </Nav>
  );
};

export default BottomNavigation;

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  border-top: 1px solid #e5e7eb;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);

  /* 반응형 높이 조정 */
  @media (max-width: 767px) {
    height: 60px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    height: 70px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    height: 80px;
  }
  @media (min-width: 1200px) {
    height: 80px;
  }
`;



const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 14px;
  cursor: pointer;

  &.active {
    color: #0d9488;
    font-weight: bold;
  }

  span {
    font-size: 24px;

    /* 반응형 아이콘 크기 조정 */
    @media (max-width: 767px) {
      font-size: 20px;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 24px;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
      font-size: 28px;
    }

    @media (min-width: 1200px) {
      font-size: 32px;
    }
  }

  p {
    font-size: 12px;

    /* 반응형 글씨 크기 조정 */
    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 14px;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
      font-size: 16px;
    }

    @media (min-width: 1200px) {
      font-size: 16px;
    }
  }
`;
