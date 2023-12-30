import { Box, Divider, Typography } from "@mui/material";

const AboutMeEducation = () => {
  return (
    <Box pt={1}>
      <Typography color={"steelblue"}>Education</Typography>

      <Divider />

      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Typography variant="h5">{'University of World Civilizations (ANO VO "UMC")'}</Typography>
        <Typography variant="subtitle1" pr={1}>
          2016
        </Typography>
      </Box>

      <Typography>Jurisprudence, Civil Law Profile</Typography>
    </Box>
  );
};

export default AboutMeEducation;
