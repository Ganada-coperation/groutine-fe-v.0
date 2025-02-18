import React from 'react';
import styled from 'styled-components';
import MyChallengeCard from "@my/components/MyChallangeCard";

const SectionContainer = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.1em;
  margin-bottom: 10px;
`;

const ChallengeList = styled.div`
  display: flex;
  overflow-x: auto; /* Horizontal scrolling for challenges */
  padding-bottom: 10px;
`;

interface ChallengeSectionProps {
  title: string;
  challenges: any[]; // Replace 'any' with a more specific type
  type: 'ongoing' | 'applied' | 'completed';
}

const ChallengeSection: React.FC<ChallengeSectionProps> = ({ title, challenges, type }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <ChallengeList>
        {challenges.map((challenge) => (
          <MyChallengeCard key={challenge.id} challenge={challenge} type={type} />
        ))}
      </ChallengeList>
    </SectionContainer>
  );
};

export default ChallengeSection;
