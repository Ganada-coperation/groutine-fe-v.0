import styled from "styled-components";
import Challenge from "@mission/components/mission/Challenge.tsx";
import { challengeList } from "@shared/api/mock.ts";
import { slideUp } from "@shared/style/auth.css.ts";

const ChallengeList = () => {
  return (
    <Container>
      <Label>도전중인 챌린지</Label>
      <Inner>
        {challengeList.map((challenge) => <Challenge key={challenge.id} {...challenge} />)}
      </Inner>
    </Container>
  );
};

export default ChallengeList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.p`
  font: ${({ theme }) => theme.fonts.heading_semibold_18px};
  color: ${({ theme }) => theme.colors.g1Black};
`;

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  margin-top: 12px;

  & > * {
    flex: 0 0 calc(50% - 8px);
    box-sizing: border-box;
    animation: ${slideUp} 0.5s ease-in-out;
  }
`;
