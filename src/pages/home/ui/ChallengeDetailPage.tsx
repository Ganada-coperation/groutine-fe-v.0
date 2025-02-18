import React, { useState } from "react";
import styled from "styled-components";
import ImageSection from "@home/components/ImageSection";
import ContentSection from "@home/components/ContentSection";
import ParticipateButton from "@home/components/ParticipateButton";
import ChallengeHeader from "@home/components/ChallengeHeader";
import Modal from "@home/components/Modal"; 
import ChallengeParticipateModalContent from "@home/components/ChallengeParticipateModalContent";

// Challenge 인터페이스 정의
interface Challenge {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  // 필요한 다른 속성들을 여기에 추가하세요
}

interface ChallangeDetailProps {
  onParticipate: (challenge: Challenge) => void;
}

export const ChallengeDetailPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [participatedChallenge, setParticipatedChallenge] = useState<Challenge | null>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleParticipateSuccess = (challenge: Challenge) => {
    closeModal();
    setParticipatedChallenge(challenge);
  };

  return (
    <PageContainer>
      <ChallengeHeader title="챌린지 상세" />
      <ContentContainer>
        <ImageSection />
        <ContentSection />
      </ContentContainer>
      <ParticipateButton onClick={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ChallengeParticipateModalContent
          challengeId={1}
          onParticipateSuccess={handleParticipateSuccess}
        />
      </Modal>
    </PageContainer>
  );
};

// 스타일 컴포넌트는 그대로 유지






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
