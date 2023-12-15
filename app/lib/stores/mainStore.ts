import * as mobx from "mobx";
import CalcStore from "./calcStore";
import ICalcStore from "./interfaces/calcStore.interface";
import IMainStore from "./interfaces/mainStore.interface";
import ITodoStore from "./interfaces/todoStore.interface";
import TodoStore from "./todoStore";
import IWeatherStore from "./interfaces/weatherStore.interface";
import WeatherStore from "./weatherStore";
import MainService from "../services/mainService";
import IMainService from "../services/mainService.interface";
import { dark } from "@mui/material/styles/createPalette";

export default class MainStore implements IMainStore {
  readonly service: IMainService;

  public readonly todoStore: ITodoStore;
  public readonly calcStore: ICalcStore;
  public readonly weatherStore: IWeatherStore;

  mobileOpen = false;
  modeTheme: "dark" | "light";

  constructor() {
    this.service = new MainService();

    this.todoStore = new TodoStore(this);
    this.calcStore = new CalcStore(this);
    this.weatherStore = new WeatherStore(this);

    this.modeTheme = this.service.getThemeLocalStorage();

    mobx.makeAutoObservable(this);
  }

  @mobx.action
  toggleMobileOpen = () => {
    this.mobileOpen = !this.mobileOpen;
  };

  @mobx.action
  toggleModeTheme = () => {
    this.modeTheme = this.modeTheme === "dark" ? "light" : "dark";
    this.service.toggleThemeLocalStorage(this.modeTheme);
  };
}
