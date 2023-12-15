import {
  CurrentResponse,
  ThreeHourResponse,
} from "openweathermap-ts/dist/types";
import IMainService from "../../services/mainService.interface";

export default interface IWeatherStore {
  service: IMainService;

  currentCity: string;
  weatherData: CurrentResponse | null;
  forcast: ThreeHourResponse | null;

  getCurrentWeather: (city: string) => Promise<void>;
  getThreeHourForcast: (city: string) => Promise<void>;
  getWeather: (city: string) => void;
}
