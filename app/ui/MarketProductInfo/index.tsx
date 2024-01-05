"use client";

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Box, Button, Typography } from "@mui/material";
import { useStore } from "../../lib/hooks/useStore";

const MarketProductInfo = ({ id }: { id: string }) => {
  const marketStore = useStore("marketStore");

  const product = marketStore.getProduct(+id);

  if (!product)
    return (
      <>
        <Typography variant="h6" textAlign={"center"}>
          Sorry product not found in our catalog...
        </Typography>
        <Button size="small" variant="text" endIcon={<KeyboardReturnIcon />}>
          Return to cataloge
        </Button>
      </>
    );

  return <Box>{id}</Box>;
};

export default MarketProductInfo;
