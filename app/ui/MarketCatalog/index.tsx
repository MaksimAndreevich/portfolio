import { Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import ProductCard from "../MarketProductCard";
import { useStore } from "../../lib/hooks/useStore";
import { useEffect } from "react";

const MarketCatalog = observer(() => {
  const marketStore = useStore("marketStore");

  useEffect(() => {
    console.log(marketStore.products);
  }, []);

  return (
    <Box>
      <ProductCard />
      {/* <ProductCard />
      <ProductCard /> */}
      <ProductCard />
    </Box>
  );
});

export default MarketCatalog;
