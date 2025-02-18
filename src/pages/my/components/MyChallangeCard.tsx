import React from 'react';
import styled from 'styled-components';


interface ChallengeCardProps {
  challenge: any; // Replace 'any' with a more specific type
  type: 'ongoing' | 'applied' | 'completed';
}

const MyChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, type }) => {
  return (
    <MyCardContainer>
      <MyChallengeImage />
      <ChallengeTitle>{challenge.title}</ChallengeTitle>
      <ChallengeDates>{challenge.startDate} - {challenge.endDate}</ChallengeDates>
      {type === 'ongoing' && <CompletionInfo>달성까지 {challenge.daysLeft}일 남았어요</CompletionInfo>}
      {type === 'completed' && <CompletionInfo>참여자: {challenge.participants}, 달성률: {challenge.completionRate}%</CompletionInfo>}
      {type === 'applied' && <CompletionInfo>5일 뒤 진행해요</CompletionInfo>}
    </MyCardContainer>
  );
};

export default MyChallengeCard;



const MyCardContainer = styled.div`
  width: 200px;
  border: 1px solid #eee;
  border-radius: 10px;
  margin-right: 10px;
  padding: 10px;
  text-align: left;
  flex-shrink: 0; /* Prevent cards from shrinking */
`;

const MyChallengeImage = styled.div`
  width: 100%;
  height: 120px;
  background-color: #f0f0f0; /* Placeholder */
  border-radius: 8px;
  margin-bottom: 8px;
`;

const ChallengeTitle = styled.h3`
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ChallengeDates = styled.p`
  font-size: 0.8em;
  color: #777;
  margin-bottom: 5px;
`;

const CompletionInfo = styled.p`
  font-size: 0.9em;
  color: #555;
`;