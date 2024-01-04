import { Box, Divider, Typography } from "@mui/material";
import workExperience from "./workExperience";
import { getTotalExperienceDate } from "../../lib/helpers";
import Link from "next/link";

const AboutMeWorkExperience = () => {
  return (
    <Box pt={1}>
      <Typography color={"steelblue"}>Work Experience</Typography>

      <Divider />
      {workExperience.map(({ jobName, jobLocation, link, careerEndAt, careerStartAt, position, aboutJob, myTasks, tasksRealizedByMe }) => {
        return (
          <Box pt={1} key={jobName + careerStartAt}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Typography variant="h5">{jobName}</Typography>
              <Typography variant="subtitle1">{getTotalExperienceDate(careerStartAt, careerEndAt)}</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body2">{jobLocation},</Typography>
              <Link href={link} passHref>
                <Typography variant="body2" pl={0.5}>
                  {link}
                </Typography>
              </Link>
            </Box>

            <Typography variant="h6">{position}</Typography>

            <Typography variant="body2" whiteSpace={"pre-wrap"}>
              <b>About Project: </b>
              {aboutJob}
            </Typography>

            <Typography variant="body2" whiteSpace={"pre-wrap"} pt={1}>
              <b>My Tasks:</b>
              {myTasks}
            </Typography>

            <Typography variant="body2" whiteSpace={"pre-wrap"} pt={1}>
              <b>Some Tasks Realized by Me:</b>
              {tasksRealizedByMe}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default AboutMeWorkExperience;
