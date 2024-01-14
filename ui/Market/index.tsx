"use client";

import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Box, Tab, Tabs } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useStore } from "../../lib/hooks/useStore";
import { IProduct } from "../../lib/stores/interfaces/marketStore.interface";
import MarketCart from "../MarketCart";
import MarketCatalog from "../MarketCatalog";
import TabPanel from "../TabPanel";

const Market = observer(({ products }: { products: Array<IProduct> }) => {
  const marketStore = useStore("marketStore");
  const [tab, setTab] = useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  useEffect(() => {
    !marketStore.products && bootstrap();
  }, []);

  const bootstrap = () => {
    marketStore.setProducts(products);
  };

  return (
    <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <Box flexGrow={1} overflow={"auto"} maxHeight={"100%"}>
        <TabPanel value={tab} index={0}>
          <MarketCatalog />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <MarketCart changeTabCallback={(e, tab) => handleChangeTab(e, tab)} />
        </TabPanel>
      </Box>

      <Box>
        <Tabs value={tab} onChange={handleChangeTab} centered variant="fullWidth">
          <Tab icon={<LocalMallRoundedIcon />} label="Catalog" />
          <Tab
            icon={
              <Badge color="primary" badgeContent={marketStore.totalProductsInCart}>
                <ShoppingCartIcon />
              </Badge>
            }
            label="Cart"
          />
        </Tabs>
      </Box>
    </Box>
  );
});

export default Market;
