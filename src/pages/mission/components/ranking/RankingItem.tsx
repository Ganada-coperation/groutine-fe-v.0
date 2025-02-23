import styled from "styled-components";
import { motion } from "framer-motion";

interface RankingItemProps {
  rankingNumber: 1 | 2 | 3;
  nickname: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


const RankingItem = ({ rankingNumber, nickname }: RankingItemProps) => {
  return (
    <RankingItemContainer
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.4 }}
    >
      <RankingNumber $rankingNumber={rankingNumber}>{rankingNumber}</RankingNumber>
      <NickName>{nickname}</NickName>
    </RankingItemContainer>
  );
};

export default RankingItem;

const RankingItemContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

const RankingNumber = styled.p<{ $rankingNumber: 1 | 2 | 3 }>`
  font: ${({ theme }) => theme.fonts.detail_semibold_12px};
  color: ${({ theme }) => theme.colors.lightestSecondary};
  padding: 2px 7px;
  background-color: ${({ theme, $rankingNumber }) =>
    $rankingNumber === 1 ? theme.colors.defaultPrimary : $rankingNumber === 2 ? theme.colors.lighterPrimary : theme.colors.lightestPrimary};
  border-radius: 3px;
`;

const NickName = styled.p`
  font: ${({ theme }) => theme.fonts.detail_regular_14px};
  color: ${({ theme }) => theme.colors.defaultPrimary};
`;
