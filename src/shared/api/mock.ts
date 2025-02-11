import ImgExample from "@img/img-example.png"
import { ChallengeResponse, MissionResponse } from "@shared/types";

export const challengeList: ChallengeResponse[] = [
  {
    id: 0,
    title: '붙라오르는 유산소',
    dDay: 7,
    imageUrl: ImgExample,
    startDate: '2024.06.01',
    endDate: '2024.08.22',
  },
  {
    id: 1,
    title: '붙라오르는 유산소',
    dDay: 10,
    imageUrl: ImgExample,
    startDate: '2024.06.01',
    endDate: '2024.08.22',
  },
  {
    id: 2,
    title: '붙라오르는 유산소',
    dDay: 11,
    imageUrl: ImgExample,
    startDate: '2024.06.01',
    endDate: '2024.08.22',
  },
  {
    id: 3,
    title: '붙라오르는 유산소',
    dDay: 3,
    imageUrl: ImgExample,
    startDate: '2024.06.01',
    endDate: '2024.08.22',
  },
  {
    id: 4,
    title: '붙라오르는 유산소',
    dDay: 7,
    imageUrl: ImgExample,
    startDate: '2024.06.01',
    endDate: '2024.08.22',
  },
  {
    id: 5,
    title: '붙라오르는 유산소',
    dDay: 30,
    imageUrl: ImgExample,
    startDate: '2024.06.01',
    endDate: '2024.08.22',
  },
  {
    id: 6,
    title: '붙라오르는 유산소',
    dDay: 3,
    imageUrl: ImgExample,
    startDate: '2024.06.01',
    endDate: '2024.08.22',
  },
  {
    id: 7,
    title: '붙라오르는 유산소',
    dDay: 8,
    imageUrl: ImgExample,
    startDate: '2024.06.01',
    endDate: '2024.08.22',
  },
];

export const missionResponse: MissionResponse = {
  requiredMission: {
    id: 0,
    content: "독서하고 감상문 작성하기",
    completed: true,
  },
  challengeMission: [
    {
      id: 0,
      content: "독서하고 감상문 작성하기",
      completed: true,
    },
    {
      id: 1,
      content: "1만보 달성하기",
      completed: false,
    },
  ],
};
