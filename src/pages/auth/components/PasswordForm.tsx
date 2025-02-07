import styled from "styled-components";
import { validSignUp } from "@auth/features";
import CustomInput from "@auth/components/CustomInput.tsx";
import { AuthProps } from "@shared/types";
import { Notification, Section } from "@shared/style/auth.css.ts";
import { CustomButton } from "@auth/components/CustomButton.tsx";

const PasswordForm = ({ register, watch, onClick, errors }: AuthProps) => {
  const { isPasswordValid, isPasswordConfirmValid, equalPassword } = validSignUp(watch);

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
          <Notification $isActive={false}>{errors.password?.message ? errors.password.message : ''}</Notification>
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
          <Notification $isActive={false}>{equalPassword ? '' : '비밀번호가 일치하지 않습니다'}</Notification>
          <ConfirmButton>null</ConfirmButton>
          <ConfirmButton style={{ marginBottom: '24px' }}>null</ConfirmButton>
        </Section>
      </PasswordFormContainer>
      <CustomButton
        label="다음"
        $isActive={isPasswordValid && isPasswordConfirmValid}
        disabled={!isPasswordValid && !isPasswordConfirmValid}
        onClick={onClick}
      />
    </>
  );
};

export default PasswordForm;

const PasswordFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ConfirmButton = styled.button`
  visibility: hidden;
  padding: 10px 24px;
  margin-left: auto;
  border-radius: 10px;
`;
