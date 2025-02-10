import React from "react";
import styled from "styled-components";
import CraneIcon from "@img/im-challengeparticipate-modal.svg";

const ChallengeParticipateModalContent: React.FC = () => {
  return (
    <ModalContentContainer>
      <Logo src = {CraneIcon} /> 
      <Title>챌린지 참여가 완료되었어요!</Title>
      <StartButton>챌린지 시작하기</StartButton>
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
  width: 350px; /* 이미지 참고 */
  margin: 0 auto; /* 가운데 정렬 */
`;

const Title = styled.h2`
  font-size: 18px; /* 이미지 참고 */
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center; /* 가운데 정렬 */
`;

const Logo = styled.img`
width 100px;
height: auto;
`;

const StartButton = styled.button`
  padding: 12px 24px; /* 이미지 참고 */
  font-size: 16px;
  background-color: #02343f;
  color:: #f9f6f2;
  border: none;
  border-radius: 8px; /* 이미지 참고 */
  cursor: pointer;

  &:hover {
    background-color: #021f2a;
  }
`;
