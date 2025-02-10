import styled from "styled-components";
import MissionSection from "@mission/components/MissionSection.tsx";

const TodayMission = () => {
  return (
    <TodayMissionContainer>
      <Label>오늘의 미션</Label>
      <Inner>
      <MissionSection label="필수 미션" content={["독서하고 감상문 작성하기"]} />
      <MissionSection label="순위권 도전 미션" content={['1만보 달성하기', "하루 식단 인증하기"]} />
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
