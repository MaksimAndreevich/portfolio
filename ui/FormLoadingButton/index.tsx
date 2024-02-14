"use clien";

import LoadingButton from "@mui/lab/LoadingButton";
import { useEffect } from "react";
import { useFormStatus } from "react-dom";

const FromLoadingButton = ({ title }: { title: string }) => {
  const { pending } = useFormStatus();

  return (
    <LoadingButton loading={pending} type="submit" variant="contained" sx={{ mt: 1 }}>
      {title}
    </LoadingButton>
  );
};

export default FromLoadingButton;
