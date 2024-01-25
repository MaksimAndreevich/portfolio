import { Box, Divider, Grid, Typography } from "@mui/material";
import { ICodewarsStats } from "../../lib/stores/interfaces/mainStore.interface";
import StatsChartPie from "../StatsChartPie";
import { getLanguagesData } from "./getLanguagesData";

const CodewarsStats = ({ stats }: { stats: ICodewarsStats }) => {
  const {
    honor,
    leaderboardPosition,
    ranks: { overall, languages },
    codeChallenges: { totalCompleted },
  } = stats;

  const languagesData = getLanguagesData(languages);

  return (
    <>
      <Typography color={"steelblue"}>Codewars Stats</Typography>
      <Divider />
      <Grid container sx={{ height: "100%", width: "100%" }}>
        <Grid item md={6} xs={12}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography>Rank: </Typography>
            <Typography variant="h6">{overall.name}</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography>Honor: </Typography>
            <Typography variant="h6">{honor}</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography>Board Position: </Typography>
            <Typography variant="h6">{leaderboardPosition}</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography>Score: </Typography>
            <Typography variant="h6">{overall.score}</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography>Total Comleted Katas: </Typography>
            <Typography variant="h6">{totalCompleted}</Typography>
          </Box>
        </Grid>

        <Grid item md={6} xs={12}>
          {languagesData && <StatsChartPie data={languagesData} />}
        </Grid>

        <Divider />
      </Grid>
    </>
  );
};

export default CodewarsStats;
