import { challengeProgressListResponse } from "@shared/api/mock.ts";
import { VerifyStatus } from "@shared/types";
import IcStar from "@icon/ic-star.svg";
import IcStarTrue from "@icon/ic-star-true.svg";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useChallengeDateStore } from "@mission/feature/useChallengeDateStore.ts";

const DateList = () => {
  const dayListRef = useRef<HTMLDivElement>(null);
  const lastIndex = challengeProgressListResponse.challengeProgressList.length - 1;
  const { data, setData } = useChallengeDateStore();

  useEffect(() => {
    setData({ index: lastIndex, date: challengeProgressListResponse.challengeProgressList[lastIndex].date });
    if (dayListRef.current) {
      dayListRef.current.scrollLeft =
        dayListRef.current.scrollWidth - dayListRef.current.clientWidth;
    }
  }, []);

  return (
    <DayList ref={dayListRef}>
      {challengeProgressListResponse.challengeProgressList.map((challengeProgressResponse, index) =>
        <DayContainer key={index} onClick={() => data.index !== index ? setData({
          index: index,
          date: challengeProgressResponse.date,
        }) : undefined}>
          <Image
            $status={VerifyStatus[challengeProgressResponse.verifyStatus]}
            src={VerifyStatus[challengeProgressResponse.verifyStatus] ? data.index === index ? IcStar : IcStarTrue : IcStar}
            $isClicked={data.index === index}
          />
          <Day>{new Date(challengeProgressResponse.date).getDate()}</Day>
        </DayContainer>,
      )}
    </DayList>
  );
};

export default DateList;

const Image = styled.img<{ $status: boolean, $isClicked: boolean }>`
  padding: 10px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.lightestestPrimary};
  background-color: ${({
                         theme,
                         $status,
                         $isClicked,
                       }) => ($status ? $isClicked ? theme.colors.lighterPrimary : theme.colors.lightestestPrimary : $isClicked ? theme.colors.lighterPrimary : theme.colors.defaultSecondary)};
`;

const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const DayList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding: 0 20px;
  overflow-x: scroll;
`;

const Day = styled.span`
  font: ${({ theme }) => theme.fonts.detail_regular_14px};
  color: ${({ theme }) => theme.colors.defaultPrimary};
`;
