"use client";

import { Box, Button, Typography } from "@mui/material";
import { signOutAction } from "../../lib/services/serverActions";
import { IUser } from "../../lib/stores/interfaces/accountStore.interface";
import { useStore } from "../../lib/hooks/useStore";

const Profile = ({ user }: { user: IUser }) => {
  const accountStore = useStore("accountStore");
  accountStore.setUser(user);

  return (
    <Box>
      PROFILE
      <Typography>hello {accountStore.user?.email},</Typography>
    </Box>
  );
};

export default Profile;
