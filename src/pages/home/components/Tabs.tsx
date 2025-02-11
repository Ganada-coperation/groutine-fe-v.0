import React from "react";
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';

const Tabs: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  // 헤더 높이에 맞게 탭 위치 조정
  let topOffset = isMobile ? '200px' : isTablet ? '250px' : '260px';

  return (
    <TabsContainer style={{ top: topOffset }}>
      <TabButton className="active">최신순</TabButton>
      <TabButton>인기순</TabButton>
    </TabsContainer>
  );
};

export default Tabs;

const TabsContainer = styled.div`
position: sticky;
  width: 100%;
  max-width: 768px; /* 부모 컨테이너를 벗어나지 않도록 제한 */
  margin: 0 auto;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  padding: 15px 20px;
  z-index: 999;
`;

const TabButton = styled.button`
  margin-right: 10px;
  padding: 6px 10px;
  border: none;
  border-radius: 50px;
  background-color: #ccd9dd;
  color: #02343f;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &.active {
    background-color: #02343f;
    color: #ccd9dd;
  }

  &:hover {
    background-color: #011f26;
    color: #ffffff;
  }
`;
