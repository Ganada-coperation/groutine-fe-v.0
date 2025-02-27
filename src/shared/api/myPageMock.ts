import ImgExample from "@img/img-example.png"
import { Challenge } from "@shared/types/challenge";

export const ongoingChallenges: Challenge[] = [
  { id: 1, title: '불타오르는 유산소🔥', startDate: '2024.06.01', endDate: '2024.08.02', daysLeft: 5, image: ImgExample },
  { id: 2, title: '불타오르는 유산소🔥', startDate: '2024.06.01', endDate: '2024.08.02', daysLeft: 5, image: ImgExample },
  { id: 3, title: '불타오르는 유산소🔥', startDate: '2024.06.01', endDate: '2024.08.02', daysLeft: 5, image: ImgExample },
];

export const appliedChallenges: Challenge[] = [
  { id: 4, title: '신청한 챌린지 1', startDate: '2024.06.01', endDate: '2024.08.02', daysLeft: 5, image: ImgExample },
  { id: 5, title: '신청한 챌린지 2', startDate: '2024.06.01', endDate: '2024.08.02', daysLeft: 5, image: ImgExample },
];

export const completedChallenges: Challenge[] = [
  { id: 6, title: '완료된 챌린지 1', startDate: '2024.06.01', endDate: '2024.08.02', participants: 99, completionRate: 100, image: ImgExample },
  { id: 7, title: '완료된 챌린지 2', startDate: '2024.06.01', endDate: '2024.08.02', participants: 99, completionRate: 100, image: ImgExample },
  { id: 8, title: '완료된 챌린지 3', startDate: '2024.06.01', endDate: '2024.08.02', participants: 99, completionRate: 100, image: ImgExample },
  { id: 9, title: '완료된 챌린지 4', startDate: '2024.06.01', endDate: '2024.08.02', participants: 99, completionRate: 100, image: ImgExample },
];

export const getUserChallenges = () => {
  return {
    ongoingChallenges,
    appliedChallenges,
    completedChallenges
  };
};
