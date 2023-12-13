import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import type { Metadata } from "next";
import * as React from "react";
import AppBar from "./ui/AppBar";
import MainContent from "./ui/MainContent";
import Navigation from "./ui/Navigation";
import ThemeRegistry from "./ui/ThemeRegistry";
import "./ui/global.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio site by Maxim Efimov",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
            <CssBaseline />
            <AppBar />

            <Navigation />

            <MainContent>{children}</MainContent>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
