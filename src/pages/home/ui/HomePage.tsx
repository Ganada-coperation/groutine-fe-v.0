import React from "react";
import Header from "../../../app/components/Header";
import Tabs from "../../../app/components/Tabs";
import ChallengeCard from "../../../app/components/ChallengeCard";
import BottomNavigation from "../../../app/components/BottomNavigation";
import detoxImage from "/images/detox.jpg";
import runningImage from "/images/running.jpg";

export const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      {/* Header */}
      <Header />

      {/* Tabs */}
      <Tabs />

      {/* Cards */}
      <div className="cards-container">
        <ChallengeCard
          image={detoxImage}
          title="디지털 디톡스 가보자!"
          date="2024.06.01 - 2024.08.02"
          participants={99}
        />
        <ChallengeCard
          image={runningImage}
          title="불타오르는 유산소🔥"
          date="2024.06.01 - 2024.08.02"
          participants={88}
        />
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};
