import { InputValue } from "@auth/features";
import { z } from "zod";

export interface InputSignInValue extends Pick<InputValue, 'email' | 'password'> {
}

export const signInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
    .max(20, '비밀번호는 최대 20자까지 가능합니다.')
    .regex(/[0-9]/, '비밀번호는 최소 1개의 숫자를 포함해야 합니다.')
    .regex(/[^A-Za-z0-9]/, '비밀번호는 최소 1개의 특수 문자를 포함해야 합니다.'),
});