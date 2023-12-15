import IMainService from "./mainService.interface";
import OpenWeatherMap from "openweathermap-ts";

export default class MainService implements IMainService {
  openWeather = new OpenWeatherMap({
    apiKey: process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_KEY,
  });

  constructor() {}

  getCurrentWeather = async (city: string) => {
    try {
      const weather = await this.openWeather.getCurrentWeatherByCityName({
        cityName: city,
      });

      console.log(weather);

      return weather;
    } catch (error) {
      console.error("[Error into getWeather]", error);
    }
  };

  getThreeHourForcast = async (city: string) => {
    try {
      const weather = await this.openWeather.getThreeHourForecastByCityName({
        cityName: city,
      });

      console.log("FORCAST ", weather);

      return weather;
    } catch (error) {
      console.error("[Error into getForcast]", error);
    }
  };
}
