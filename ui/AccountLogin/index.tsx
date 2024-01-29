"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { Box, Button, IconButton, InputAdornment, Link as MuiLink, OutlinedInput, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import routes from "../../lib/routes";
import { authenticate } from "../../lib/services/serverActions";

const AccountLogin = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSetEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (payload: FormData) => {
    dispatch(payload);
  };

  useEffect(() => {
    console.log(errorMessage);
  }, [errorMessage]);

  //TODO: add formik

  return (
    <Box
      component={"form"}
      action={(payload) => handleSubmit(payload)}
      sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
    >
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

      <OutlinedInput
        value={password}
        onChange={handleSetPassword}
        id="password"
        name="password"
        placeholder="Enter password min lenght 6"
        required
        sx={{ mt: 1, width: 240 }}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword(!showPassword)} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {!!errorMessage && <Typography color={"error"}>{errorMessage}</Typography>}

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

      <Button type="submit" variant="contained" sx={{ mt: 1 }}>
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
