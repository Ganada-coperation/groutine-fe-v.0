import styled from "styled-components";
import IcLogo from "@icon/ic-logo-groutine.svg";
import KakaoButton from "@auth/components/KakaoButton.tsx";
import { useNavigate } from "react-router";

export const AuthPage = () => {
  const navigate = useNavigate();

  const handleNavigate = (type: 'sign-in' | 'sign-up') => {
    navigate(`/${type}`);
  };

  return (
    <Container>
      <CatchPhrase>암튼 문장</CatchPhrase>
      <Logo src={IcLogo} />
      <AuthCaseContainer>
        <KakaoButton />
        <Content>
          <p onClick={() => handleNavigate("sign-in")}>이메일로 로그인</p>
          <div>|</div>
          <p onClick={() => handleNavigate("sign-up")}>이메일로 회원가입</p>
        </Content>
      </AuthCaseContainer>
      <MediumText>계속 진행함에 따라 <span>이용약관</span>과 개인정보 <span>처리방침</span>에 동의합니다.</MediumText>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 20px;
`;

const CatchPhrase = styled.p`
  font: ${({ theme }) => theme.fonts.heading_bold_24px};
  color: ${({ theme }) => theme.colors.defaultPrimary};
`;

const Logo = styled.img`
  margin-top: 17px;
  margin-bottom: 25vh;
`;

const AuthCaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 24px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 14vh;

  p {
    font: ${({ theme }) => theme.fonts.detail_medium_12px};
  }

  div {
    font: ${({ theme }) => theme.fonts.detail_medium_12px};
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

const MediumText = styled.div`
  font: ${({ theme }) => theme.fonts.detail_medium_12px};
  color: ${({ theme }) => theme.colors.darkGray};

  span {
    font: ${({ theme }) => theme.fonts.detail_medium_12px};
    color: #0084ff;
    cursor: pointer;
    text-decoration: underline;
  }
`;
