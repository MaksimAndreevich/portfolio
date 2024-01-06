"use client";

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Box, Button, Grid, IconButton, Rating, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useStore } from "../../lib/hooks/useStore";
import routes from "../../lib/routes";
import MarketProductCounerBtn from "../MarketProductCounerBtn";

const MarketProductInfo = observer(({ id }: { id: string }) => {
  const marketStore = useStore("marketStore");
  const router = useRouter();

  const product = marketStore.getProduct(+id);

  if (!product)
    return (
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "50%", justifyContent: "center" }}>
        <Typography variant="h6" textAlign={"center"}>
          Sorry product not found in our catalog...
        </Typography>

        <Button size="small" variant="text" endIcon={<KeyboardReturnIcon />} onClick={() => router.push(routes.market)}>
          Return to cataloge
        </Button>
      </Box>
    );

  return (
    <Grid container spacing={1}>
      <Grid item md={"auto"} xs={12}>
        <Box pt={1} width={"100%"} textAlign={"center"}>
          <Image unoptimized src={product.image} width={228} height={297} alt="product image" />
        </Box>
      </Grid>

      <Grid item xs>
        <Typography variant="h4">{product.title}</Typography>
        <Typography pt={1}>{product.description}</Typography>
        <Typography variant="subtitle2">Category: {product.category}</Typography>

        <Box sx={{ display: "flex", alignItems: "center", pt: 1 }}>
          <Rating value={product.rating.rate} readOnly precision={0.1} size="large" />
          <Typography sx={{ alignSelf: "flex-end", pl: 1 }} color={"steelblue"}>{`based on ${product.rating.count} reviews`}</Typography>
        </Box>
        <Typography variant="h4" py={1}>
          {product.price}$
        </Typography>

        <MarketProductCounerBtn count={product.count || 0} id={product.id} />
      </Grid>

      <Grid item xs={12} pt={1}>
        <IconButton color="primary" onClick={() => router.back()}>
          <KeyboardReturnIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
});

export default MarketProductInfo;
