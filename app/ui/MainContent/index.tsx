"use client";

import { Box, Paper, Toolbar } from "@mui/material";
import { DRAWER_WIDTH } from "../constants";
import { useStore } from "../../lib/hooks/useStore";
import { useEffect } from "react";

const MainContent = ({ children }: { children: React.ReactNode }) => {
  const store = useStore("mainStore");

  useEffect(() => {
    store.setThemeFromLocalStorage();
  }, []);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Toolbar />
      <Paper sx={{ p: 3, borderRadius: 0, flexGrow: 1, overflow: "auto" }}>{children}</Paper>
    </Box>
  );
};

export default MainContent;
