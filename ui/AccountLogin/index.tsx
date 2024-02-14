"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, IconButton, InputAdornment, Link as MuiLink, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { createFormData } from "../../lib/helpers";
import routes from "../../lib/routes";
import { signInAction } from "../../lib/services/serverActions";
import AccountLoginProvidersButtons from "../AccountLoginProvidersButtons";
import validationLoginSchema from "./validationScheme";
import LoadingButton from "@mui/lab/LoadingButton";

const AccountLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationLoginSchema,
    onSubmit: async (values) => {
      formik.setSubmitting(true);
      const formData = createFormData(values);
      await signInAction("credentials", formData);
      formik.setSubmitting(false);
    },
  });

  return (
    <Box
      onSubmit={formik.handleSubmit}
      component={"form"}
      sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
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
        sx={{ width: 240 }}
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
        sx={{ mt: 1, width: 240 }}
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword(!showPassword)} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {/* {!!errorMessage && <Typography color={"error"}>{errorMessage}</Typography>} */}

      <AccountLoginProvidersButtons />

      {/*TODO: wait for response for loading button state */}

      <LoadingButton loading={formik.isSubmitting} type="submit" variant="contained" sx={{ mt: 1 }}>
        login
      </LoadingButton>

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
