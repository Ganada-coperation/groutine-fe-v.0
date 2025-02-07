import IcUser from '@icon/ic-user.svg';
import CustomInput from "@auth/components/CustomInput.tsx";
import { validSignUp } from "@auth/features";
import styled from "styled-components";
import { useState } from "react";
import { AuthProps } from "@shared/types";
import * as React from "react";
import { Label, Notification } from "@shared/style/auth.css.ts";
import { CustomButton } from "@auth/components/CustomButton.tsx";

const UserInfo = ({ register, watch, onClick, errors }: AuthProps) => {
  const { isNicknameValid, formatDate, dateValue } = validSignUp(watch);
  const [isMale, setIsMale] = useState(true);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setPreview(URL.createObjectURL(file)); // 선택된 파일의 URL 생성
    }
  };

  return (
    <Container>
      <Inner>
        <ImageLabel htmlFor="profile-upload">
          {preview ? (
            <ImagePreview src={preview} alt="profile preview" />
          ) : (
            <Logo src={IcUser} alt="photo" />
          )}
        </ImageLabel>
        <Input
          id="profile-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <CustomInput
          label="닉네임"
          type="text"
          maxLength={12}
          placeholder="닉네임 (최대 12자)"
          register={register}
          registerKey="nickname"
        />
        <Notification $isActive={false}>{errors.nickname?.message ? errors.nickname.message : ''}</Notification>
        <Label>생년월일 (8자리)</Label>
        <DateInput
          type="date"
          value={dateValue}
          onChange={formatDate}
          {...register('date')}
        />
        <Notification $isActive={false}>{}</Notification>
        <Label>성별</Label>
        <GenderContainer>
          <CustomButton label="남성" $isActive={isMale} onClick={() => setIsMale(true)} />
          <CustomButton label="여성" $isActive={!isMale} onClick={() => setIsMale(false)}/>
        </GenderContainer>
      </Inner>
      <CustomButton $isActive={isNicknameValid} disabled={!isNicknameValid} onClick={onClick} label="완료" />
    </Container>
  );
};

export default UserInfo;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  gap: 12px;
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
`;

const Input = styled.input`
  display: none; /* input 숨기기 */
`;

const ImageLabel = styled.label`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  display: flex;
  margin: 0 auto 42px;
`;

const ImagePreview = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  align-content: center;
  object-fit: cover;
  align-items: center;
`;

const DateInput = styled.input`
  width: 100%;
  border-radius: 10px;
  padding: 12px 4px;
  color: ${({ theme }) => theme.colors.darkestPrimary};
  background-color: ${({ theme }) => theme.colors.darkerSecondary};
  font: ${({ theme }) => theme.fonts.body_medium_16px};
  border: none;
  outline: none;
  text-align: center;
  margin-top: 8px;
`;

const GenderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 7px;
`;
