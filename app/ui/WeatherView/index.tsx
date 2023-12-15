"use client";

import { Box, Typography } from "@mui/material";
import WeatherInput from "../WeatherInput";
import WeatherCurrentInfo from "../WeatherCurrentInfo";
import { useStore } from "../../lib/hooks/useStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import ForcastCards from "../ForcastCards";

const WeatherView = observer(() => {
  const weatherStore = useStore("weatherStore");

  useEffect(() => {
    weatherStore.getWeatherByCurrentPosition();
  }, []);

  return (
    <Box>
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
