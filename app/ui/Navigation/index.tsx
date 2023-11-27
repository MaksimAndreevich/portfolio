"use client";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { observer } from "mobx-react-lite";
import { useStore } from "../../lib/hooks/useStore";
import { DRAWER_WIDTH } from "../constants";
import sideBarContent from "../sideBarContent";

const Navigation = observer(() => {
  const store = useStore("mainStore");

  const handleDrawerToggle = () => {
    store.toggleMobileOpen();
  };

  return (
    <Box
      component="nav"
      sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={store.mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
          },
        }}
      >
        {sideBarContent}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
          },
        }}
        open
      >
        {sideBarContent}
      </Drawer>
    </Box>
  );
});

export default Navigation;
