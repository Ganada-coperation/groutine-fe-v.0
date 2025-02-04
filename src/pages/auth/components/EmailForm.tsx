import styled, { css, keyframes } from "styled-components";
import { validSignUp, InputValue, useValidation } from "@auth/features";
import CustomInput from "@auth/components/CustomInput.tsx";
import { UseFormWatch } from "react-hook-form";

interface ActiveProps {
  $isActive: boolean;
}

interface EmailFormProps {
  register: any;
  watch: UseFormWatch<InputValue>;
  onClick: () => void;
}

const EmailForm = ({ register, watch, onClick }: EmailFormProps) => {
  const { onSubmit, validation, changeVisibility } = useValidation();
  const { isEmailValid, isCodeValid } = validSignUp(watch);

  return (
    <>
      <EmailFormContainer>
        <Section $isVisible={true}>
          <CustomInput
            label="이메일"
            type="email"
            maxLength={50}
            placeholder="이메일을 입력해 주세요."
            register={register}
            registerKey="email"
          />
          <Notification>{validation.isCodeSent ? '인증 코드가 전송 되었어요' : ''}</Notification>
          <ConfirmButton
            $isActive={isEmailValid}
            disabled={!isEmailValid}
            onClick={onSubmit}
          >
            {validation.isCodeSent ? '인증 코드 재전송' : '인증 코드 전송'}
          </ConfirmButton>
        </Section>
        <Section style={{ visibility: validation.isCodeSent ? 'visible' : 'hidden' }} $isVisible={validation.isCodeSent}>
          <CustomInput
            label="인증코드"
            type="text"
            maxLength={6}
            placeholder="이메일로 발송된 인증코드를 입력해 주세요!"
            register={register}
            registerKey="code"
          />
          <Notification
            style={{ visibility: validation.isCodeSent && validation.visible ? 'visible' : 'hidden' }}>{validation.validCode ? '인증코드가 확인 되었어요' : '인증 코드가 일치하지 않아요'}</Notification>
          <ConfirmButton
            $isActive={isCodeValid}
            disabled={!isCodeValid}
            onClick={() => changeVisibility()}
          >
            인증 코드 확인
          </ConfirmButton>
        </Section>
      </EmailFormContainer>
      <NextButton $isActive={validation.visible} disabled={!validation.visible} onClick={onClick}>다음</NextButton>
    </>
  );
};

export default EmailForm;

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

const EmailFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Section = styled.div<{ $isVisible?: boolean }>`
  display: flex;
  flex-direction: column;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${slideUp} 0.3s ease-in-out;
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

const ConfirmButton = styled.button<ActiveProps>`
  padding: 10px 24px;
  margin-left: auto;
  background-color: ${({ theme, $isActive }) => $isActive ? theme.colors.defaultPrimary : theme.colors.darkerSecondary};
  color: ${({ theme, $isActive }) => $isActive ? theme.colors.defaultSecondary : theme.colors.mediumGray};
  font: ${({ theme }) => theme.fonts.button_medium_16px};
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
