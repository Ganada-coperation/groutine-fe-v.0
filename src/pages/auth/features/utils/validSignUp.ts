import { UseFormWatch } from "react-hook-form";
import { signUpSchema, InputValue } from "@auth/features";

export const validSignUp = (watch: UseFormWatch<InputValue>) => {
  const emailValue = watch('email', '');
  const codeValue = watch('code', '');
  const passwordValue = watch('password', '');
  const passwordConfirmValue = watch('passwordConfirm', '');
  const nicknameValue = watch('nickname', '');
  const dateValue = watch('date', '');

  const isEmailValid = signUpSchema.shape.email.safeParse(emailValue).success;
  const isCodeValid = signUpSchema.shape.code.safeParse(codeValue).success;
  const isPasswordValid = signUpSchema.shape.password.safeParse(passwordValue).success;
  const isPasswordConfirmValid = signUpSchema.shape.passwordConfirm.safeParse(passwordConfirmValue).success;
  const isNicknameValid = signUpSchema.shape.nickname.safeParse(nicknameValue).success;

  const equalPassword: boolean = passwordValue === passwordConfirmValue;

  const formatDate = () => {
    if (!dateValue) return '';
    const date = new Date(dateValue);
    const year = `${date.getFullYear()}년`;
    const month = `${date.getMonth() + 1}월`;
    const day = `${date.getDate()}일`;
    return `${year} ${month} ${day}`;
  }

  return { isEmailValid, isCodeValid, isPasswordValid, isPasswordConfirmValid, isNicknameValid, equalPassword, formatDate, dateValue };
};
