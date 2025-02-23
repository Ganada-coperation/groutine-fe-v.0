import MissionSection from "@mission/components/mission/MissionSection.tsx";
import { missionResponse } from "@shared/api/mock.ts";
import CertificatedMissionList from "@mission/components/challenge/CertificatedMissionList.tsx";
import styled from "styled-components";
import { useChallengeDateStore } from "@mission/feature/store/useChallengeDateStore.ts";
import { slideUp } from "@shared/style/auth.css.ts";

const ChallengeInfoBottom = () => {
  const { data } = useChallengeDateStore();

  // TODO: 일별 미션 및 미션 인증 리스트 가져오기
  console.log(data);

  return (
    <BottomSection>
      <AnimatedSection $delay={0}>
        <MissionSection label="필수 미션" missionResponse={missionResponse.requiredMission} />
      </AnimatedSection>
      <AnimatedSection $delay={0.1}>
        <MissionSection label="순위권 도전 미션" missionResponse={missionResponse.challengeMission} />
      </AnimatedSection>
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

const AnimatedSection = styled.div<{ $delay: number }>`
  animation: ${slideUp} 0.5s ease-in-out ${({ $delay }) => $delay}s forwards;
  opacity: 0;
`;
