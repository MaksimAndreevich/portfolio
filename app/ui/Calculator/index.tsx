"use client";
import { Box, Paper } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useStore } from "../../lib/hooks/useStore";
import AutoScaleTextField from "../AutoScaleTextField";
import CalcButtons from "../CalcButtons";

const Calculator = observer(() => {
  const calcStore = useStore("calcStore");

  const [value, setValue] = useState("");

  return (
    <Box sx={{ height: "auto", width: "100%" }}>
      <Paper elevation={24} sx={{ width: { sx: "100%", sm: "70%" }, height: { sx: "100%", sm: "70%" }, m: "auto", minWidth: 328 }}>
        <AutoScaleTextField />

        {/* <TextField
          value={calcStore.input}
          id="input calc"
          fullWidth
          variant="filled"
          InputProps={{ readOnly: true, disableUnderline: true }}
          inputProps={{
            sx: {
              fontSize: "6em",
              textAlign: "right",
            },
          }}
        /> */}

        <CalcButtons />
      </Paper>
    </Box>
  );
});

export default Calculator;
