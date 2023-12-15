import { CurrentResponse, ThreeHourResponse } from "openweathermap-ts/dist/types";

export default interface IMainService {
  getCurrentWeather: (city: string) => Promise<CurrentResponse | undefined>;
  getThreeHourForcast: (city: string) => Promise<ThreeHourResponse | undefined>;
  getCurrentWeatherByGeoCoordinates: (coord: { lat: number; lon: number }) => Promise<CurrentResponse | undefined>;

  toggleThemeLocalStorage: (theme: "dark" | "light") => void;
  getThemeLocalStorage: () => "dark" | "light" | undefined;
}
