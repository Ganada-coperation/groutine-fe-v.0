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
