import { Box, Divider, Grid, Typography } from "@mui/material";
import moment from "moment";
import AboutMePhoto from "../AboutMePhoto";

const AboutMeTitle = () => {
  return (
    <Grid container spacing={1}>
      <Grid item md={"auto"} xs={12}>
        <AboutMePhoto />
      </Grid>

      <Grid item xs>
        <Typography variant="h4">Efimov Maksim Andreevich</Typography>
        <Typography variant="subtitle1">Age: {moment().diff("1994-02-01", "years")} years</Typography>
        <Typography variant="subtitle1">Resides: Russia, Moscow region, Elektrostal city</Typography>

        <Typography color={"steelblue"} pt={1}>
          Desired position and salary
        </Typography>

        <Divider />
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography variant="h5">Front-end Developer</Typography>
          <Typography variant="h5">150 000 ₽</Typography>
        </Box>

        <Typography>Specializations:</Typography>
        <Typography pl={2}> - programmer, React Developer</Typography>

        <Typography>Employment:</Typography>
        <Typography pl={2}> - part-time employment, project work, internship</Typography>

        <Typography>Work schedule:</Typography>
        <Typography pl={2}> - shift schedule, flexible schedule, remote work</Typography>
      </Grid>
    </Grid>
  );
};

export default AboutMeTitle;
