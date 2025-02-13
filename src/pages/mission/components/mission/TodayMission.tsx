import styled from "styled-components";
import MissionSection from "@mission/components/mission/MissionSection.tsx";
import { missionResponse } from "@shared/api/mock.ts";
import { slideUp } from "@shared/style/auth.css.ts";

const TodayMission = () => {
  return (
    <TodayMissionContainer>
      <Label>오늘의 미션</Label>
      <Inner>
        <AnimatedSection $delay={0}>
          <MissionSection label="필수 미션" missionResponse={missionResponse.requiredMission} />
        </AnimatedSection>
        <AnimatedSection $delay={0.1}>
          <MissionSection label="순위권 도전 미션" missionResponse={missionResponse.challengeMission} />
        </AnimatedSection>
      </Inner>
    </TodayMissionContainer>
  );
};

export default TodayMission;

const TodayMissionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.p`
  font: ${({ theme }) => theme.fonts.heading_semibold_18px};
  color: ${({ theme }) => theme.colors.g1Black};
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 15px;
`;

const AnimatedSection = styled.div<{ $delay: number }>`
  animation: ${slideUp} 0.5s ease-in-out ${({ $delay }) => $delay}s forwards;
  opacity: 0;
`;
