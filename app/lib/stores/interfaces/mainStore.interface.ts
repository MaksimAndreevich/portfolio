import ICalcStore from "./calcStore.interface";
import ITodoStore from "./todoStore.interface";
import IWeatherStore from "./weatherStore.interface";

export default interface IMainStore {
  todoStore: ITodoStore;
  calcStore: ICalcStore;
  weatherStore: IWeatherStore;

  mobileOpen: boolean;
  modeTheme: "dark" | "light";

  toggleMobileOpen: () => void;
  toggleModeTheme: () => void;
}
