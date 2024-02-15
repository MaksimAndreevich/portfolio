import { Settings, Logout, Login } from "@mui/icons-material";
import { Tooltip, IconButton, Avatar, Menu, MenuItem, Divider, ListItemIcon, Box } from "@mui/material";
import { useState } from "react";
import { useStore } from "../../lib/hooks/useStore";
import { useRouter } from "next/navigation";
import routes from "../../lib/routes";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const AppBarAccountMenu = () => {
  const router = useRouter();
  const accountStore = useStore("accountStore");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    accountStore.logout();
    handleClose();
  };

  return (
    <>
      <Tooltip title="Account">
        <IconButton
          onClick={handleOpenMenu}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }}>{accountStore.user?.name[0].toLocaleUpperCase() || "?"}</Avatar>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {!accountStore.user && (
          <MenuItem onClick={() => router.push(routes.accountLogin)}>
            <ListItemIcon>
              <Login fontSize="small" />
            </ListItemIcon>
            Login
          </MenuItem>
        )}
        {accountStore.user && (
          <Box>
            <MenuItem onClick={() => router.push(routes.accountProfile)}>
              <ListItemIcon>
                <AccountBoxIcon fontSize="small" />
              </ListItemIcon>
              Profile
            </MenuItem>

            {/* <MenuItem onClick={() => router.push(routes.todo)}>
              <ListItemIcon>
                <ListAltIcon fontSize="small" />
              </ListItemIcon>
              My Todo List
            </MenuItem> */}
            <Divider />
          </Box>
        )}

        <MenuItem disabled onClick={() => console.log("Open settings")}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>

        {accountStore.user && (
          <MenuItem onClick={handleSignOut}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        )}
      </Menu>
    </>
  );
};

export default AppBarAccountMenu;
