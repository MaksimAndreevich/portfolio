"use client";
import { Box, Button } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../lib/hooks/useStore";

const Calculator = observer(() => {
  const calcStore = useStore("calcStore");

  return (
    <Box sx={{ height: 300, width: 300 }}>
      {calcStore.count}
      <Button onClick={calcStore.inc}>inc</Button>
      <Button onClick={calcStore.dec}>dec</Button>
    </Box>
  );
});

export default Calculator;
