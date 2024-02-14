"use client";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Link as MuiLink,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useFormState } from "react-dom";
import { login } from "../../lib/helpers";
import { useStore } from "../../lib/hooks/useStore";
import routes from "../../lib/routes";
import { authenticate } from "../../lib/services/serverActions";
import FromLoadingButton from "../FormLoadingButton";
import { useFormik } from "formik";
import validationRegisterSchema from "./validationScheme";

export default function accountRegisterForm() {
  const { enqueueSnackbar } = useSnackbar();
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  const accountStore = useStore("accountStore");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // const handleRegister = async () => {
  //   const newUser = {
  //     name: name,
  //     email: email,
  //     password: password,
  //   };

  //   const isRegisterSuccess = await accountStore.register(newUser);
  //   (isRegisterSuccess === true && login(dispatch, newUser)) || enqueueSnackbar(isRegisterSuccess, { variant: "error" });
  // };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationRegisterSchema,
    onSubmit: async ({ name, email, password }) => {
      const newUser = { name, email, password };
      const isRegisterSuccess = await accountStore.register(newUser);

      (isRegisterSuccess === true && login(dispatch, newUser)) || enqueueSnackbar(isRegisterSuccess, { variant: "error" });
    },
  });

  return (
    <Box
      component={"form"}
      action={() => formik.handleSubmit()}
      sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
    >
      <Typography variant="h6">Please register</Typography>

      <TextField
        value={formik.values.name}
        onChange={formik.handleChange}
        id="name"
        type="text"
        name="name"
        placeholder="Enter your name"
        autoComplete="off"
        required
        variant="outlined"
        sx={{ width: 240, pb: 1 }}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        label={"Name"}
        InputLabelProps={{ required: false }}
      />

      <TextField
        value={formik.values.email}
        onChange={formik.handleChange}
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        variant="outlined"
        sx={{ width: 240 }}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        label={"Email"}
        InputLabelProps={{ required: false }}
      />

      <FormControl sx={{ my: 1, width: 240 }}>
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          value={formik.values.password}
          onChange={formik.handleChange}
          id="password"
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Make up a password"
          required
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword(!showPassword)} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label={"Password"}
        />
        {formik.touched.password && Boolean(formik.errors.password) && <FormHelperText error>{formik.errors.password}</FormHelperText>}
      </FormControl>

      <FormControl sx={{ mb: 1, width: 240 }}>
        <InputLabel>Confirm Password</InputLabel>
        <OutlinedInput
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          id="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          required
          disabled={!formik.values.password}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label={"Confirm Password"}
        />
        {formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword) && <FormHelperText error>{formik.errors.confirmPassword}</FormHelperText>}
      </FormControl>

      <FromLoadingButton title="Register" disabled={!formik.dirty && formik.isValid} />

      <Box sx={{ display: "flex", mt: 1 }}>
        <Typography>If you have an accout you can</Typography>
        <Link href={routes.accountLogin} passHref legacyBehavior>
          <MuiLink pl={0.5}>login</MuiLink>
        </Link>
      </Box>
    </Box>
  );
}
