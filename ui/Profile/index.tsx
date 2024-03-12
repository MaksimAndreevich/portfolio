"use client";

import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import { IUser } from "../../lib/stores/interfaces/accountStore.interface";
import { useStore } from "../../lib/hooks/useStore";
import { useRouter } from "next/navigation";
import Todo from "../Todo";

const Profile = ({ user }: { user: IUser }) => {
  const accountStore = useStore("accountStore");

  accountStore.setUser(user);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box sx={{ display: "flex" }}>
        <Avatar variant="square" alt={accountStore.user?.name} sx={{ width: 96, height: 96 }} />

        <Box sx={{ pl: 2 }}>
          <Typography variant="h5">{accountStore.user?.name}</Typography>
          <Typography variant="h5">{accountStore.user?.email}</Typography>
        </Box>
      </Box>

      <Box flexGrow={1} pt={1}>
        <Paper elevation={16} sx={{ height: "100%", p: 1 }}>
          <Todo />
        </Paper>
      </Box>
    </Box>
  );
};

export default Profile;
