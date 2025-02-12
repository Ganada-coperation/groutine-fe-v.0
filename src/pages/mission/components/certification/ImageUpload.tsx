import IcImage from "@icon/ic-image.svg";
import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

const ImageUpload = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <ImageUploadContainer>
      <ImageLabel htmlFor="profile-upload">
        {preview ? (
          <ImagePreview src={preview} alt="profile preview" />
        ) : (
          <>
            <Icon src={IcImage} alt="" />
            <p>인증 사진을 업로드 해주세요</p>
          </>
        )}
      </ImageLabel>
      <Input
        id="profile-upload"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
    </ImageUploadContainer>
  );
};

export default ImageUpload;

const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageLabel = styled.label`
  width: 100%;
  height: 28vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.lightestestPrimary};
  border: 1px solid ${({ theme }) => theme.colors.lightestPrimary};
  
  p {
    font: ${({ theme }) => theme.fonts.body_medium_16px};
    color: ${({ theme }) => theme.colors.defaultPrimary};
  }
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  align-content: center;
  object-fit: cover;
  object-position: center;
  align-items: center;
`;

const Input = styled.input`
  display: none; /* input 숨기기 */
`;

const Icon = styled.img`
  height: 26px;
`;
