import AppBar from "@shared/ui/AppBar.tsx";
import { useNavigate } from "react-router";
import { HeaderAction } from "@shared/types";
import IcArrowLeft from "@icon/ic-arrow-left.svg";
import styled from "styled-components";
import ChallengeInfo from "@mission/components/challenge/ChallengeInfo.tsx";
import ChallengeInfoBottom from "@mission/components/challenge/ChallengeInfoBottom.tsx";

export const ChallengePage = () => {
  const navigate = useNavigate();
  const leftHeaderAction: HeaderAction = {
    icon: IcArrowLeft,
    onClick: () => navigate('/mission', { replace: true }),
  };

  return (
    <>
      <AppBar title="챌린지" leftHeaderAction={leftHeaderAction} />
      <Inner>
        <ChallengeInfo />
        <ChallengeInfoBottom />
      </Inner>
    </>
  );
};

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;
