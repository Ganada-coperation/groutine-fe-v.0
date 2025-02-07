import styled from "styled-components";
import IcLogo from "@icon/ic-logo-groutine.svg";
import EmailForm from "@auth/components/EmailForm.tsx";
import PasswordForm from "@auth/components/PasswordForm.tsx";
import { useCustomForm } from "@auth/features/utils/useCustomForm.ts";
import { InputValue, signUpSchema } from "@auth/features";
import Stepper from "@auth/components/Stepper.tsx";
import { useState } from "react";
import UserInfo from "@auth/components/UserInfo.tsx";
import { useNavigate } from "react-router";
import { Container, Logo } from "@shared/style/auth.css.ts";

export const SignUpPage = () => {
  const navigate = useNavigate();
  const { register, watch, formState: { errors } } = useCustomForm<InputValue>(signUpSchema);
  const [step, setStep] = useState(1);

  const addStep = () => {
    setStep(step + 1);
  };

  const signUp = () => {
    alert('회원가입이 완료되었습니다.');
    navigate('/home', { replace: true });
  };

  return (
    <Container>
      <TopContainer>
        <Stepper totalStep={3} step={step} />
        <Logo src={IcLogo} />
      </TopContainer>
      {step === 1 ? <EmailForm register={register} watch={watch} onClick={addStep} errors={errors} /> : null}
      {step === 2 ? <PasswordForm register={register} watch={watch} onClick={addStep} errors={errors} /> : null}
      {step === 3 ? <UserInfo register={register} watch={watch} onClick={signUp} errors={errors} /> : null}
    </Container>
  );
};

const TopContainer = styled.div`
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
