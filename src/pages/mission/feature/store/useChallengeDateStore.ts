import { create } from "zustand/react";

interface UseChallengeDateStore {
  data: { index: number; date: string };
  setData: (data: { index: number; date: string }) => void;
}

export const useChallengeDateStore = create<UseChallengeDateStore>((set) => ({
  data: { index: 0, date: "" },
  setData: (newData) => set({ data: newData }),
}));
