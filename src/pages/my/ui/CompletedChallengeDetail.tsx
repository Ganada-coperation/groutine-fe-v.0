// groutine-fe-v.0\src\pages\my\ui\OngoingChallengeDetail.tsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { ongoingChallenges } from '@shared/api/myPageMock';
import ChallengeDetailLayout from '@my/components/challengedetail/ChallengeDetailLayout';

export const CompletedChallengeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const challenge = ongoingChallenges.find(c => c.id === Number(id));

  if (!challenge) {
    return <div>챌린지를 찾을 수 없습니다.</div>;
  }

  const missionsData = [
    { id: 1, title: '독서하고 감상문 작성하기', completed: true },
    { id: 2, title: '하루 식단 인증하기', completed: false },
  ];

  return (
    <ChallengeDetailLayout 
      title={challenge.title}
      startDate={challenge.startDate}
      endDate={challenge.endDate}
      missions={missionsData}
    >
      {/* ChallengeDetailLayout의 children으로 필요한 내용이 있다면 여기에 추가 */}
    </ChallengeDetailLayout>
  );
};

export default CompletedChallengeDetail;
