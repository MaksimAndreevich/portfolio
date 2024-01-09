import NotListedLocationSharpIcon from "@mui/icons-material/NotListedLocationSharp";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const AppBarPageInfoBtn = ({ description }: { description: string | null }) => {
  return description ? (
    <Tooltip disableFocusListener title={description}>
      <IconButton sx={{ color: "white" }} disableRipple>
        <NotListedLocationSharpIcon />
      </IconButton>
    </Tooltip>
  ) : null;
};

export default AppBarPageInfoBtn;
