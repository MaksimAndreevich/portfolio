import ICalcStore from "./interfaces/calcStore.interface";
import IMainStore from "./interfaces/mainStore.interface";

import * as mobx from "mobx";
import IWeatherStore from "./interfaces/weatherStore.interface";
import IMainService from "../services/mainService.interface";
import MainService from "../services/mainService";
import {
  CurrentResponse,
  ThreeHourResponse,
} from "openweathermap-ts/dist/types";

export default class WeatherStore implements IWeatherStore {
  service: IMainService;

  currentCity: string = "";
  weatherData: CurrentResponse | null = null;
  forcast: ThreeHourResponse | null = null;

  constructor(mainStore: IMainStore) {
    this.service = new MainService();

    // this.getCurrentPosition();
    mobx.makeAutoObservable(this);
  }

  @mobx.action
  getCurrentWeather = async (city: string) => {
    const res = await this.service.getCurrentWeather(city);
    if (!res) return;

    mobx.runInAction(() => {
      this.weatherData = res;
    });
  };

  @mobx.action
  getThreeHourForcast = async (city: string) => {
    const res = await this.service.getThreeHourForcast(city);
    if (!res) return;

    mobx.runInAction(() => {
      this.forcast = res;
    });
  };

  @mobx.action
  getWeather = async (city: string) => {
    await this.getCurrentWeather(city);
    await this.getThreeHourForcast(city);
  };

  getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        // this.weatherData?.coord.lat = pos.coords.latitude;
        // this.weatherData?.coord.lon = pos.coords.longitude;
      },
      (error) => {
        console.warn(
          `getCurrentPosition failed (${error.code}): ${error.message}`
        );
      }
    );
  };
}
