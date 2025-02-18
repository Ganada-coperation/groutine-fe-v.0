import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import Header from "@home/components/Header.tsx";
import Tabs from "@home/components/Tabs.tsx";
import ChallengeCard from "@home/components/ChallengeCard.tsx";
import BottomNavigation from "@home/components/BottomNavigation.tsx";

// 이미지 import
import detoxImage from "/images/detox.jpg";
import runningImage from "/images/running.jpg";
import householdImage from "/images/household.jpg";
import newsletterImage from "/images/newsletter.jpg";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/challenge/${id}`);
  };

  // 반응형으로 Header + Tabs 높이 설정
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  const headerHeight = isMobile ? 180 : isTablet ? 220 : 260;
  const tabsHeight = isMobile ? 50 : 60;
  const totalOffset = headerHeight + tabsHeight;

  return (
    <HomePageContainer>
      {/* 헤더 (부모 화면 비율에 맞게 설정) */}
      <HeaderWrapper style={{ height: `${headerHeight}px` }}>
        <Header />
      </HeaderWrapper>

      {/* 헤더 바로 아래 탭 */}
      <TabsWrapper style={{ top: `${headerHeight}px`, height: `${tabsHeight}px` }}>
        <Tabs />
      </TabsWrapper>

      {/* 컨텐츠 (고정된 헤더+탭 아래에서 시작) */}
      <MainContent style={{ paddingTop: `${totalOffset}px` }}>
        <CardsContainer>
          <ChallengeCard id="1" image={detoxImage} title="디지털 디톡스 가보자!" date="2024.06.01 - 2024.08.02" participants={99} />
          <ChallengeCard id="2" image={runningImage} title="불타오르는 유산소🔥" date="2024.06.01 - 2024.08.02" participants={88} />
          <ChallengeCard id="3" image={householdImage} title="가계부 작성" date="2024.06.01 - 2024.08.02" participants={88} />
          <ChallengeCard id="4" image={newsletterImage} title="굿모닝 경제 신문 스크랩" date="2024.06.01 - 2024.08.02" participants={88} />
          <ChallengeCard id="5" image={newsletterImage} title="굿모닝 경제 신문 스크랩" date="2024.06.01 - 2024.08.02" participants={88} />
        </CardsContainer>
      </MainContent>
      <BottomNavigation />
    </HomePageContainer>
  );
};

// 부모 컨테이너
const HomePageContainer = styled.div`
  position: relative; /* Header와 Tabs를 이 컨테이너 기준으로 위치 지정 */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
`;

// 헤더 스타일
const HeaderWrapper = styled.div`
  position: absolute; /* 부모(HomePageContainer) 기준으로 고정 */
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
`;

// 탭 스타일 (헤더 바로 아래에 위치)
const TabsWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  z-index: 999;
`;

// 컨텐츠 (헤더+탭이 가리지 않도록 padding 설정)
const MainContent = styled.div`
  flex: 1;
  overflow-y: auto;
`;

// 카드 컨테이너
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 15px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    padding: 24px;
  }
`;