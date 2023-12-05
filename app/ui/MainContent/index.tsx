import { Box, Paper, Toolbar } from "@mui/material";
import { DRAWER_WIDTH } from "../constants";

const MainContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Toolbar />
      <Paper sx={{ p: 3, borderRadius: 0, flexGrow: 1, overflow: "hidden" }}>
        {children}
      </Paper>
    </Box>
  );
};

export default MainContent;
