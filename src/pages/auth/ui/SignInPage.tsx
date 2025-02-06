import styled, { keyframes } from "styled-components";
import { signInSchema, useCustomForm } from "@auth/features";
import IcLogo from "@icon/ic-logo-groutine.svg";
import CustomInput from "@auth/components/CustomInput.tsx";
import { useNavigate } from "react-router";

interface ActiveProps {
  $isActive: boolean;
}

export const SignInPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isValid } } = useCustomForm(signInSchema);

  const onSubmit = () => {
    console.log('제출');
    navigate('/home', { replace: true });
  }

  return (
    <Container>
      <Logo src={IcLogo} />
      <Section>
        <CustomInput
          label="이메일"
          type="email"
          maxLength={50}
          placeholder="이메일을 입력해 주세요."
          register={register} registerKey="email"
        />
        <Notification>{}</Notification>
        <CustomInput
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          maxLength={20}
          register={register}
          registerKey="password"
        />
        <Notification>{}</Notification>
      </Section>
      <ConfirmButton $isActive={isValid} disabled={!isValid} onClick={onSubmit}>로그인 하기</ConfirmButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Logo = styled.img`
  margin-top: 10px;
  height: 24px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(0);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  animation: ${slideUp} 0.3s ease-in-out;
`;

const ConfirmButton = styled.button<ActiveProps>`
  width: 100%;
  background-color: ${({ theme, $isActive }) => $isActive ? theme.colors.defaultPrimary : theme.colors.darkerSecondary};
  color: ${({ theme, $isActive }) => $isActive ? theme.colors.defaultSecondary : theme.colors.mediumGray};
  font: ${({ theme }) => theme.fonts.button_medium_16px};
  border-radius: 10px;
  padding: 18px 0;
`;

const Notification = styled.p`
  color: ${({ theme }) => theme.colors.lighterPrimary};
  font: ${({ theme }) => theme.fonts.detail_medium_12px};

  &::after {
    content: '\\200B'; // 유니코드 Zero-width space
    display: inline-block;
  }
`;
