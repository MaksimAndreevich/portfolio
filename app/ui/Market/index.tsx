"use client";

import { Box, Tab, Tabs } from "@mui/material";
import { IProduct } from "../../lib/stores/interfaces/marketStore.interface";
import { useStore } from "../../lib/hooks/useStore";
import { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import TabPanel from "../TabPanel";

const Market = ({ products }: { products: Array<IProduct> }) => {
  const marketStore = useStore("marketStore");
  const [tab, setTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  useEffect(() => {
    marketStore.setProducts(products);
  }, []);

  return (
    <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <TabPanel value={tab} index={0}>
        Item One
      </TabPanel>

      <TabPanel value={tab} index={1}>
        Item Two
      </TabPanel>

      <Tabs value={tab} onChange={handleChange} centered variant="fullWidth">
        <Tab icon={<LocalMallRoundedIcon />} label="Catalog" />
        <Tab icon={<ShoppingCartIcon />} label="Cart" />
      </Tabs>
    </Box>
  );
};

export default Market;
