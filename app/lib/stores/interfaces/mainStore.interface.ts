import ICalcStore from "./calcStore.interface";
import IMarketStore from "./marketStore.interface";
import ITodoStore from "./todoStore.interface";
import IWeatherStore from "./weatherStore.interface";

export default interface IMainStore {
  todoStore: ITodoStore;
  calcStore: ICalcStore;
  weatherStore: IWeatherStore;
  marketStore: IMarketStore;

  mobileOpen: boolean;
  modeTheme: "dark" | "light";

  toggleMobileOpen: () => void;
  toggleModeTheme: () => void;
}
