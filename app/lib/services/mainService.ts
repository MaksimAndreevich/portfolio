import IMainService from "./mainService.interface";
import OpenWeatherMap from "openweathermap-ts";

export default class MainService implements IMainService {
  openWeather: OpenWeatherMap;

  constructor() {
    this.openWeather = new OpenWeatherMap({
      apiKey: process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_KEY,
    });
    this.openWeather.setUnits("metric");
  }

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

      return weather;
    } catch (error) {
      console.error("[Error into getForcast]", error);
    }
  };

  getCurrentWeatherByGeoCoordinates = async (coord: {
    lat: number;
    lon: number;
  }) => {
    try {
      const weather = await this.openWeather.getCurrentWeatherByGeoCoordinates(
        coord.lat,
        coord.lon
      );

      return weather;
    } catch (error) {
      console.error("[Error into getCurrentWeatherByGeoCoordinates]", error);
    }
  };
}
