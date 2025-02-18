import React from "react";
import styled from "styled-components";
import CraneIcon from "@img/im-challengeparticipate-modal.svg";
import axios from "axios";

interface Props {
  challengeId: number;
  onParticipateSuccess: (challenge: any) => void; // 콜백 타입 변경
}

const ChallengeParticipateModalContent: React.FC<Props> = ({ challengeId, onParticipateSuccess }) => {
  const handleStartChallenge = async () => {
    try {
      const response = await axios.post(`/api/v1/challenge/activities/${challengeId}`);
      // 성공 시 응답 데이터(챌린지 정보)를 콜백으로 전달
      onParticipateSuccess(response.data.result); 
    } catch (error) {
      console.error("챌린지 참여 실패:", error);
      // 오류 처리 (예: 사용자에게 알림)
    }
  };

  return (
    <ModalContentContainer>
      <Logo src={CraneIcon} />
      <Title>챌린지 참여가 완료되었어요!</Title>
      <StartButton onClick={handleStartChallenge}>챌린지 시작하기</StartButton>
    </ModalContentContainer>
  );
};


export default ChallengeParticipateModalContent;

const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff8ea;
  border-radius: 10px;
  padding: 20px;
  height: 400px;
  width: 400px; 
  margin: 0 auto; 
`;

const Title = styled.h2`
  width: 100%;
  margin: 40px;
  font-size: 18px; 
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center; 
`;

const Logo = styled.img`
width 100px;
height: auto;
`;

const StartButton = styled.button`
  
  width: 100%;
  padding: 12px 24px;
  font-size: 16px;
  background-color: #02343f;
  color:: #f9f6f2;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #021f2a;
  }
`;
