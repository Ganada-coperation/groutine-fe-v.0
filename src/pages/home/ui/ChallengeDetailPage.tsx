import React from "react";
import styled from "styled-components";
import ImageSection from "@home/components/ImageSection";
import ContentSection from "@home/components/ContentSection";
import ParticipateButton from "@home/components/ParticipateButton";
import ChallengeHeader from "@home/components/ChallengeHeader";

export const ChallengeDetailPage: React.FC = () => {
  return (
    <PageContainer>
      <ChallengeHeader title="챌린지 상세" />
      <ImageSection />
      <ContentSection />
      <ParticipateButton />
    </PageContainer>
  );
};




const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fffcf8;
`;
