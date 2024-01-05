import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useStore } from "../../lib/hooks/useStore";

const MarketProductCounerBtn = ({ count, id }: { count: number; id: number }) => {
  const marketStore = useStore("marketStore");

  const handleDec = () => {
    marketStore.setCountOfProduct(id, --count);
  };
  const handleInc = () => {
    marketStore.setCountOfProduct(id, ++count);
  };

  const handleAddToCart = () => {
    marketStore.setCountOfProduct(id, 1);
  };

  return count ? (
    <Box sx={{ display: "flex", alignItems: "center", pr: 1 }}>
      <Box pr={1}>
        <IconButton aria-label="dec" color="primary" onClick={handleDec} size="small">
          <RemoveIcon />
        </IconButton>
      </Box>

      <Typography>{count}</Typography>

      <Box pl={1}>
        <IconButton aria-label="inc" color="primary" onClick={handleInc} disabled={count === 10} size="small">
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  ) : (
    <Button onClick={handleAddToCart}>Add To Cart</Button>
  );
};

export default MarketProductCounerBtn;
