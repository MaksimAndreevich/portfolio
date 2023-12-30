import { Box, Chip, Divider, Stack, Typography } from "@mui/material";
import skills from "./skills";

const AboutMeSkills = () => {
  return (
    <Box pt={1}>
      <Typography color={"steelblue"}>Skills</Typography>

      <Divider />

      <Stack useFlexGap flexWrap="wrap" direction="row" spacing={1} pt={1} sx={{ maxWidth: "100%" }}>
        {skills.map((s) => (
          <Chip label={s} />
        ))}
      </Stack>
    </Box>
  );
};

export default AboutMeSkills;
