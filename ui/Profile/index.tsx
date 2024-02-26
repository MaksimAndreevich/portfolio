"use client";

import { Typography } from "@mui/material";
import { IUser } from "../../lib/stores/interfaces/accountStore.interface";
import { useStore } from "../../lib/hooks/useStore";


const Profile = ({ user, fields }: { user: IUser, fields: any }) => {
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

      <Typography>
        ID: {accountStore.user?.id}
        <br />
        NAME: {accountStore.user?.name}
        <br />
        EMAIL: {accountStore.user?.email}
        <br />
        PASS: {accountStore.user?.password}
        <br />
      </Typography>

      <br /><br />

      {fields.map((field: any, index: any) => (
        <Typography key={index}>
          Column ID: {field.columnID}
          <br />
          Data Type ID: {field.dataTypeID}
          <br />
          Data Type Modifier: {field.dataTypeModifier}
          <br />
          Data Type Size: {field.dataTypeSize}
          <br />
          Format: {field.format}
          <br />
          <br /><br />
        </Typography>

      ))}
    </>
  );
};

export default Profile;