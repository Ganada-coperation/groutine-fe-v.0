import MissionSection from "@mission/components/mission/MissionSection.tsx";
import { missionResponse } from "@shared/api/mock.ts";
import CertificatedMissionList from "@mission/components/challenge/CertificatedMissionList.tsx";
import styled from "styled-components";
import { useChallengeDateStore } from "@mission/feature/useChallengeDateStore.ts";

const ChallengeInfoBottom = () => {
  const { data } = useChallengeDateStore();

  // TODO: 일별 미션 및 미션 인증 리스트 가져오기
  console.log(data);

  return (
    <BottomSection>
      <MissionSection label="필수 미션" missionResponse={missionResponse.requiredMission} />
      <MissionSection label="순위권 도전 미션" missionResponse={missionResponse.challengeMission} />
      <CertificatedMissionList />
    </BottomSection>
  );
};

export default ChallengeInfoBottom;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 13px 20px 20px;
  gap: 20px;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.1);
`;
