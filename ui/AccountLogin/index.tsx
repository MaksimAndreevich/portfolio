"use client";
import { Box, Button, Link as MuiLink, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import routes from "../../lib/routes";
import { authenticate } from "../../lib/services/serverActions";

const AccountLogin = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const { pending } = useFormStatus();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSetEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {}, [errorMessage]);

  //TODO: add formik

  return (
    <Box component={"form"} action={dispatch} sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <Typography variant="h6">Please login to continue</Typography>

      <TextField
        value={email}
        onChange={handleSetEmail}
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email address"
        required
        variant="outlined"
        sx={{ width: 240 }}
      />

      <TextField
        value={password}
        onChange={handleSetPassword}
        id="password"
        type="password"
        name="password"
        placeholder="Enter password min lenght 6"
        required
        variant="outlined"
        sx={{ pt: 1, width: 240 }}
      />

      <Button type="submit" variant="contained" disabled={pending} sx={{ mt: 1 }}>
        login
      </Button>

      <Box sx={{ display: "flex" }}>
        <Typography>If you don`t have an account you can</Typography>
        <Link href={routes.accountRegister} passHref legacyBehavior>
          <MuiLink pl={0.5}>register</MuiLink>
        </Link>
      </Box>
    </Box>
  );
};
export default AccountLogin;
