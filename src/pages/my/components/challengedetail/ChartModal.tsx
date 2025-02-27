import React from 'react';
import styled, { keyframes } from 'styled-components';
import IcRank1 from '@shared/assets/icon/challengedetailic/ic-rank-1.svg';
import IcRank2 from '@shared/assets/icon/challengedetailic/ic-rank-2.svg';
import IcRank3 from '@shared/assets/icon/challengedetailic/ic-rank-3.svg';
import { colors } from '@app/styles/colors';
import { fonts } from '@app/styles/fonts';


interface ChartModalProps {
    onClose: () => void;
}

interface RankingItemProps {
    rank: number;
    userName: string;
}

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

const ChartModal: React.FC<ChartModalProps> = ({ onClose }) => {
    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <ContentWrapper>
                    <MissionRankingWrapper>
                        <RankingTitle>미션 랭킹</RankingTitle>
                        <RankingSection>
                            <RankingList>
                                <RankingItem rank={1} userName="말랑콩떡" />
                                <RankingItem rank={2} userName="나나" />
                                <RankingItem rank={3} userName="클로이" />
                            </RankingList>
                        </RankingSection>
                    </MissionRankingWrapper>

                    <ResultWrapper>
                        <ResultTitle>내 결과</ResultTitle>
                        <ResultSection>
                            <ResultContainer>
                                <CurrentRank>현재 순위 N위</CurrentRank>
                                <AchievementRate>달성률 100%</AchievementRate>
                            </ResultContainer>
                        </ResultSection>
                    </ResultWrapper>
                </ContentWrapper>

                <SummaryText>
                    38명 중 10명이 달성도 90% 이상을 기록했어요!
                </SummaryText>
            </ModalContent>
        </ModalOverlay>
    );
};

const RankingItem: React.FC<RankingItemProps> = ({ rank, userName }) => {
    let rankIcon;
    switch (rank) {
        case 1:
            rankIcon = IcRank1;
            break;
        case 2:
            rankIcon = IcRank2;
            break;
        case 3:
            rankIcon = IcRank3;
            break;
        default:
            rankIcon = null;
            break;
    }

    return (
        <RankingLi>
            <RankingNumber>
                {rankIcon ? <RankIcon src={rankIcon} alt={`${rank}위`} /> : rank}
            </RankingNumber>
            <UserName>{userName}</UserName>
        </RankingLi>
    );
};


export default ChartModal;

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 1000;
  overflow: hidden;
`;

const ModalContent = styled.div`
  position: absolute;
  background-color: #FFFCF8;
  border-radius: 30px 30px 0 0;
  padding: 30px;
  width: 100%;
  max-width: 440px;
  text-align: center;
  overflow-y: auto;
  max-height: 90vh;
  transform: translateY(100%);
  transition: transform 0.3s ease-out;
  box-sizing: border-box;
  animation: ${slideUp} 0.3s ease-out forwards;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const MissionRankingWrapper = styled.div`
  width: 48%;
`;

const ResultWrapper = styled.div`
  width: 48%;
`;

const RankingTitle = styled.h2`
  ${fonts.body_bold_16px};
  color: ${colors.defaultPrimary};
  margin-bottom: 15px;
  text-align: left;
`;

const ResultTitle = styled.h3`
  ${fonts.body_bold_16px};
  color: ${colors.defaultPrimary};
  margin-bottom: 15px;
  text-align: left;
`;

const RankingSection = styled.div`
  background-color: #FFFFFF;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: left;
`;

const RankingList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const RankingLi = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 0;
`;

const RankingNumber = styled.span`
  ${fonts.body_medium_14px};
  color: ${colors.defaultPrimary};
  margin-right: 10px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RankIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const UserName = styled.span`
  ${fonts.body_medium_14px};
  color: ${colors.defaultPrimary};
  text-align: left;
`;

const ResultSection = styled.div`
  background-color: #FFFFFF;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: left;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CurrentRank = styled.span`
  ${fonts.body_medium_14px};
  color: ${colors.defaultPrimary};
  margin-bottom: 5px;
`;

const AchievementRate = styled.span`
  ${fonts.body_medium_14px};
  color: ${colors.defaultPrimary};
`;

const SummaryText = styled.p`
  ${fonts.detail_medium_12px};
  color: ${colors.defaultPrimary};
  margin-top: 20px;
  text-align: center;
`;

