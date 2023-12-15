"use client";

import { Box } from "@mui/material";
import WeatherInput from "../WeatherInput";
import WeatherCurrentInfo from "../WeatherCurrentInfo";
import { useStore } from "../../lib/hooks/useStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import ForcastCards from "../ForcastCards";

interface IWeatherViewProps {
  cities: Array<{ label: string }>;
}

const WeatherView = observer(({ cities }: IWeatherViewProps) => {
  const weatherStore = useStore("weatherStore");

  useEffect(() => {
    console.log(weatherStore.weatherData);
  }, [weatherStore.weatherData]);

  return (
    <Box>
      <WeatherInput cities={cities} />

      {weatherStore.weatherData?.id && <WeatherCurrentInfo />}

      <ForcastCards />
    </Box>
  );
});

export default WeatherView;
