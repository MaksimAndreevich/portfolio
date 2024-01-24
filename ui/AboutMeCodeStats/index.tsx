import { Box } from "@mui/material";
import { getCodewarsStats, getLeetcodeStats } from "../../lib/services/serverRequests";
import CodewarsStats from "../CodewarsStats";
import LeetCodeStats from "../LeetCodeStats";

const AboutMeCodeStats = async () => {
  const leetcodeStats = await getLeetcodeStats();
  const codewarsStats = await getCodewarsStats();

  return (
    <Box pt={1}>
      {leetcodeStats && <LeetCodeStats stats={leetcodeStats} />}
      {codewarsStats && <CodewarsStats stats={codewarsStats} />}
    </Box>
  );
};

export default AboutMeCodeStats;
