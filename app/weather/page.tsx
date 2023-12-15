import WeatherView from "../ui/WeatherView";
import { promises as fs } from "fs";

export default async function WeatherPage() {
  // TODO: replace on google maps
  const file = await fs.readFile(
    process.cwd() + "/app/citiesList.json",
    "utf8"
  );
  const cities = JSON.parse(file);

  return <WeatherView cities={cities} />;
}
