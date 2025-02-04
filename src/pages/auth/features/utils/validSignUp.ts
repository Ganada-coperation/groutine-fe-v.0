import { UseFormWatch } from "react-hook-form";
import { signUpSchema, InputValue } from "@auth/features";

export const validSignUp = (watch: UseFormWatch<InputValue>) => {
  const emailValue = watch('email', '');
  const codeValue = watch('code', '');
  const passwordValue = watch('password', '');
  const passwordConfirmValue = watch('passwordConfirm', '');

  const isEmailValid = signUpSchema.shape.email.safeParse(emailValue).success;
  const isCodeValid = signUpSchema.shape.code.safeParse(codeValue).success;
  const isPasswordValid = signUpSchema.shape.password.safeParse(passwordValue).success;
  const isPasswordConfirmValid = signUpSchema.shape.passwordConfirm.safeParse(passwordConfirmValue).success;

  return { isEmailValid, isCodeValid, isPasswordValid, isPasswordConfirmValid };
};
