"use client";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import NotListedLocationSharpIcon from "@mui/icons-material/NotListedLocationSharp";
import { Box } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { observer } from "mobx-react-lite";
import { usePathname } from "next/navigation";
import { getDescriptionAboutThisProject, getPageName } from "../../lib/helpers";
import { useStore } from "../../lib/hooks/useStore";
import { DRAWER_WIDTH } from "../constants";

const AppBar = observer(() => {
  const store = useStore("mainStore");
  const path = usePathname();

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
        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" noWrap>
            {getPageName(path.split("/")[1])}
          </Typography>

          <Box pl={1}>
            <Tooltip disableFocusListener title={getDescriptionAboutThisProject(getPageName(path.split("/")[1]))}>
              <NotListedLocationSharpIcon fontSize="small" />
            </Tooltip>
          </Box>
        </Box>

        <IconButton aria-label="toggle theme" onClick={handleToggleTheme}>
          {store.modeTheme === "dark" ? <DarkModeIcon /> : <LightModeIcon sx={{ color: "white" }} />}
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
});

export default AppBar;
