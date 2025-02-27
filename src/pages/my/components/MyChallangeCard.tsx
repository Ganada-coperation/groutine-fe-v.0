import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { Challenge } from '@shared/types/challenge';
import { fonts } from '@app/styles/fonts';
import { colors } from '@app/styles/colors';
import UserIc from '@shared/assets/icon/ic-mypage-user.svg';

interface ChallengeCardProps {
  challenge: Challenge;
  type: 'ongoing' | 'applied' | 'completed';
}

const MyChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, type }) => {
  const { id, title, startDate, endDate, daysLeft, participants, completionRate, image } = challenge;
  const navigate = useNavigate();

  const handleClick = () => {
    switch(type) {
      case 'ongoing':
        navigate(`/my/challenge/ongoing/${id}`);
        break;
      case 'applied':
        navigate(`/my/challenge/applied/${id}`);
        break;
      case 'completed':
        navigate(`/my/challenge/completed/${id}`);
        break;
    }
  }


  const renderCompletionInfo = () => {
    if (type === 'ongoing') {
      return `달성까지 ${daysLeft}일 남았어요`;
    }
    if (type === 'applied') {
      return '5일 뒤 진행해요';
    }
    return null;
  };

  return type === 'completed' ? (
    <CompletedCardContainer onClick={handleClick}>
      <CompletedImageWrapper image={image} />
      <CompletedTextContainer>
        <Title>{title}</Title>
        <Dates>{startDate} - {endDate}</Dates>
        <InfoWrapper>
          <Participants>
            <UserIcon src={UserIc} alt="참여자 수" />
            {participants}
          </Participants>
          <CompletionRate>달성률 {completionRate}%</CompletionRate>
        </InfoWrapper>
      </CompletedTextContainer>
    </CompletedCardContainer>
  ) : (
    <CardContainer onClick={handleClick}>
      <ImageWrapper image={image}>
        <OvalContainer>{renderCompletionInfo()}</OvalContainer>
      </ImageWrapper>
      <TextContainer>
        <Title>{title}</Title>
        <Dates>{startDate} - {endDate}</Dates>
      </TextContainer>
    </CardContainer>
  );
};

export default MyChallengeCard;

// ✅ 진행 중 & 신청 챌린지 스타일
const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: ${colors.lightestSecondary};
  padding-bottom: 11px;
`;

const ImageWrapper = styled.div<{ image: string }>`
  width: 100%;
  height: 120px;
  border-radius: 8px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 8px;
  box-sizing: border-box;
`;

// ✅ 완료된 챌린지 스타일
const CompletedCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 102px;
  align-items: center;
  border-radius: 8px;
  background: ${colors.lightestSecondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);
  overflow: hidden;
`;

const CompletedImageWrapper = styled.div<{ image: string }>`
  width: 106px;
  height: 102px;
  border-radius: 8px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`;

const CompletedTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
  height: 67px;
  flex: 1;
`;

// ✅ 공통 스타일
const OvalContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  color: ${colors.darkestPrimary};
  font-size: 0.7em;
  font-weight: bold;
  border-radius: 15px;
  padding: 3px 8px;
  position: absolute;
  top: 8px;
  left: 8px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 10px;
`;

const Title = styled.h3`
  ${fonts.body_bold_16px};
  color: ${colors.defaultPrimary};
  margin-bottom: 5px;
`;

const Dates = styled.p`
  ${fonts.caption_medium_14px};
  color: ${colors.mediumGray};
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const Participants = styled.div`
  display: flex;
  align-items: center;
  ${fonts.caption_medium_14px};
  color: ${colors.mediumGray};
`;

const UserIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 4px;
`;

const CompletionRate = styled.p`
  ${fonts.caption_medium_14px};
  color: ${colors.defaultPrimary};
  font-weight: bold;
`;
