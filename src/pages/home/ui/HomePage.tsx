import React from "react";
import { useNavigate } from "react-router-dom"; // React Router의 useNavigate 추가
import Header from "@home/components/Header.tsx";
import Tabs from "@home/components/Tabs.tsx";
import ChallengeCard from "@home/components/ChallengeCard.tsx";
import BottomNavigation from "@home/components/BottomNavigation.tsx";
import styled from "styled-components";
import detoxImage from "/images/detox.jpg";
import runningImage from "/images/running.jpg";

export const HomePage: React.FC = () => {
  const navigate = useNavigate(); // useNavigate 훅 호출

  const handleCardClick = (id: string) => {
    navigate(`/challenge/${id}`); // 특정 ID로 상세 페이지로 이동
  };

  return (
    <HomePageContainer>
      {/* Header */}
      <MainContent>
      <Header />

      {/* Tabs */}
      <Tabs />

      {/* Cards */}
      <CardsContainer>
        <ChallengeCard
          id="1"
          image={detoxImage}
          title="디지털 디톡스 가보자!"
          date="2024.06.01 - 2024.08.02"
          participants={99}
        />
        <ChallengeCard
          id="2"
          image={runningImage}
          title="불타오르는 유산소🔥"
          date="2024.06.01 - 2024.08.02"
          participants={88}
        />
      </CardsContainer>
</MainContent>
      {/* Bottom Navigation */}
      <BottomNavigation />
    </HomePageContainer>
  );
};

/* ✅ 부모 컨테이너 */
const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 전체 화면 높이를 기준으로 */
`;

/* ✅ 메인 콘텐츠 영역 */
const MainContent = styled.div`
  flex: 1; /* 남은 공간을 차지 */
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* 스크롤 가능 */
`;

/* ✅ 카드 컨테이너 */
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 가로로 두 개씩 배치 */
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;