import styled, { css, keyframes } from "styled-components";
import { validSignUp, InputValue } from "@auth/features";
import CustomInput from "@auth/components/CustomInput.tsx";
import { UseFormWatch } from "react-hook-form";

interface ActiveProps {
  $isActive: boolean;
}

interface PasswordFormProps {
  register: any;
  watch: UseFormWatch<InputValue>;
  onClick: () => void;
}

const PasswordForm = ({ register, watch, onClick }: PasswordFormProps) => {
  const { isPasswordValid, isPasswordConfirmValid } = validSignUp(watch);

  return (
    <>
      <PasswordFormContainer>
        <Section $isVisible={true}>
          <CustomInput
            label="비밀번호"
            type="password"
            maxLength={20}
            placeholder="비밀번호를 입력해 주세요."
            register={register}
            registerKey="password"
          />
          <Notification>{}</Notification>
        </Section>
        <Section $isVisible={isPasswordValid}>
          <CustomInput
            label="비밀번호 확인"
            type="password"
            maxLength={20}
            placeholder="비밀번호를 한번 더 입력해 주세요!"
            register={register}
            registerKey="passwordConfirm"
          />
          <Notification>{}</Notification>
          <ConfirmButton>null</ConfirmButton>
          <ConfirmButton style={{ marginBottom: '24px' }}>null</ConfirmButton>
        </Section>
      </PasswordFormContainer>
      <NextButton
        $isActive={isPasswordValid && isPasswordConfirmValid}
        disabled={!isPasswordValid && !isPasswordConfirmValid}
        onClick={onClick}
      >
        다음
      </NextButton>
    </>
  );
};

export default PasswordForm;

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

const slideDown = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const PasswordFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.div<{ $isVisible?: boolean }>`
  display: flex;
  flex-direction: column;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  ${({ $isVisible }) =>
    $isVisible
      ? css`
          animation: ${slideUp} 0.3s ease-in-out;
        `
      : css`
          animation: ${slideDown} 0.3s ease-in-out;
        `}
`;

const Notification = styled.p`
  color: ${({ theme }) => theme.colors.lighterPrimary};
  font: ${({ theme }) => theme.fonts.detail_medium_12px};

  &::after {
    content: '\\200B'; // 유니코드 Zero-width space
    display: inline-block;
  }
`;

const ConfirmButton = styled.button`
  visibility: hidden;
  padding: 10px 24px;
  margin-left: auto;
  border-radius: 10px;
`;

const NextButton = styled.button<ActiveProps>`
  width: 100%;
  background-color: ${({ theme, $isActive }) => $isActive ? theme.colors.defaultPrimary : theme.colors.darkerSecondary};
  color: ${({ theme, $isActive }) => $isActive ? theme.colors.defaultSecondary : theme.colors.mediumGray};
  font: ${({ theme }) => theme.fonts.button_medium_16px};
  border-radius: 10px;
  padding: 18px 0;
`;
