import * as yup from "yup";

const validationRegisterSchema = yup.object({
  name: yup.string().min(3, "Must be at least 3 characters long").max(16, "Must be no more than 16 characters").required("Name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup.string().min(6, "Password should be of minimum 6 characters length").required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords must match"),
});

export default validationRegisterSchema;
