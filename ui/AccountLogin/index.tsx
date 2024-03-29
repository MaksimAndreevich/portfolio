"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, Link as MuiLink, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { createFormData } from "../../lib/helpers";
import routes from "../../lib/routes";
import AccountLoginProvidersButtons from "../AccountLoginProvidersButtons";
import validationLoginSchema from "./validationScheme";
import { useFormState } from "react-dom";
import { authenticate } from "../../lib/services/serverActions";
import FromLoadingButton from "../FormLoadingButton";

const AccountLogin = () => {
  const [errorMessage, signInAction] = useFormState(authenticate, undefined);

  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationLoginSchema,
    onSubmit: async (values) => {
      const formData = createFormData(values);
      await signInAction(formData);
    },
  });

  return (
    <Box
      action={() => formik.handleSubmit()}
      component={"form"}
      sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: 320, m: "auto" }}
    >
      <Typography variant="h6">Please login to continue</Typography>

      <TextField
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email address"
        required
        variant="outlined"
        label={"Email"}
        InputLabelProps={{ required: false }}
        fullWidth
      />

      <TextField
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        id="password"
        name="password"
        placeholder="Enter password"
        required
        sx={{ my: 1 }}
        type={showPassword ? "text" : "password"}
        label={"Password"}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword(!showPassword)} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{ required: false }}
      />
      {!!errorMessage && <Typography color={"error"}>{errorMessage}</Typography>}

      <AccountLoginProvidersButtons />

      <FromLoadingButton title={"Login"} disabled={!formik.dirty && formik.isValid} />

      <Typography sx={{ mt: 1, whiteSpace: "nowrap" }}>
        If you don`t have an account you can
        <Link href={routes.accountRegister} passHref legacyBehavior>
          <MuiLink pl={0.5}>register</MuiLink>
        </Link>
      </Typography>
    </Box>
  );
};
export default AccountLogin;
