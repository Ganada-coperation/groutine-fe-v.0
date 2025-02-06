import React from "react";
import { useNavigate } from "react-router-dom"; // React Router의 useNavigate 추가
import Header from "../../../app/components/Header";
import Tabs from "../../../app/components/Tabs";
import ChallengeCard from "../../../app/components/ChallengeCard";
import BottomNavigation from "../../../app/components/BottomNavigation";
import detoxImage from "/images/detox.jpg";
import runningImage from "/images/running.jpg";

export const HomePage: React.FC = () => {
  const navigate = useNavigate(); // useNavigate 훅 호출

  const handleCardClick = (id: string) => {
    navigate(`/challenge/${id}`); // 특정 ID로 상세 페이지로 이동
  };

  return (
    <div className="homepage">
      {/* Header */}
      <Header />

      {/* Tabs */}
      <Tabs />

      {/* Cards (Scrollable) */}
      <div className="cards-container">
        <div onClick={() => handleCardClick("1")}>
          <ChallengeCard
            id="1"
            image={detoxImage}
            title="디지털 디톡스 가보자!"
            date="2024.06.01 - 2024.08.02"
            participants={99}
          />
        </div>
        <div onClick={() => handleCardClick("2")}>
          <ChallengeCard
            id="2"
            image={runningImage}
            title="불타오르는 유산소🔥"
            date="2024.06.01 - 2024.08.02"
            participants={88}
          />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};
