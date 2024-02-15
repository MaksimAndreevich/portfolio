"use client";

import { Typography } from "@mui/material";
import { IUser } from "../../lib/stores/interfaces/accountStore.interface";
import { useStore } from "../../lib/hooks/useStore";

const Profile = ({ user }: { user: IUser }) => {
  const accountStore = useStore("accountStore");

  accountStore.setUser(user);

  return (
    <>
      <Typography variant="h5" align="center">
        Hello {accountStore.user?.name}, your profile will be soon...
      </Typography>
      <Typography variant="h5" align="center">
        In the meantime, you can visit my other home projects.
      </Typography>
    </>
  );
};

export default Profile;
