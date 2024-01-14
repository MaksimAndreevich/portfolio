import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import moment from "moment";
import Image from "next/image";

interface IForcastCardProps {
  dt: number;
  dtText: string;
  temp: number;
  weather: {
    description: string;
    main: string;
    icon?: string;
  };
  windSpeed: number;
}

export default function ForcastCard({
  dt,
  dtText,
  temp,
  weather,
  windSpeed,
}: IForcastCardProps) {
  return (
    <Box p={1}>
      <Card sx={{ minWidth: 175, py: 1 }} elevation={3}>
        <CardContent sx={{ p: 3 }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {moment(dtText).format("MMM Do, HH:mm")}
          </Typography>
          <Typography variant="h5" component="div">
            {weather.main}
          </Typography>
          <Image
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt="weather icon"
            width={56}
            height={56}
          />

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {weather.description}
          </Typography>
          <Typography variant="body2">
            {Math.round(temp)} °С
            <br />
          </Typography>
          <Typography variant="body2">
            wind speed {Math.round(windSpeed)} m/s
            <br />
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
