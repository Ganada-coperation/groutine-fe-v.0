import { Mission } from "@shared/types";
import IcCheckFill from "@icon/ic-check-fill.svg";
import IcCheck from "@icon/ic-check.svg";
import styled from "styled-components";
import { useNavigate } from "react-router";

const MissionItem = ({ mission }: { mission: Mission }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('certification');
  }

  return (
    <Inner>
      <img src={mission.completed ? IcCheckFill : IcCheck} alt="" />
      <span>{mission.content}</span>
      <Button $completed={mission.completed} disabled={mission.completed} onClick={handleClick}>미션하기</Button>
    </Inner>
  );
};

export default MissionItem;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;

  span {
    font: ${({ theme }) => theme.fonts.caption_medium_14px};
    color: ${({ theme }) => theme.colors.lighterPrimary};
  }
`;

const Button = styled.button<{ $completed?: boolean }>`
  visibility: ${({ $completed }) => $completed ? 'hidden' : 'visible'};
  padding: 7px 17px;
  font: ${({ theme }) => theme.fonts.button_semibold_13px};
  color: ${({ theme }) => theme.colors.lighterPrimary};
  border: 1px solid ${({ theme }) => theme.colors.lighterPrimary};
  border-radius: 100px;
  margin-right: 10px;
  margin-left: auto;
  outline: none;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.lighterPrimary};
  }
`;
