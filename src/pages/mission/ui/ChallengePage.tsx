import AppBar from "@shared/ui/AppBar.tsx";
import { useNavigate } from "react-router";
import { HeaderAction } from "@shared/types";
import IcArrowLeft from "@icon/ic-arrow-left.svg";
import IcRanking from "@icon/ic-ranking.svg";
import styled from "styled-components";
import ChallengeInfo from "@mission/components/challenge/ChallengeInfo.tsx";
import ChallengeInfoBottom from "@mission/components/challenge/ChallengeInfoBottom.tsx";
import { useManagePopup } from "@mission/feature/hooks/useManagePopup.ts";
import RankingPopup from "@mission/components/ranking/RankingPopup.tsx";

export const ChallengePage = () => {
  const navigate = useNavigate();
  const { isOpen, openPopup, closePopup } = useManagePopup();
  const leftHeaderAction: HeaderAction = {
    icon: IcArrowLeft,
    onClick: () => navigate('/mission', { replace: true }),
  };
  const rightHeaderActions: HeaderAction[] = [
    {
      icon: IcRanking,
      onClick: () => openPopup(),
    },
  ];

  return (
    <>
      <AppBar title="챌린지" leftHeaderAction={leftHeaderAction} rightHeaderActionArr={rightHeaderActions} />
      <Inner>
        <ChallengeInfo />
        <ChallengeInfoBottom />
      </Inner>
      {isOpen && <RankingPopup closePopup={closePopup} />}
    </>
  );
};

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;
