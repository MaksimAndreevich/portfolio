import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Box, Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { useStore } from "../../lib/hooks/useStore";
import { CategoryEnum } from "../../lib/stores/interfaces/marketStore.interface";

const MarketCategoryFilterBtn = observer(() => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const marketStore = useStore("marketStore");

  const handleOpenFilter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, key: keyof typeof CategoryEnum) => {
    marketStore.changeCategory(key);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box pl={{ md: 1 }}>
      <Button variant="text" startIcon={<FilterAltIcon fontSize="inherit" />} size="small" onClick={handleOpenFilter}>
        {marketStore.currentCategory}
      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {(Object.keys(CategoryEnum) as Array<keyof typeof CategoryEnum>).map((key, index) => {
          const categoryName = CategoryEnum[key];

          return (
            <MenuItem key={key} onClick={(event) => handleMenuItemClick(event, key)}>
              {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
});

export default MarketCategoryFilterBtn;
