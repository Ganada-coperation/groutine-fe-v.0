import React from 'react';
import CheckIc from '@shared/assets/icon/ic-check.svg';
import styled from 'styled-components';
import { colors } from '@app/styles/colors';
import { fonts } from "@app/styles/fonts";

interface Mission {
  id: number;
  title: string;
  completed: boolean;
}

interface MissionsProps {
  missions: Mission[];
}

const Missions: React.FC<MissionsProps> = ({ missions }) => {
  return (
    <MissionsContainer>
      <MissionsTitle>미션</MissionsTitle>
      {missions.map((mission) => (
        <MissionItem key={mission.id}>
          <MissionCheckbox completed={mission.completed}>
            {mission.completed && <CheckIcon src={CheckIc} alt="완료" />}
          </MissionCheckbox>
          <MissionTitle>{mission.title}</MissionTitle>
          <ActionButton>미션하기</ActionButton>
        </MissionItem>
      ))}
    </MissionsContainer>
  );
};

export default Missions;

const MissionsContainer = styled.div`
  margin-bottom: 20px;
`;

const MissionsTitle = styled.h2`
  ${fonts.body_bold_16px};
  color: ${colors.defaultPrimary};
  margin-bottom: 10px;
`;

const MissionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid ${colors.lightGray};
`;

const MissionCheckbox = styled.div<{ completed: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${colors.mediumGray};
  margin-right: 10px;
  background-color: ${colors.lightestSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.defaultPrimary};

  ${(props) =>
    props.completed &&
    `
    border-color: ${colors.primary};
    background-color: ${colors.primary};
  `}
`;

const CheckIcon = styled.img`
  width: 14px;
  height: 14px;
`;

const MissionTitle = styled.span`
  ${fonts.body_medium_16px};
  color: ${colors.defaultPrimary};
  flex: 1;
`;

const ActionButton = styled.button`
  background-color: ${colors.lightestSecondary};
  color: ${colors.defaultPrimary};
  border: 1px solid ${colors.defaultPrimary};
  border-radius: 20px;
  padding: 5px 15px;
  font-size: 14px;
  cursor: pointer;
`;