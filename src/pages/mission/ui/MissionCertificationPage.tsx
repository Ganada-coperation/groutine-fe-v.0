import UploadGuide from "@mission/components/certification/UploadGuide.tsx";
import { CustomButton } from "@shared/ui/CustomButton.tsx";
import ImageUpload from "@mission/components/certification/ImageUpload.tsx";
import MissionInput from "@mission/components/certification/MissionInput.tsx";
import styled from "styled-components";
import AppBar from "@shared/ui/AppBar.tsx";
import { HeaderAction } from "@shared/types";
import IcArrowLeft from "@icon/ic-arrow-left.svg";
import { useNavigate } from "react-router";
import { useMissionCertification } from "@mission/feature/hooks/useMissionCertification.ts";
import Popup from "@mission/components/certification/Popup.tsx";
import { useManagePopup } from "@mission/feature/hooks/useManagePopup.ts";

export const MissionCertificationPage = () => {
  const { valid, preview, description, handleFileChange, handleDescriptionChange } = useMissionCertification();
  const { isOpen, openPopup, closePopup } = useManagePopup();
  const navigate = useNavigate();
  const leftHeaderAction: HeaderAction = {
    icon: IcArrowLeft,
    onClick: () => navigate('/mission', { replace: true }),
  };

  const onClick = () => {
    closePopup();
    navigate('/mission', { replace: true });
  }

  return (
    <Container>
      <AppBar title="미션 인증" leftHeaderAction={leftHeaderAction} />
      <Section>
        <ImageUpload preview={preview} handleFileChange={handleFileChange} />
        <UploadGuide />
        <MissionInput description={description} handleDescriptionChange={handleDescriptionChange} />
      </Section>
      <ButtonContainer>
        <CustomButton
          label="인증완료"
          $isActive={valid}
          disabled={!valid}
          onClick={() => openPopup()}
        />
      </ButtonContainer>
      {isOpen && <Popup onClick={onClick} />}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lighterSecondary};
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 30px;
  gap: 15px;
  overflow-y: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 13px 20px;
  margin-top: auto;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.defaultSecondary};
`;

