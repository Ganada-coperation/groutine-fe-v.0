import React from 'react';
import styled from 'styled-components';
import FinanceIc from '@icon/ic-mypage-finance.svg';
import RewardIc from '@icon/ic-mypage-reward.svg';

const FinanceAndRewards = () => {
  return (
    <FinanceRewardsContainer>
      <SectionButton>
        <IconWrapper>
          <FinanceIcon src={FinanceIc} iconSize="60px" alt="Finance Icon" />
        </IconWrapper>
        결제내역
      </SectionButton>
      <Divider/>
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
  background-color: #fffCf8;
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
  color: #6B778C;
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
  background-color: #D8DDE6;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

// 타입 정의 추가
interface IconProps {
  src: string; // 이미지 경로
  iconSize?: string; // 아이콘 크기 (선택적)
}

// 커스텀 속성 처리
const FinanceIcon = styled.img.attrs<IconProps>((props) => ({
  style: { width: props.iconSize || '40px' }, // 동적으로 크기 설정
}))<IconProps>`
  height: auto; /* 비율 유지 */
`;

const RewardIcon = styled.img.attrs<IconProps>((props) => ({
  style: { width: props.iconSize || '24px' }, // 동적으로 크기 설정
}))<IconProps>`
  height: auto; /* 비율 유지 */
`;
// 구분선 스타일
const Divider = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1px;
  height: 60%;
  background-color: #D8DDE6;
`;