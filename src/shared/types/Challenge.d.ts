
export interface Challenge {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    daysLeft?: number;
    participants?: number;
    completionRate?: number;
    image: string; 
}
