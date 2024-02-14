"use client";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { signOutAction } from "../../lib/services/serverActions";
import { IUser } from "../../lib/stores/interfaces/accountStore.interface";

const Profile = ({ user }: { user: IUser }) => {
  const handleSignOut = () => {
    signOutAction();
  };

  const { name, email, id } = user;

  return (
    <Box>
      PROFILE
      <Typography>
        hello {name}, {email}
      </Typography>
      <Button onClick={handleSignOut}>signout</Button>
    </Box>
  );
};

export default Profile;
