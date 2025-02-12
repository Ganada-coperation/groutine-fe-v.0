import styled from "styled-components";
import MissionSection from "@mission/components/mission/MissionSection.tsx";
import { missionResponse } from "@shared/api/mock.ts";

const TodayMission = () => {
  return (
    <TodayMissionContainer>
      <Label>오늘의 미션</Label>
      <Inner>
        <MissionSection label="필수 미션" missionResponse={missionResponse.requiredMission} />
        <MissionSection label="순위권 도전 미션" missionResponse={missionResponse.challengeMission} />
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
