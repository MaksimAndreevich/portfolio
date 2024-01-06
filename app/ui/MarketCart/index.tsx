import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Box, Button, Divider, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useStore } from "../../lib/hooks/useStore";
import MarketProductCounerBtn from "../MarketProductCounerBtn";

interface IMarketCartProps {
  changeTabCallback: (e: React.SyntheticEvent, tabIndex: number) => void;
}

const MarketCart = observer(({ changeTabCallback }: IMarketCartProps) => {
  const marketStore = useStore("marketStore");

  const handleDelete = (id: number) => {
    marketStore.setCountOfProduct(id, 0);
  };

  const handleOrder = (e: React.SyntheticEvent) => {
    marketStore.order();

    changeTabCallback(e, 0);
  };

  if (!marketStore.cart.length)
    return (
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <Typography variant="h5" pb={2}>
          {"Your shopping cart is empty :("}
        </Typography>
        <Button variant="contained" size="small" endIcon={<KeyboardReturnIcon />} onClick={(e) => changeTabCallback(e, 0)}>
          Go shopping
        </Button>
      </Box>
    );

  return (
    <Box height={"100%"}>
      <List>
        {marketStore.cart.map(({ price, image, count, id, title }) => {
          if (!count) return;

          return (
            <>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(id)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <Box pr={1}>
                  <Image src={image} width={96} height={72} alt="product image" />
                </Box>

                <ListItemText
                  primary={title}
                  secondary={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <MarketProductCounerBtn count={count} id={id} />
                      <Typography>Price: {Math.round(count * price)}$</Typography>
                    </Box>
                  }
                />
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>

      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="h5" pr={2}>
          Total amount: {marketStore.getTotalAmount()}$
        </Typography>
        <Button variant="contained" size="large" onClick={handleOrder}>
          Order Now
        </Button>
      </Box>
    </Box>
  );
});

export default MarketCart;
