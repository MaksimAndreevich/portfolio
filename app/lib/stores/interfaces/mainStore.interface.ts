import ICalcStore from "./calcStore.interface";
import ITodoStore from "./todoStore.interface";

export default interface IMainStore {
  todoStore: ITodoStore;
  calcStore: ICalcStore;

  mobileOpen: boolean;
  modeTheme: "dark" | "light";

  toggleMobileOpen: () => void;
  toggleModeTheme: () => void;
}
