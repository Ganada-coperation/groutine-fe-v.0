import ImgExample from "@img/img-example.png";
import { ChallengeProgressListResponse, ChallengeResponse, MissionResponse } from "@shared/types";

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


// todo: 둘다  배열임
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

export const challengeProgressListResponse: ChallengeProgressListResponse = {
  challengeProgressList: [
    {
      date: '2024.06.01',
      verifyStatus: 'APPROVE',
    },
    {
      date: '2024.06.02',
      verifyStatus: 'APPROVE',
    },
    {
      date: '2024.06.03',
      verifyStatus: 'APPROVE',
    },
    {
      date: '2024.06.04',
      verifyStatus: 'APPROVE',
    },
    {
      date: '2024.06.05',
      verifyStatus: 'APPROVE',
    },
    {
      date: '2024.06.06',
      verifyStatus: 'REJECT',
    },
    {
      date: '2024.06.07',
      verifyStatus: 'REJECT',
    },
    {
      date: '2024.06.08',
      verifyStatus: 'REJECT',
    },
    {
      date: '2024.06.09',
      verifyStatus: 'REJECT',
    },
    {
      date: '2024.06.10',
      verifyStatus: 'APPROVE',
    },
    {
      date: '2024.06.11',
      verifyStatus: 'APPROVE',
    },
    {
      date: '2024.06.12',
      verifyStatus: 'APPROVE',
    },
    {
      date: '2024.06.13',
      verifyStatus: 'REJECT',
    },
    {
      date: '2024.06.14',
      verifyStatus: 'REJECT',
    },
    {
      date: '2024.06.15',
      verifyStatus: 'APPROVE',
    },
    {
      date: '2024.06.16',
      verifyStatus: 'REJECT',
    },
    {
      date: '2024.06.17',
      verifyStatus: 'WAIT',
    },
    {
      date: '2024.06.18',
      verifyStatus: 'REJECT',
    },
    {
      date: '2024.06.19',
      verifyStatus: 'APPROVE',
    },
    {
      date: '2024.06.20',
      verifyStatus: 'REJECT',
    },
    {
      date: '2024.06.21',
      verifyStatus: 'APPROVE',
    },
    {
      date: '2024.06.22',
      verifyStatus: 'APPROVE',
    },
    {
      date: '2024.06.23',
      verifyStatus: 'WAIT',
    },
  ],
};
