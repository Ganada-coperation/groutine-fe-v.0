export interface ChallengeResponse {
  id: number;
  title: string;
  dDay: number;
  imageUrl?: string;
  startDate: string;
  endDate: string;
}


export interface Mission {
  id: number;
  content: string;
  completed: boolean;
}

export interface MissionResponse {
  requiredMission: Mission;
  challengeMission: Mission[];
}

export const VerifyStatus: Record<string, boolean> = {
  "WAIT": false,
  "APPROVE": true,
  "REJECT": false,
};

export interface ChallengeProgressResponse {
  date: string;
  verifyStatus: string;
}

export interface ChallengeProgressListResponse {
  challengeProgressList: ChallengeProgressResponse[];
}
