"use clien";

import LoadingButton from "@mui/lab/LoadingButton";
import { SxProps } from "@mui/material";
import { useFormStatus } from "react-dom";

const FormLoadingButton = ({ title, disabled }: { title: string; disabled?: boolean }) => {
  const { pending } = useFormStatus();

  return (
    <LoadingButton fullWidth disabled={disabled} loading={pending} type="submit" variant="contained" sx={{ mt: 1 }}>
      {title}
    </LoadingButton>
  );
};

export default FormLoadingButton;
