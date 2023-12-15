"use client";

import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../lib/hooks/useStore";
import moment from "moment";
import Image from "next/image";

const WeatherCurrentInfo = observer(() => {
  const weatherStore = useStore("weatherStore");

  return (
    <>
      <Box pr={2} pt={1}>
        <Typography variant="h3">
          {weatherStore.weatherData?.name}, {weatherStore.weatherData?.sys.country}
        </Typography>

        <Typography pb={1}>{moment().format("MMMM Do YYYY, HH:mm:ss")}</Typography>

        <Box display={"flex"} alignItems={"center"}>
          <Typography variant="h5">{weatherStore.weatherData?.weather[0].main}</Typography>
          <Image src={`https://openweathermap.org/img/wn/${weatherStore.weatherData?.weather[0].icon}@2x.png`} alt="weather icon" width={72} height={72} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",

          py: 2,
        }}
      >
        <Box pr={2}>
          {weatherStore.weatherData?.main.temp && <Typography>CURRENT: {Math.round(weatherStore.weatherData?.main.temp)}°С</Typography>}
          {weatherStore.weatherData?.main.feels_like && <Typography>{`FEELS LIKE: ${Math.round(weatherStore.weatherData?.main.feels_like)}°С`}</Typography>}

          <Typography>{`PRESSURE: ${weatherStore.weatherData?.main.pressure}`}</Typography>
        </Box>
        <Box>
          {weatherStore.weatherData?.main.temp_max && <Typography>HIGH: {Math.round(weatherStore.weatherData?.main.temp_max)}°С</Typography>}
          {weatherStore.weatherData?.main.temp_min && <Typography>LOW: {Math.round(weatherStore.weatherData?.main.temp_min)}°С</Typography>}
          <Typography>HUMIDITY: {weatherStore.weatherData?.main.humidity}%</Typography>
        </Box>
      </Box>
    </>
  );
});

export default WeatherCurrentInfo;
