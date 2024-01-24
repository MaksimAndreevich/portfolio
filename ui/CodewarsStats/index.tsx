import { Box, Divider, Grid, Typography } from "@mui/material";
import { ICodewardStats } from "../../lib/stores/interfaces/mainStore.interface";

const CodewarsStats = ({ stats }: { stats: ICodewardStats }) => {
  const {
    honor,
    leaderboardPosition,
    ranks: { overall },
    codeChallenges: { totalCompleted },
  } = stats;

  return (
    <>
      <Typography color={"steelblue"}>Codewars Stats</Typography>
      <Divider />
      <Grid container sx={{ height: "100%", width: "100%" }}>
        <Grid item md={6} xs={12}>
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

        <Grid item md={6} xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              //   color: overall.color,
            }}
          >
            {overall.name}
          </Typography>
        </Grid>

        <Divider />
      </Grid>
    </>
  );
};

export default CodewarsStats;
