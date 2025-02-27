import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '@app/styles/colors';
import { fonts } from "@app/styles/fonts";
import IcWill from '@shared/assets/icon/challengedetailic/ic-will.svg';
import Ic1 from '@shared/assets/icon/challengedetailic/ic-1.svg';
import Ic2 from '@shared/assets/icon/challengedetailic/ic-2.svg';
import Ic3 from '@shared/assets/icon/challengedetailic/ic-3.svg';


interface CalendarProps {
  title: string;
  startDate: string;
  endDate: string;
}

const Calendar: React.FC<CalendarProps> = ({ title, startDate, endDate }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
  }, [startDate, endDate]);

  const renderCalendarDays = () => {
    const days = [];
    const start = new Date(startDate);
    const end = new Date(endDate);
    const today = new Date();

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const day = d.getDate();
      let missionStatus = 'will';

      if (d < today) {
        missionStatus = 'completed';
      } else if (d.toDateString() === today.toDateString()) {
        missionStatus = 'progress';
      }

      let icon;
      switch (missionStatus) {
        case 'completed':
          icon = Ic3;
          break;
        case 'progress':
          icon = Ic2;
          break;
        case 'start':
          icon =Ic1;
          break;
        default:
          icon = IcWill;
          break;
      }

      days.push(
        <CalendarDayWrapper key={d.toISOString()} className={d.toDateString() === today.toDateString() ? 'active' : ''}>
          <StarIcon src={icon} alt="미션 상태" />
          <DayNumber>{day}</DayNumber>
        </CalendarDayWrapper>
      );
    }
    return days;
  };

  const getStartDateString = () => {
    const date = new Date(startDate);
    const month = date.toLocaleString('ko-KR', { month: 'long' });
    const dayOfWeek = date.toLocaleString('ko-KR', { weekday: 'long' });
    return `${month} ${date.getDate()}일 (${dayOfWeek})`;
  };

  return (
    <Container>
      <ChallengeInfo>
        <ChallengeTitle>{title}</ChallengeTitle>
        <ChallengeDates>{startDate} - {endDate}</ChallengeDates>
      </ChallengeInfo>
      <StartDate>{getStartDateString()}</StartDate>
      <CalendarContainer ref={containerRef}>
        {renderCalendarDays()}
      </CalendarContainer>
    </Container>
  );
};

export default Calendar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding-bottom: 10px;
`;

const CalendarContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 15px;
  width: 100%;
  padding: 0 20px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const CalendarDayWrapper = styled.div`
  width: 40px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 50%;
  color: ${colors.mediumGray};
  font-size: 14px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 5px;
  margin-bottom: 5px;

  &.active {
    background-color: ${colors.primary};
    color: white;
  }
`;

const StarIcon = styled.img`
  width: 90px;
  height: 45px;
  margin-bottom: 4px;
`;

const DayNumber = styled.span`
  ${fonts.body_medium_16px};
  color: ${colors.mediumGray};
`;

const StartDate = styled.div`
  ${fonts.body_bold_20px};
  color: ${colors.defaultPrimary};
  text-align: left;
  margin-bottom: 5px;
`;

const ChallengeInfo = styled.div`
  margin-bottom: 20px;
`;

const ChallengeTitle = styled.h1`
  ${fonts.heading_bold_24px};
  color: ${colors.defaultPrimary};
  font-weight: bold;
`;

const ChallengeDates = styled.p`
  ${fonts.heading_medium_18px};
  color: ${colors.lightestPrimary};
`;