"use clien";

import LoadingButton from "@mui/lab/LoadingButton";
import { useEffect } from "react";
import { useFormStatus } from "react-dom";

const FromLoadingButton = ({ title, disabled }: { title: string; disabled?: boolean }) => {
  const { pending } = useFormStatus();

  return (
    <LoadingButton disabled={disabled} loading={pending} type="submit" variant="contained" sx={{ mt: 1 }}>
      {title}
    </LoadingButton>
  );
};

export default FromLoadingButton;
