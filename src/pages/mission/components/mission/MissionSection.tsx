import styled from "styled-components";
import { Mission } from "@shared/types";
import MissionItem from "@mission/components/mission/MissionItem.tsx";
import React from "react";

interface MissionSectionProps {
  label: string;
  missionResponse: Mission | Mission[];
}

const MissionSection = ({ label, missionResponse }: MissionSectionProps) => {

  return (
    <Section>
      <Label>{label}</Label>
      {Array.isArray(missionResponse) ?
        <Items>
          {missionResponse.map((mission, index) => (
            <React.Fragment key={mission.id}>
              <MissionItem key={mission.id} mission={mission} />
              {index !== missionResponse.length - 1 ? <Divider /> : null}
            </React.Fragment>
          ))}
        </Items> : <MissionItem mission={missionResponse} />
      }
    </Section>
  );
};

export default MissionSection;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

const Label = styled.p`
  font: ${({ theme }) => theme.fonts.body_bold_16px};
  color: ${({ theme }) => theme.colors.g1Black};
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.darkerSecondary};
`;
