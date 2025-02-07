import { z } from "zod";

export interface InputValue {
  email: string;
  code: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
  date: string;
}

export const signUpSchema = z.object({
  email: z
    .string()
    .email('올바르지 않은 이메일 형식입니다.')
    .max(50, '이메일은 최대 50자까지 가능합니다.'),
  code: z
    .string()
    .length(6, '인증코드는 6자리여야 합니다.'),
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
  nickname: z
    .string()
    .min(2, '닉네임은 2 글자 이상이어야 합니다.')
    .max(12, '닉네임은 12글자 이하로 입력해주세요.')
    .regex(/^\S*$/, '닉네임에 공백을 포함할 수 없습니다.')
    .regex(/^[a-zA-Z0-9가-힣]*$/, '닉네임은 한글, 영문, 숫자만 입력 가능합니다.'),
  date: z.string().date('올바르지 않은 날짜 형식입니다.'),

});
