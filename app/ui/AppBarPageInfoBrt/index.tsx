import NotListedLocationSharpIcon from "@mui/icons-material/NotListedLocationSharp";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";

const AppBarPageInfoBtn = ({ description }: { description: string | null }) => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return description ? (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        PopperProps={{
          disablePortal: true,
        }}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        open={open}
        title={description}
      >
        <IconButton sx={{ color: "white" }} onClick={handleTooltipOpen}>
          <NotListedLocationSharpIcon />
        </IconButton>
      </Tooltip>
    </ClickAwayListener>
  ) : null;
};

export default AppBarPageInfoBtn;
