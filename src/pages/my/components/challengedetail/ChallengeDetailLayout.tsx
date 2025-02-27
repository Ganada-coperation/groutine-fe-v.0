import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChallengeHeader from '@my/components/challengedetail/ChallengeHeader';
import Calendar from '@my/components/challengedetail/Calendar';
import Missions from '@my/components/challengedetail/Missions';
import CertificationList from '@my/components/challengedetail/CertificationList';
import styled from 'styled-components';
import { colors } from '@app/styles/colors';
import { fonts } from "@app/styles/fonts"

interface ChallengeDetailLayoutProps {
  title: string;
  startDate: string;
  endDate: string;
  missions: { id: number; title: string; completed: boolean; }[];
  children?: React.ReactNode;
}

const ChallengeDetailLayout: React.FC<ChallengeDetailLayoutProps> = ({
    children,
    title,
    startDate,
    endDate,
    missions
  }) => {
    const navigate = useNavigate();
  
    const handleBackClick = () => navigate(-1);
    const handleChartClick = () => console.log('Chart clicked');
  
    return (
      <AppWrapper>
        <ChallengeHeader 
          title={title} 
          onBackClick={handleBackClick} 
          onChartClick={handleChartClick}
        />
        
            <CalendarWrapper>
          <Calendar title={title} startDate={startDate} endDate={endDate} />
          </CalendarWrapper>
          <MissionWrapper>
          <Missions missions={missions} />
          <CertificationList/>
          {children}
        </MissionWrapper>
      </AppWrapper>
    );
  };
  

export default ChallengeDetailLayout;

const AppWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.lighterSecondary};
`;

const MissionWrapper = styled.div`
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
`;

const CalendarWrapper = styled.div`
background-color: ${colors.defaultSecondary};
width: 100%;
height: 250px;
padding: 20px;
`;