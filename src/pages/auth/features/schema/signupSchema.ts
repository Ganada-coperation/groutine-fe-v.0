import { z } from "zod";

export interface InputValue {
  email: string;
  code: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
}

export const signUpSchema = z.object({
  email: z.string().email(),
  code: z.string().length(6),
  password: z
    .string()
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
    .max(20, '비밀번호는 최대 20자까지 가능합니다.')
    .regex(/[0-9]/, '비밀번호는 최소 1개의 숫자를 포함해야 합니다.')
    .regex(/[^A-Za-z0-9]/, '비밀번호는 최소 1개의 특수 문자를 포함해야 합니다.'),
  passwordConfirm: z.string()
    .min(8)
    .max(20)
    .regex(/[0-9]/)
    .regex(/[^A-Za-z0-9]/),
  nickname: z.string().min(2).max(12),
});
