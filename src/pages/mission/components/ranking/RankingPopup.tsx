import styled, { keyframes } from "styled-components";
import RankingItem from "@mission/components/ranking/RankingItem.tsx";
import { motion } from "framer-motion";

interface RankingPopupProps {
  closePopup: () => void;
}

const popupVariantsFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};


const RankingPopup = ({ closePopup }: RankingPopupProps) => {
  return (
    <Overlay onClick={closePopup}>
      <RankingPopupContainer
        variants={popupVariantsFade}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Divider />
        <Inner>
          <Section>
            <SectionTitle
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >미션 랭킹</SectionTitle>
            <SectionInner
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              style={{ padding: '12px 28px', gap: '9px' }}>
              <RankingItem rankingNumber={1} nickname="말랑콩떡" />
              <RankingItem rankingNumber={2} nickname="나나" />
              <RankingItem rankingNumber={3} nickname="클로이" />
            </SectionInner>
          </Section>
          <Section>
            <SectionTitle
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >내 결과</SectionTitle>
            <SectionInner
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              style={{ padding: '12px 16px' }}>
              <MissionTitle
                as={motion.p}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                [미션] 디지털 디톡스 가보자!
              </MissionTitle>
              <Ranking
                as={motion.p}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                현재 순위<span>{`\nN위`}</span>
              </Ranking>
              <Rate
                as={motion.p}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                달성률 100%
              </Rate>
            </SectionInner>
          </Section>
        </Inner>
        <Description
          as={motion.p}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        ><span>38</span>명 중 <span>10</span>명이 달성도 90% 이상을 기록했어요!
        </Description>
      </RankingPopupContainer>
    </Overlay>
  );
};

export default RankingPopup;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const RankingPopupContainer = styled(motion.div)`
  width: 100%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.defaultSecondary};
  border-radius: 40px 40px 0 0;
  padding: 11px 20px 25px;
  box-shadow: 0 -8px 16px rgba(0, 0, 0, 0.3);
    /*animation: ${slideUp} 0.4s ease-out;*/
`;

const Divider = styled.div`
  height: 4px;
  margin: 0 38%;
  background-color: #dfdfdf;
  border-radius: 50px;
`;
const Inner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 41px;
  margin-bottom: 17px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 45%;
`;

const SectionTitle = styled(motion.div)`
  font: ${({ theme }) => theme.fonts.heading_semibold_18px};
  color: ${({ theme }) => theme.colors.defaultPrimary};
`;

const SectionInner = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.7px solid ${({ theme }) => theme.colors.lightestestPrimary};
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.lightestSecondary};
  height: 100%;
`;

const MissionTitle = styled.p`
  font: ${({ theme }) => theme.fonts.detail_regular_10px};
  color: ${({ theme }) => theme.colors.mediumGray};
`;

const Ranking = styled.p`
  font: ${({ theme }) => theme.fonts.heading_semibold_18px};
  color: ${({ theme }) => theme.colors.defaultPrimary};
  white-space: pre-wrap;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 2px;

  span {
    color: ${({ theme }) => theme.colors.lighterPrimary};
  }
`;

const Rate = styled.p`
  font: ${({ theme }) => theme.fonts.detail_medium_10px};
  color: ${({ theme }) => theme.colors.defaultPrimary};
`;

const Description = styled.p`
  font: ${({ theme }) => theme.fonts.detail_medium_10px};
  text-align: center;

  span {
    font: ${({ theme }) => theme.fonts.detail_semibold_12px};
    color: ${({ theme }) => theme.colors.lightestPrimary};
  }
;
`;
