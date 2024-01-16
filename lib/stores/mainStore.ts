import * as mobx from "mobx";
import MainService from "../services/mainService";
import IMainService from "../services/mainService.interface";
import CalcStore from "./calcStore";
import ICalcStore from "./interfaces/calcStore.interface";
import IMainStore from "./interfaces/mainStore.interface";
import IMarketStore from "./interfaces/marketStore.interface";
import IMemoStore from "./interfaces/memoStore.interface";
import ITodoStore from "./interfaces/todoStore.interface";
import IWeatherStore from "./interfaces/weatherStore.interface";
import MarketStore from "./marketStore";
import MemoStore from "./memoStore";
import TodoStore from "./todoStore";
import WeatherStore from "./weatherStore";

export default class MainStore implements IMainStore {
  readonly service: IMainService;

  public readonly todoStore: ITodoStore;
  public readonly calcStore: ICalcStore;
  public readonly weatherStore: IWeatherStore;
  public readonly marketStore: IMarketStore;
  public readonly memoStore: IMemoStore;

  mobileOpen = false;
  modeTheme: "dark" | "light" = "light";

  constructor() {
    this.service = new MainService();

    this.todoStore = new TodoStore(this);
    this.calcStore = new CalcStore(this);
    this.weatherStore = new WeatherStore(this);
    this.marketStore = new MarketStore(this);
    this.memoStore = new MemoStore(this);

    mobx.makeAutoObservable(this);
  }

  @mobx.action
  toggleMobileOpen = () => {
    this.mobileOpen = !this.mobileOpen;
  };

  @mobx.action
  toggleModeTheme = () => {
    this.setModeTheme(this.modeTheme === "dark" ? "light" : "dark");
    this.service.toggleThemeLocalStorage(this.modeTheme);
  };

  @mobx.action
  setThemeFromLocalStorage = () => {
    const theme = this.service.getThemeLocalStorage();

    if (theme) {
      this.setModeTheme(theme);
    }
  };

  @mobx.action
  setModeTheme = (theme: "dark" | "light") => {
    mobx.runInAction(() => {
      this.modeTheme = theme;
    });
  };
}
