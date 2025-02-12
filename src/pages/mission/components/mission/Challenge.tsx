import styled from "styled-components";

interface ChallengeProps {
  title: string;
  dDay: number;
  imageUrl?: string;
  startDate: string;
  endDate: string;
}

const Challenge = ({ title, dDay, endDate, startDate, imageUrl }: ChallengeProps) => {
  return (
    <ChallengeContainer>
      <StyledImg src={imageUrl} alt="" />
      <DDay>D-{dDay}</DDay>
      <Inner>
        <Title>{title}</Title>
        <DateText>{startDate} - {endDate}</DateText>
      </Inner>
    </ChallengeContainer>
  );
};

export default Challenge;

const ChallengeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  padding-bottom: 11px;
`;

const DDay = styled.p`
  font: ${({ theme }) => theme.fonts.detail_medium_10px};
  color: ${({ theme }) => theme.colors.defaultPrimary};
  border-radius: 100px;
  border: none;
  padding: 2px 9px;
  background-color: ${({ theme }) => theme.colors.lightestestPrimary};
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.p`
  font: ${({ theme }) => theme.fonts.caption_bold_14px};
  color: ${({ theme }) => theme.colors.defaultPrimary};
`;

const DateText = styled.p`
  font: ${({ theme }) => theme.fonts.detail_medium_10px};
  color: ${({ theme }) => theme.colors.lightestPrimary};
`;


