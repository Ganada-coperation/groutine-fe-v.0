import styled from "styled-components";
import IcQuestion from "@icon/ic-question.svg";
import IcArrowBottom from "@icon/ic-arrow-bottom.svg";
import IcArrowTop from "@icon/ic-arrow-top.svg";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const UploadGuide = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const changeVisible = () => {
    setVisible(!visible);
  };

  return (
    <UploadGuideContainer>
      <Notification>당일 23:00 이후부터 스크린샷 업로드가 가능합니다.</Notification>
      <CertificationGuide>
        <img src={IcQuestion} alt="" />
        <p>어떻게 인증해야 하나요?</p>
        <img src={visible ? IcArrowTop : IcArrowBottom} alt="" onClick={changeVisible} />
      </CertificationGuide>
      <AnimatePresence>
        {visible && (
          <Guide
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p><span>{'IOS 가이드\n'}</span>{'설정 > 스크린타임 > 앱 및 웹 사이트 활동 모두 보기\n > 일일 스크린타임 시간 캡처'}</p>
            <p><span>{'IOS 가이드\n'}</span>{'설정 > 디지털 웰빙 및 자녀 보호 기능 > 그래프 클릭\n > 일일 사용현황 캡처'}</p>
          </Guide>
        )}
      </AnimatePresence>
    </UploadGuideContainer>
  );
};

export default UploadGuide;

const UploadGuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Notification = styled.p`
  font: ${({ theme }) => theme.fonts.body_medium_14px};
  color: ${({ theme }) => theme.colors.defaultPrimary};
`;

const CertificationGuide = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;

  p {
    font: ${({ theme }) => theme.fonts.detail_regular_14px};
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;


const Guide = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 20px;

  span {
    text-decoration: underline;
    font: ${({ theme }) => theme.fonts.detail_regular_14px};
    color: ${({ theme }) => theme.colors.darkGray};
    line-height: 20px;
  }

  p {
    white-space: pre-wrap;
    font: ${({ theme }) => theme.fonts.detail_regular_14px};
    color: ${({ theme }) => theme.colors.darkGray};
    line-height: 20px;
  }
`;
