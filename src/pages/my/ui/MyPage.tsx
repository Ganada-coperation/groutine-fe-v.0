import React from 'react';
import styled from 'styled-components';
import ProfileHeader from '@my/components/ProfileHeader';
import FinanceAndRewards from '@my/components/FinanceAndRewards';
import ChallengeSection from '@my/components/ChallengeSection';
import { colors } from '@app/styles/colors';
import { getUserChallenges } from '@shared/api/myPageMock';

export const MyPage: React.FC = () => {
  const { ongoingChallenges, appliedChallenges, completedChallenges } = getUserChallenges();

  return (
    <MyPageContainer>
      <ProfileHeader username="말랑콩떡" />
      <FinanceAndRewards />
      <SectionWrapper>
        <ChallengeSection title="도전 중인 챌린지" challenges={ongoingChallenges} type="ongoing" />
        <ChallengeSection title="신청한 챌린지" challenges={appliedChallenges} type="applied" />
        <ChallengeSection title="완료된 챌린지" challenges={completedChallenges} type="completed" />
      </SectionWrapper>
    </MyPageContainer>
  );
};

export default MyPage;

const MyPageContainer = styled.div`
  padding: 20px;
  font-family: sans-serif;
  background-color: ${colors.lightestSecondary};
`;

const SectionWrapper = styled.div`
  margin-top: 20px;
`;
