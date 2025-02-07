import styled from "styled-components";
import { validSignUp, useValidation } from "@auth/features";
import CustomInput from "@auth/components/CustomInput.tsx";
import { ActiveProps, AuthProps } from "@shared/types";
import { Notification, Section } from "@shared/style/auth.css.ts";
import { CustomButton } from "@auth/components/CustomButton.tsx";

const EmailForm = ({ register, watch, onClick, errors }: AuthProps) => {
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
          <Notification
            $isActive={errors.email?.message === undefined}>{errors.email?.message ? errors.email.message : validation.isCodeSent ? '인증 코드가 전송 되었어요' : ''}</Notification>
          <ConfirmButton
            $isActive={isEmailValid}
            disabled={!isEmailValid}
            onClick={onSubmit}
          >
            {validation.isCodeSent ? '인증 코드 재전송' : '인증 코드 전송'}
          </ConfirmButton>
        </Section>
        <Section style={{ visibility: validation.isCodeSent ? 'visible' : 'hidden' }}
                 $isVisible={validation.isCodeSent}>
          <CustomInput
            label="인증코드"
            type="text"
            maxLength={6}
            placeholder="이메일로 발송된 인증코드를 입력해 주세요!"
            register={register}
            registerKey="code"
          />
          <Notification
            style={{ visibility: validation.isCodeSent && validation.visible ? 'visible' : 'hidden' }}
            $isActive={isCodeValid}
          >
            {errors?.code?.message ? errors.code.message : validation.validCode ? '인증코드가 확인 되었어요' : '인증 코드가 일치하지 않아요'}
          </Notification>
          <ConfirmButton
            $isActive={isCodeValid}
            disabled={!isCodeValid}
            onClick={() => changeVisibility()}
          >
            인증 코드 확인
          </ConfirmButton>
        </Section>
      </EmailFormContainer>
      <CustomButton label="다음" $isActive={validation.visible} onClick={onClick} disabled={!validation.visible} />
    </>
  );
};

export default EmailForm;

const EmailFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ConfirmButton = styled.button<ActiveProps>`
  padding: 10px 24px;
  margin-left: auto;
  background-color: ${({ theme, $isActive }) => $isActive ? theme.colors.defaultPrimary : theme.colors.darkerSecondary};
  color: ${({ theme, $isActive }) => $isActive ? theme.colors.defaultSecondary : theme.colors.mediumGray};
  font: ${({ theme }) => theme.fonts.button_medium_16px};
  border-radius: 10px;
`;
