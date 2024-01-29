"use client";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { signOutAction } from "../../lib/services/serverActions";

const Profile = () => {
  const handleSignOut = () => {
    signOutAction();
  };

  return (
    <Box>
      PROFILE
      <Link href={"https://next-auth.js.org/configuration/options"}> configure providers</Link>
      <Typography>https://next-auth.js.org/configuration/providers/credentials</Typography>
      <Button onClick={handleSignOut}>signout</Button>
    </Box>
  );
};

export default Profile;
