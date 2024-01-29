"use client";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, IconButton, InputAdornment, Link as MuiLink, OutlinedInput, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import routes from "../../../lib/routes";

export default function RegisterAccountPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSetEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSetRePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRePassword(e.target.value);
  };

  const handleRegister = (formData: FormData) => {
    formData.forEach((i) => console.log(i));
  };

  return (
    <Box
      component={"form"}
      action={handleRegister}
      sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
    >
      <Typography variant="h6">Please register</Typography>

      <TextField
        value={name}
        onChange={handleSetName}
        id="userName"
        // type="text"
        name="userName"
        placeholder="Enter your name"
        autoComplete="off"
        required
        variant="outlined"
        sx={{ width: 240, pb: 1 }}
      />

      <TextField
        value={email}
        onChange={handleSetEmail}
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        variant="outlined"
        sx={{ width: 240 }}
      />

      <OutlinedInput
        value={password}
        onChange={handleSetPassword}
        id="password"
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Enter password min lenght 6"
        required
        sx={{ mt: 1, width: 240 }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword(!showPassword)} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />

      <OutlinedInput
        value={rePassword}
        onChange={handleSetRePassword}
        id="rePassword"
        type={showRePassword ? "text" : "password"}
        name="rePassword"
        placeholder="Repeated password"
        required
        sx={{ mt: 1, width: 240 }}
        disabled={!password}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={() => setShowRePassword(!showRePassword)} edge="end">
              {showRePassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />

      <Button sx={{ mt: 1 }} type="submit" variant="contained">
        register
      </Button>

      <Box sx={{ display: "flex" }}>
        <Typography>If you have an accout you can</Typography>
        <Link href={routes.accountLogin} passHref legacyBehavior>
          <MuiLink pl={0.5}>login</MuiLink>
        </Link>
      </Box>
    </Box>
  );
}
