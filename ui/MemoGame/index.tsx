import { Grid } from "@mui/material";
import FlipCard from "../FlipCard";

const mock = Array.from(Array(16)); //16 24 32

const MemoGame = () => {
  return (
    <Grid
      container
      spacing={1}
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100%", width: "100%", maxHeight: "100%", m: "0 auto", pr: 1, pb: 1 }}
    >
      {mock.map((card, i) => (
        <Grid item key={i} xs={3} sx={{ height: `${100 / (mock.length / 4)}%` }}>
          <FlipCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default MemoGame;
