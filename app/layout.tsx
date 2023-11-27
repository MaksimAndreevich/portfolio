"use client";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
// import type { Metadata } from "next";
import * as React from "react";
import { StoresProvider, stores } from "./lib/stores";
import AppBar from "./ui/AppBar";
import Navigation from "./ui/Navigation";
import ThemeRegistry from "./ui/ThemeRegistry";
import { drawerWidth } from "./ui/constants";
import "./ui/global.css";

// export const metadata: Metadata = {
//   title: "Portfolio",
//   description: "About Maxim Efimov",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoresProvider value={stores}>
          <ThemeRegistry options={{ key: "mui" }}>
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <AppBar />

              <Navigation />

              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  p: 3,
                  width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
              >
                <Toolbar />
                {children}
              </Box>
            </Box>
          </ThemeRegistry>
        </StoresProvider>
      </body>
    </html>
  );
}
