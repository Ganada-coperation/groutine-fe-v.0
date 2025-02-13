import styled from "styled-components";
import IcCertification from "@icon/ic-certification.svg";
import { CustomButton } from "@shared/ui/CustomButton.tsx";
import { AnimatePresence, motion } from "framer-motion";

interface PopupProps {
  onClick: () => void;
}

const Popup = ({ onClick }: PopupProps) => {

  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <PopupContainer
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <MotionImage
            src={IcCertification}
            alt=""
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          />
          <MotionText
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 5 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >인증 확인을 요청했어요!</MotionText>
          <CustomButton label="홈으로" $isActive={true} disabled={false} onClick={onClick} padding="12px" />
        </PopupContainer>
      </Overlay>
    </AnimatePresence>
  );
};

export default Popup;

const Overlay = styled(motion.div)`
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

const PopupContainer = styled(motion.div)`
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

const MotionImage = styled(motion.img)`
`;

const MotionText = styled(motion.p)`
  font: ${({ theme }) => theme.fonts.body_bold_16px};
  color: ${({ theme }) => theme.colors.defaultPrimary};
  margin-top: 16px;
  margin-bottom: 21px;
`;
