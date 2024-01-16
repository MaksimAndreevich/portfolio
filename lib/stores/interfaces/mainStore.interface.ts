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
