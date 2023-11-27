"use client";
import { Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../lib/hooks/useStore";

const Calculator = observer(() => {
  const calcStore = useStore("calcStore");

  return <Box sx={{ height: 300, width: 300 }}>CALC</Box>;
});

export default Calculator;
