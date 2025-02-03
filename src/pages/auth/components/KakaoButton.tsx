import styled from "styled-components";
import IcKakao from "@icon/ic-kakao.svg";

const KakaoButton = () => {
  return (
    <KakaoButtonContainer>
      <img src={IcKakao}/>
      <p>카카오로 시작하기</p>
    </KakaoButtonContainer>
  )
}

export default KakaoButton;

const KakaoButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #ffe812;
  padding: 12px 0;
  border-radius: 10px;
  gap: 14px;
  
  p {
    font: ${({ theme }) => theme.fonts.button_medium_16px};
    color: black;
  }
`;
