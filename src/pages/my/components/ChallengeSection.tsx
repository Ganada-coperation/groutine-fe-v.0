import React from 'react';
import styled from 'styled-components';
import MyChallengeCard from "./MyChallangeCard";
import { fonts } from '@app/styles/fonts';
import { colors } from '@app/styles/colors';
import { Challenge } from '@shared/types/Challenge';
import { slideUp } from "@shared/style/auth.css.ts";

interface ChallengeSectionProps {
  title: string;
  challenges: Challenge[];
  type: 'ongoing' | 'applied' | 'completed';
}

const ChallengeSection: React.FC<ChallengeSectionProps> = ({ title, challenges, type }) => {
  return (
    <Container>
      <Label>{title}</Label>
      <Inner $type={type}>
        {challenges.map((challenge) => (
          <CardWrapper key={challenge.id} $type={type}>
            <MyChallengeCard challenge={challenge} type={type} />
          </CardWrapper>
        ))}
      </Inner>
    </Container>
  );
};

export default ChallengeSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

const Label = styled.p`
  font: ${({ theme }) => theme.fonts.heading_semibold_18px};
  color: ${({ theme }) => theme.colors.g1Black};
  margin-bottom: 12px;
`;

const Inner = styled.div<{ $type: string }>`
  display: flex;
  flex-wrap: ${props => props.$type === 'completed' ? 'wrap' : 'nowrap'};
  gap: 16px;
  overflow-x: ${props => props.$type === 'completed' ? 'visible' : 'auto'};
  padding-bottom: ${props => props.$type === 'completed' ? '0' : '10px'};
  margin-top: 12px;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const CardWrapper = styled.div<{ $type: string }>`
  flex: ${props => props.$type === 'completed' ? '0 0 100%' : '0 0 auto'};
  width: ${props => props.$type === 'completed' ? '100%' : '200px'};
  box-sizing: border-box;
  animation: ${slideUp} 0.5s ease-in-out;
  margin-bottom: ${props => props.$type === 'completed' ? '16px' : '0'};
`;
