import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { Box, IconButton } from "@mui/material";

const AccountLoginProvidersButtons = () => {
  return (
    <Box display={"flex"} pt={1}>
      <IconButton disabled sx={{ pr: 1 }}>
        <GitHubIcon />
      </IconButton>
      <IconButton disabled sx={{ pr: 1 }}>
        <GoogleIcon />
      </IconButton>
      <IconButton disabled>
        <AlternateEmailIcon />
      </IconButton>
    </Box>
  );
};

export default AccountLoginProvidersButtons;
