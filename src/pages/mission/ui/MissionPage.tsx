import Banner from "@mission/components/Banner.tsx";
import TodayMission from "@mission/components/TodayMission.tsx";
import ChallengeList from "@mission/components/ChallengeList.tsx";

export const MissionPage = () => {
  // 배너 - 배너 컴포넌트
  // 오늘의 미션 - 오늘의 미션 컴포넌트 (미션 이미지, 미션 이름, 미션하기 버튼) <- 미션 컴포넌트 분리
  // 도전 중인 챌린지 - 컴포넌트, 챌린지 아이템 컴포넌트

  return (
    <>
      <Banner />
      <TodayMission />
      <ChallengeList />
    </>
  );
};

