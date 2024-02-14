import { SxProps } from "@mui/material";
import TextField from "@mui/material/TextField";
import { ChangeEvent, HTMLInputTypeAttribute } from "react";

interface IFormInputProps {
  placeholder: string;
  name: string;
  value: string;
  label: string;
  onChange: (e: ChangeEvent<any>) => void;
  error?: boolean;
  helperText: string | false | undefined;
  sxStyles?: SxProps;
  type?: HTMLInputTypeAttribute;
  id?: string;
}

const FormInput = ({ value, onChange, error, helperText, sxStyles, placeholder, name, label, type = "text", id = name }: IFormInputProps) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete="off"
      required
      variant="outlined"
      sx={{ ...sxStyles }}
      error={error}
      helperText={helperText}
      label={label}
      InputLabelProps={{ required: false }}
      fullWidth
    />
  );
};

export default FormInput;
