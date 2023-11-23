import { Box } from "@mui/material";
import type { Metadata } from "next";
import AppBar from "./ui/AppBar";
import ThemeRegistry from "./ui/ThemeRegistry";
import "./ui/global.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "About Maxim Efimov",
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
          <Box>
            <AppBar />
          </Box>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
