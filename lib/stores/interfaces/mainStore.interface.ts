import ICalcStore from "./calcStore.interface";
import IMarketStore from "./marketStore.interface";
import IMemoStore from "./memoStore.interface";
import ITodoStore from "./todoStore.interface";
import IWeatherStore from "./weatherStore.interface";

export default interface IMainStore {
  todoStore: ITodoStore;
  calcStore: ICalcStore;
  weatherStore: IWeatherStore;
  marketStore: IMarketStore;
  memoStore: IMemoStore;

  mobileOpen: boolean;
  modeTheme: "dark" | "light";

  toggleMobileOpen: () => void;
  toggleModeTheme: () => void;
}

export interface ICodewardStats {
  honor: number;
  leaderboardPosition: number;
  ranks: {
    overall: { rank: number; name: string; color: string; score: number };
  };
  codeChallenges: { totalAuthored: number; totalCompleted: number };
  success: boolean;
}

export interface ILeetcodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
  status: string;
}
