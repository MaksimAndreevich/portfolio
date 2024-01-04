"use client";

import { Box, Tab, Tabs } from "@mui/material";
import { IProduct } from "../../lib/stores/interfaces/marketStore.interface";
import { useStore } from "../../lib/hooks/useStore";
import { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import TabPanel from "../TabPanel";
import MarketCatalog from "../MarketCatalog";
import MarketCart from "../MarketCart";

const Market = ({ products }: { products: Array<IProduct> }) => {
  const marketStore = useStore("marketStore");
  const [tab, setTab] = useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  useEffect(() => {
    marketStore.setProducts(products);
  }, []);

  return (
    <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <Box flexGrow={1} overflow={"auto"} maxHeight={"100%"}>
        <TabPanel value={tab} index={0}>
          <MarketCatalog />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <MarketCart />
        </TabPanel>
      </Box>

      <Box>
        <Tabs value={tab} onChange={handleChangeTab} centered variant="fullWidth">
          <Tab icon={<LocalMallRoundedIcon />} label="Catalog" />
          <Tab icon={<ShoppingCartIcon />} label="Cart" />
        </Tabs>
      </Box>
    </Box>
  );
};

export default Market;
