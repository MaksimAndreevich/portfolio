import { Box, Typography } from "@mui/material";
import ProjectsCards from "../ProjectsCards";

const AboutThisApp = () => {
  return (
    <Box overflow={"auto"}>
      <Typography>
        The website is built on Next.js version 14, with MUI serving as the visual foundation. MobX is employed as the data store, and PostgreSQL acts as the
        database.
      </Typography>

      <Typography>
        This website showcases a small collection of my pet projects gathered in one place. I would be delighted if you take a moment to explore each of them. I
        would be even more grateful if you discover any bugs and leave them for me in the issues section. Your insights into the projects and feedback are
        valuable to me.
      </Typography>

      <ProjectsCards />
    </Box>
  );
};

export default AboutThisApp;
