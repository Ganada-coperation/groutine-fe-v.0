import { signInSchema, useCustomForm } from "@auth/features";
import IcLogo from "@icon/ic-logo-groutine.svg";
import CustomInput from "@auth/components/CustomInput.tsx";
import { useNavigate } from "react-router";
import { Container, Logo, Notification, Section } from "@shared/style/auth.css.ts";
import { CustomButton } from "@auth/components/CustomButton.tsx";

export const SignInPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isValid } } = useCustomForm(signInSchema);

  const onSubmit = () => {
    console.log('제출');
    navigate('/home', { replace: true });
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Logo src={IcLogo} />
      <Section $isVisible={true}>
        <CustomInput
          label="이메일"
          type="email"
          maxLength={50}
          placeholder="이메일을 입력해 주세요."
          register={register} registerKey="email"
        />
        <Notification $isActive={errors.email?.message === undefined}>{errors.email?.message ? errors.email?.message : ''}</Notification>
        <CustomInput
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          maxLength={20}
          register={register}
          registerKey="password"
        />
        <Notification $isActive={errors.password?.message === undefined}>{errors.password?.message ? errors.password.message : ''}</Notification>
      </Section>
      <CustomButton label="로그인 하기" $isActive={isValid} disabled={!isValid} />
    </Container>
  );
};
