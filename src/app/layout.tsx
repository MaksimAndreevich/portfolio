import type { Metadata } from "next";
import "../globals.css";
import ThemeRegistry from "../components/ThemeRegistry";
import Dashboard from "@/components/Dashboard";
import { Box } from "@mui/material";

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
          {
            <Box>
              <Dashboard />
              {children}
            </Box>
          }
        </ThemeRegistry>
      </body>
    </html>
  );
}
