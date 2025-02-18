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
      <ContentContainer>
        <ImageSection />
        <ContentSection />
      </ContentContainer>
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
  justify-content: space-between; /* 내용이 위아래로 균형 있게 배치됨 */
  align-items: center;
  width: 100%;
  height: 100vh; /* 화면 높이를 100%로 고정 */
  margin: 0 auto; /* 중앙 정렬 */
  box-sizing: border-box;
  background-color: #fffcf8;
  overflow: hidden; /* 부모 크기를 넘지 않도록 제한 */
`;



 const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  max-width: 450px;
  overflow: auto;
  background-color: #fff8ea;
`;
