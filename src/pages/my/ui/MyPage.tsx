import React from 'react';
import styled from 'styled-components'; // You might need to install this: npm install styled-components
import ProfileHeader from '@my/components/ProfileHeader';
import FinanceAndRewards from '@my/components/FinanceAndRewards';
import ChallengeSection from '@my/components/ChallengeSection';



export const MyPage = () => {
  // Mock Data - Replace with your actual data fetching
  const ongoingChallenges = [
    { id: 1, title: '불타오르는 유산소🔥', startDate: '2024.06.01', endDate: '2024.08.02', daysLeft: 5 },
    { id: 2, title: '불타오르는 유산소🔥', startDate: '2024.06.01', endDate: '2024.08.02', daysLeft: 5 },
    { id: 3, title: '불타오르는 유산소🔥', startDate: '2024.06.01', endDate: '2024.08.02', daysLeft: 5 },
  ];

  const appliedChallenges = [
    { id: 4, title: '불타오르는 유산소🔥', startDate: '2024.06.01', endDate: '2024.08.02', daysLeft: 5 },
    { id: 5, title: '불타오르는 유산소🔥', startDate: '2024.06.01', endDate: '2024.08.02', daysLeft: 5 },
  ];

  const completedChallenges = [
    { id: 6, title: '불타오르는 유산소🔥', startDate: '2024.06.01', endDate: '2024.08.02', participants: 99, completionRate: 100 },
    { id: 7, title: '디지털 디톡스 가보자!', startDate: '2024.06.01', endDate: '2024.08.02', participants: 99, completionRate: 100 },
    { id: 8, title: '디지털 디톡스 가보자!', startDate: '2024.06.01', endDate: '2024.08.02', participants: 99, completionRate: 100 },
    { id: 9, title: '불타오르는 유산소🔥', startDate: '2024.06.01', endDate: '2024.08.02', participants: 99, completionRate: 100 },
  ];

  return (
    <MyPageContainer>
      <ProfileHeader username="말랑콩떡" />
      <FinanceAndRewards />
      <ChallengeSection title="도전 중인 챌린지" challenges={ongoingChallenges} type="ongoing" />
      <ChallengeSection title="신청한 챌린지" challenges={appliedChallenges} type="applied" />
      <ChallengeSection title="완료된 챌린지" challenges={completedChallenges} type="completed" />
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div`
  padding: 20px;
  font-family: sans-serif;
  background-color: #fffCf8;
`;