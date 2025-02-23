import styled from "styled-components";
import DateList from "@mission/components/challenge/DateList.tsx";
import { motion } from "framer-motion";

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const dateVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const todayVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } },
};

const ChallengeInfo = () => {
  return (
    <TopSection>
      <TitleText variants={titleVariants} initial="hidden" animate="visible">불타오르는 유산소</TitleText>
      <DateText variants={dateVariants} initial="hidden" animate="visible">2024.06.01 - 2024.08.02</DateText>
      <TodayText variants={todayVariants} initial="hidden" animate="visible">6월 23일 (토요일)</TodayText>
      <DateList />
    </TopSection>
  );
};

export default ChallengeInfo;


const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 28px;
  background-color: ${({ theme }) => theme.colors.defaultSecondary};
  border-top: 1px solid ${({ theme }) => theme.colors.darkerSecondary};

  p {
    margin-left: 20px;
  }
`;

const TitleText = styled(motion.p)`
  font: ${({ theme }) => theme.fonts.heading_bold_24px};
  color: ${({ theme }) => theme.colors.defaultPrimary};
`;

const DateText = styled(motion.p)`
  font: ${({ theme }) => theme.fonts.detail_regular_14px};
  color: ${({ theme }) => theme.colors.lightestPrimary};
`;

const TodayText = styled(motion.p)`
  font: ${({ theme }) => theme.fonts.heading_semibold_16px};
  color: ${({ theme }) => theme.colors.lighterPrimary};
  margin-top: 16px;
  margin-bottom: 13px;
`;
