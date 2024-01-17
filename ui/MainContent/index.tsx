"use client";

import { Box, Paper, Toolbar } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { useEffect } from "react";
import { useStore } from "../../lib/hooks/useStore";
import { DRAWER_WIDTH } from "../constants";

const MainContent = ({ children }: { children: React.ReactNode }) => {
  const store = useStore("mainStore");

  useEffect(() => {
    store.setThemeFromLocalStorage();
  }, []);

  return (
    <SnackbarProvider autoHideDuration={3000} anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
      <Box
        component="main"
        sx={{
          height: "100%",
          flexGrow: 1,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Toolbar />
        <Paper id="main-container" sx={{ pt: 1, px: 1, borderRadius: 0, flexGrow: 1, overflow: "auto", height: "100%", position: "relative" }}>
          {children}
        </Paper>
      </Box>
    </SnackbarProvider>
  );
};

export default MainContent;
