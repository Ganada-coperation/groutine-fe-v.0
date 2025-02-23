import styled from "styled-components";
import DateList from "@mission/components/challenge/DateList.tsx";

const ChallengeInfo = () => {
  return (
    <TopSection>
      <TitleText>불타오르는 유산소</TitleText>
      <DateText>2024.06.01 - 2024.08.02</DateText>
      <TodayText>6월 23일 (토요일)</TodayText>
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

const TitleText = styled.p`
  font: ${({ theme }) => theme.fonts.heading_bold_24px};
  color: ${({ theme }) => theme.colors.defaultPrimary};
`;

const DateText = styled.p`
  font: ${({ theme }) => theme.fonts.detail_regular_14px};
  color: ${({ theme }) => theme.colors.lightestPrimary};
`;

const TodayText = styled.p`
  font: ${({ theme }) => theme.fonts.heading_semibold_16px};
  color: ${({ theme }) => theme.colors.lighterPrimary};
  margin-top: 16px;
  margin-bottom: 13px;
`;
