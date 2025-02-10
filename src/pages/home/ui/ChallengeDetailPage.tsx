import React, { useState } from "react";
import styled from "styled-components";
import ImageSection from "@home/components/ImageSection";
import ContentSection from "@home/components/ContentSection";
import ParticipateButton from "@home/components/ParticipateButton";
import ChallengeHeader from "@home/components/ChallengeHeader";
import Modal from "@home/components/Modal"; // Modal 컴포넌트 경로 수정
import ChallengeParticipateModalContent from "@home/components/ChallengeParticipateModalContent"; // Modal 내용 컴포넌트 경로 수정

export const ChallengeDetailPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PageContainer>
      <ChallengeHeader title="챌린지 상세" />
      <ImageSection />
      <ContentSection />
      <ParticipateButton onClick={openModal} /> {/* ParticipateButton에 onClick 추가 */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ChallengeParticipateModalContent />
      </Modal>
    </PageContainer>
  );
};




const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fffcf8;
`;
