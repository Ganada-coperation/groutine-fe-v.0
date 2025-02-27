import React from 'react';
import styled from 'styled-components';
import FinanceIc from '@shared/assets/icon/ic-mypage-finance.svg';
import RewardIc from '@shared/assets/icon/ic-mypage-reward.svg';
import { colors } from '@app/styles/colors';
import { fonts } from '@app/styles/fonts';

const FinanceAndRewards = () => {
  return (
    <FinanceRewardsContainer>
      <SectionButton>
        <IconWrapper>
          <FinanceIcon src={FinanceIc} iconSize="60px" alt="Finance Icon" />
        </IconWrapper>
        결제내역
      </SectionButton>
      <Divider />
      <SectionButton>
        <IconWrapper>
          <RewardIcon src={RewardIc} iconSize="60px" alt="Reward Icon" />
        </IconWrapper>
        리워드
      </SectionButton>
    </FinanceRewardsContainer>
  );
};

export default FinanceAndRewards;

const FinanceRewardsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  padding: 15px 0;
  border-radius: 20px;
  background-color: ${colors.lightestSecondary};
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
`;

const SectionButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  background-color: transparent;
  cursor: pointer;
  color: ${colors.defaultPrimary};
  font-size: 15px;
  font-weight: 700;

  &:hover {
    opacity: 0.8;
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${colors.lightestestPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

interface IconProps {
  src: string;
  iconSize?: string;
}

const FinanceIcon = styled.img.attrs<IconProps>((props) => ({
  style: { width: props.iconSize || '40px' },
}))<IconProps>`
  height: auto;
`;

const RewardIcon = styled.img.attrs<IconProps>((props) => ({
  style: { width: props.iconSize || '24px' },
}))<IconProps>`
  height: auto;
`;

const Divider = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1px;
  height: 60%;
  background-color: ${colors.lightestestPrimary};
`;
