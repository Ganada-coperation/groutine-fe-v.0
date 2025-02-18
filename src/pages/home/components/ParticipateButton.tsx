import React from "react";
import styled from "styled-components";

interface ParticipateButtonProps {
  onClick: () => void;
}

const ParticipateButton: React.FC<ParticipateButtonProps> = ({ onClick }) => {
  return (
    <ButtonWrapper>
      <Button onClick={onClick}>참가하기</Button>
    </ButtonWrapper>
  );
};

export default ParticipateButton;

// ✅ 스타일 정의
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center; /* 버튼을 가로로 가운데 정렬 */
  align-items: center; /* 버튼을 세로로 가운데 정렬 */
  position: absolute; /* 부모 요소 기준으로 위치 */
  bottom: 20px; /* 부모 요소 하단에서 20px 간격 */
  width: 100%; /* 부모 요소의 전체 너비 */
`;

const Button = styled.button`
  width: calc(100% - 40px); /* 양쪽 여백을 고려한 너비 설정 */
  max-width: 400px; /* 버튼의 최대 너비 */
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #02343f;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* 배경색 전환 효과 */

  &:hover {
    background-color: #021f2a;
  }
`;