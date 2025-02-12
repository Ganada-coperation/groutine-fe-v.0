import styled from "styled-components";
import IcCertification from "@icon/ic-certification.svg";
import { CustomButton } from "@shared/ui/CustomButton.tsx";

interface PopupProps {
  onClick: () => void;
}

const Popup = ({ onClick }: PopupProps) => {

  return (
    <Overlay>
      <PopupContainer>
        <img src={IcCertification} alt="" />
        <p>인증 확인을 요청했어요!</p>
        <CustomButton label="홈으로" $isActive={true} disabled={false} onClick={onClick} padding="12px" />
      </PopupContainer>
    </Overlay>
  );
};

export default Popup;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 40px 15px 20px 15px;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  width: 85%;
  
  p {
    font: ${({ theme }) => theme.fonts.body_bold_16px};
    color: ${({ theme }) => theme.colors.defaultPrimary};
    margin-top: 16px;
    margin-bottom: 21px;
  }
`;
