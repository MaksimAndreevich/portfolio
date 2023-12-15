import * as mobx from "mobx";
import CalcStore from "./calcStore";
import ICalcStore from "./interfaces/calcStore.interface";
import IMainStore from "./interfaces/mainStore.interface";
import ITodoStore from "./interfaces/todoStore.interface";
import TodoStore from "./todoStore";
import IWeatherStore from "./interfaces/weatherStore.interface";
import WeatherStore from "./weatherStore";

export default class MainStore implements IMainStore {
  public readonly todoStore: ITodoStore;
  public readonly calcStore: ICalcStore;
  public readonly weatherStore: IWeatherStore;

  mobileOpen = false;
  modeTheme: "dark" | "light" = "dark";

  constructor() {
    this.todoStore = new TodoStore(this);
    this.calcStore = new CalcStore(this);
    this.weatherStore = new WeatherStore(this);

    mobx.makeAutoObservable(this);
  }

  @mobx.action
  toggleMobileOpen = () => {
    this.mobileOpen = !this.mobileOpen;
  };

  @mobx.action
  toggleModeTheme = () => {
    if (this.modeTheme === "dark") {
      this.modeTheme = "light";
    } else {
      this.modeTheme = "dark";
    }
  };
}
