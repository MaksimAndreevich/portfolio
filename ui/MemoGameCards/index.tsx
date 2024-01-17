import { Box, Button, Grid, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../lib/hooks/useStore";
import FlipCard from "../FlipCard";

const MemoGameCards = observer(() => {
  const memoStore = useStore("memoStore");

  return (
    <Grid
      container
      spacing={1}
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100%", width: "100%", maxHeight: "100%", m: "0 auto", pr: 1, pb: 1 }}
    >
      <Grid item xs={12} alignSelf={"start"} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box>
          {" "}
          <Button variant="outlined" size="small">
            New Game
          </Button>
          <Button variant="outlined" size="small" sx={{ ml: 1 }} onClick={() => memoStore.setCurrentDifficult(null)}>
            Change Difficult
          </Button>
        </Box>

        <Typography color={"primary"} sx={{ ml: 1, fontWeight: 500, fontSize: 14, pr: 2 }}>
          SCORE: {memoStore.score}
        </Typography>
      </Grid>

      {memoStore.cards.map((card, i) => (
        <Grid item key={i} xs={3} sx={{ height: `${100 / (memoStore.cards.length / 4)}%` }}>
          <FlipCard />
        </Grid>
      ))}
    </Grid>
  );
});

export default MemoGameCards;
