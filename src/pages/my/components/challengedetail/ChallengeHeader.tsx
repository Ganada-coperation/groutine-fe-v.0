import React, { useState } from 'react';
import styled from 'styled-components';
import { fonts } from '@app/styles/fonts';
import { colors } from '@app/styles/colors';
import BackIc from '@shared/assets/icon/ic-backkey.svg';
import ChartIc from '@shared/assets/icon/ic-chart.svg';
import ChartModal from './ChartModal';

interface Props {
  title: string;
  onBackClick: () => void;
  onChartClick: () => void;
}

const ChallengeHeader = ({ onBackClick, onChartClick }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleChartIconClick = () => {
      setIsModalOpen(true);
      onChartClick(); 
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <Container>
        <BackIcon src={BackIc} alt="뒤로 가기" onClick={onBackClick} />
        <Title>챌린지</Title>
        <ChartIcon src={ChartIc} alt="차트 보기" onClick={handleChartIconClick} />
        {isModalOpen && <ChartModal onClose={handleCloseModal} />}
      </Container>
    );
  };
  
  export default ChallengeHeader;
  

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: ${colors.lightestSecondary};
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h1`
  ${fonts.heading_bold_18px};
  color: ${colors.defaultPrimary};

`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const BackIcon = styled(Icon)``;

const ChartIcon = styled(Icon)``;
