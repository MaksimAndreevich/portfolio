"use client";

import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../../lib/hooks/useStore";
import ForcastCards from "../ForcastCards";
import WeatherCurrentInfo from "../WeatherCurrentInfo";
import WeatherInput from "../WeatherInput";

const WeatherView = observer(() => {
  const weatherStore = useStore("weatherStore");

  useEffect(() => {
    weatherStore.getWeatherByCurrentPosition();
  }, []);

  return (
    <Box pl={1}>
      <WeatherInput />

      {weatherStore.weatherData?.id ? (
        <WeatherCurrentInfo />
      ) : (
        <Typography variant="h6" textAlign={"center"} color={"primary"}>
          Please enter your city in the search...
        </Typography>
      )}

      {weatherStore.weatherData?.id && <ForcastCards />}
    </Box>
  );
});

export default WeatherView;
