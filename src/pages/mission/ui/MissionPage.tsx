import Banner from "@mission/components/mission/Banner.tsx";
import TodayMission from "@mission/components/mission/TodayMission.tsx";
import ChallengeList from "@mission/components/mission/ChallengeList.tsx";
import styled from "styled-components";

export const MissionPage = () => {

  return (
    <Container>
      <Banner />
      <Wrapper>
        <TodayMission />
        <ChallengeList />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lighterSecondary};
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-top: 20px;
  gap: 20px;
`;

