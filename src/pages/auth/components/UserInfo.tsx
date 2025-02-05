import IcUser from '@icon/ic-user.svg';
import CustomInput from "@auth/components/CustomInput.tsx";
import { UseFormWatch } from "react-hook-form";
import { InputValue, validSignUp } from "@auth/features";
import styled from "styled-components";
import { useState } from "react";

interface ActiveProps {
  $isActive: boolean;
}

interface UserInfoProps {
  register: any;
  watch: UseFormWatch<InputValue>;
  onClick: () => void;
}

const UserInfo = ({ register, watch, onClick }: UserInfoProps) => {
  const { isNicknameValid } = validSignUp(watch);
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
        <Notification>{}</Notification>
        <Label>생년월일 (8자리)</Label>
        <DateInput type="date" />
        <Notification>{}</Notification>
        <Label>성별</Label>
        <GenderContainer>
          <GenderButton $isActive={isMale} onClick={() => setIsMale(true)}>남성</GenderButton>
          <GenderButton $isActive={!isMale} onClick={() => setIsMale(false)}>여성</GenderButton>
        </GenderContainer>
      </Inner>
      <NextButton $isActive={isNicknameValid} disabled={!isNicknameValid} onClick={onClick}>완료</NextButton>
    </Container>
  );
};

export default UserInfo;

const Input = styled.input`
  display: none; /* input 숨기기 */
`;

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

const Label = styled.p`
  font: ${({ theme }) => theme.fonts.body_bold_16px};
  color: ${({ theme }) => theme.colors.darkestPrimary};
  text-align: left;
`;

const Notification = styled.p`
  color: ${({ theme }) => theme.colors.lighterPrimary};
  font: ${({ theme }) => theme.fonts.detail_medium_12px};

  &::after {
    content: '\\200B'; // 유니코드 Zero-width space
    display: inline-block;
  }
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

const GenderButton = styled.button<ActiveProps>`
  width: 100%;
  background-color: ${({ theme, $isActive }) => $isActive ? theme.colors.defaultPrimary : theme.colors.darkerSecondary};
  color: ${({ theme, $isActive }) => $isActive ? theme.colors.defaultSecondary : theme.colors.mediumGray};
  font: ${({ theme }) => theme.fonts.button_medium_16px};
  border-radius: 10px;
  padding: 18px 0;
`;

const NextButton = styled.button<ActiveProps>`
  width: 100%;
  background-color: ${({ theme, $isActive }) => $isActive ? theme.colors.defaultPrimary : theme.colors.darkerSecondary};
  color: ${({ theme, $isActive }) => $isActive ? theme.colors.defaultSecondary : theme.colors.mediumGray};
  font: ${({ theme }) => theme.fonts.button_medium_16px};
  border-radius: 10px;
  padding: 18px 0;
`;
