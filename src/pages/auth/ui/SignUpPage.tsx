import styled from "styled-components";
import IcLogo from "@icon/ic-logo-groutine.svg";
import EmailForm from "@auth/components/EmailForm.tsx";
import PasswordForm from "@auth/components/PasswordForm.tsx";
import { useCustomForm } from "@auth/features/utils/useCustomForm.ts";
import { InputValue, signUpSchema } from "@auth/features";

export const SignUpPage = () => {
  const { register, watch } = useCustomForm<InputValue>(signUpSchema);
  const step1 = false;
  const step2 = true;

  return (
    <Container>
      <Logo src={IcLogo} />
      {step1 ? <EmailForm register={register} watch={watch} /> : null}
      {step2 ? <PasswordForm register={register} watch={watch} /> : null}
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

const Logo = styled.img`
  margin-top: 8px;
  height: 32px;
`;
