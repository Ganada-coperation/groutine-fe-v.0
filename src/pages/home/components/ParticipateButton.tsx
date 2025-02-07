import React from "react";
import styled from "styled-components";

const ParticipateButton: React.FC = () => {
  return <Button>참가하기</Button>;
};

export default ParticipateButton;

const Button = styled.button`
  position: fixed; /* 화면에 고정 */
  bottom: 20px; /* 화면 하단에서 20px 간격 */
  left: 50%; /* 화면의 가운데 정렬 */
  transform: translateX(-50%); /* 가운데 정렬을 위해 transform 사용 */
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
  z-index: 1000; /* 다른 요소 위에 표시 */

  &:hover {
    background-color: #021f2a;
  }
`;

