import { Box, Divider, Grid, Typography } from "@mui/material";
import { ILeetcodeStats } from "../../lib/stores/interfaces/mainStore.interface";
import StatsChartPie from "../StatsChartPie";

const LeetCodeStats = ({ stats }: { stats: ILeetcodeStats }) => {
  const { totalEasy, totalHard, ranking, totalSolved, acceptanceRate, totalQuestions, easySolved, mediumSolved, totalMedium, hardSolved } = stats;

  const dataPie = [
    { id: 0, value: easySolved, label: "Easy" },
    { id: 1, value: mediumSolved, label: "Medium" },
    { id: 2, value: hardSolved, label: "Hard" },
  ];

  return (
    <>
      <Typography color={"steelblue"}>LeetCode Stats</Typography>
      <Divider />
      <Grid spacing={1} container sx={{ height: "100%", width: "100%" }}>
        <Grid item md={6} xs={12}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography>Ranking: </Typography>
            <Typography variant="h6">{ranking}</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography>Total Questions Solved:: </Typography>
            <Typography variant="h6">
              {totalSolved} / {totalQuestions}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography>Easy Questions Solved: </Typography>
            <Typography variant="h6">
              {easySolved} / {totalEasy}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography>Medium Questions Solved: </Typography>
            <Typography variant="h6">
              {mediumSolved} / {totalMedium}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography>Hard Questions Solved: </Typography>
            <Typography variant="h6">
              {hardSolved} / {totalHard}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography>Acceptance Rate: </Typography>
            <Typography variant="h6">{acceptanceRate}%</Typography>
          </Box>
        </Grid>

        <Grid item md={6} xs={12}>
          <StatsChartPie data={dataPie} />
        </Grid>

        <Divider />
      </Grid>
    </>
  );
};

export default LeetCodeStats;
