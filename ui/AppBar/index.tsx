"use client";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { observer } from "mobx-react-lite";
import { useStore } from "../../lib/hooks/useStore";
import AppBarCreateIssueBtn from "../AppBarCreateIssueBtn";
import { DRAWER_WIDTH } from "../constants";
import AppBarAccountMenu from "../AppBarAccountMenu";

const AppBar = observer(() => {
  const store = useStore("mainStore");

  const handleDrawerToggle = () => {
    store.toggleMobileOpen();
  };

  const handleToggleTheme = () => {
    store.toggleModeTheme();
  };

  return (
    <MuiAppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        ml: { sm: `${DRAWER_WIDTH}px` },
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ flexGrow: 1 }}>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
        </Box>

        <Box>
          <AppBarCreateIssueBtn />
          <IconButton aria-label="toggle theme" onClick={handleToggleTheme}>
            {store.modeTheme === "dark" ? <DarkModeIcon /> : <LightModeIcon sx={{ color: "white" }} />}
          </IconButton>
          <AppBarAccountMenu />
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
});

export default AppBar;
