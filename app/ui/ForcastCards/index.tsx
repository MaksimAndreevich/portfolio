import { Box } from "@mui/material";
import ForcastCard from "../ForcastCard";
import { useStore } from "../../lib/hooks/useStore";
import { observer } from "mobx-react-lite";

const ForcastCards = observer(() => {
  const weatherStore = useStore("weatherStore");

  return (
    <Box display={"flex"} sx={{ overflowX: "auto" }} height={"100%"}>
      {weatherStore.forcast?.list?.map((w) => {
        return (
          <ForcastCard
            dt={w.dt}
            dtText={w.dt_txt}
            temp={w.main.temp}
            weather={{
              description: w.weather[0].description,
              main: w.weather[0].main,
              icon: w.weather[0].icon,
            }}
            windSpeed={w.wind.speed}
          />
        );
      })}
    </Box>
  );
});

export default ForcastCards;
