import { Box, Divider, Typography } from "@mui/material";
import AboutMeEducation from "../AboutMeEducation";
import AboutMeSkills from "../AboutMeSkills";
import AboutMeTitle from "../AboutMeTitle";
import AboutMeWorkExperience from "../AboutMeWorkExperience";

const AboutMe = () => {
  return (
    <Box>
      <AboutMeTitle />

      <AboutMeWorkExperience />

      <AboutMeEducation />

      <AboutMeSkills />

      <Typography color={"steelblue"} pt={1}>
        About Me
      </Typography>
      <Divider />
      <Typography variant="body2" pt={1}>
        Hello, it's a pleasure to meet you! My main professional career is in the emergency services, where I am a contract worker providing assistance to
        people in emergency situations. Through this work I have developed a number of valuable skills such as teamwork, flexibility, versatility, the ability
        to cope effectively and self-learning.
      </Typography>
      <Typography variant="body2">
        I am currently unable to change my current employment position due to contractual obligations. However, I believe that my main job, which only takes up
        two days a week, is not an obstacle to fully dedicate myself to my passion - programming. I dedicate all my free time to learning React and developing.
      </Typography>
      <Typography variant="body2">
        I am fascinated by the process itself as it gives me the opportunity to create and build. I have found my true passion in it. Striving to develop and
        reach new heights is an integral part of life for me. The challenges I face only fuel my interest and motivate me to move forward. I would be happy to
        share my unique skills and enthusiasm with your team!
      </Typography>
    </Box>
  );
};

export default AboutMe;
