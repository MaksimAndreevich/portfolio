import { Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../lib/hooks/useStore";
import ProductCard from "../MarketProductCard";

const MarketCatalog = observer(() => {
  const marketStore = useStore("marketStore");

  return (
    <Grid container spacing={1} pb={1}>
      {marketStore.products?.map(({ id, title, price, image, rating, count }, i) => (
        <Grid item key={i} xs={12} sm={6} md={4}>
          <ProductCard id={id} title={title} price={price} imageUrl={image} rating={rating.rate} count={count || 0} />
        </Grid>
      ))}
    </Grid>
  );
});

export default MarketCatalog;
