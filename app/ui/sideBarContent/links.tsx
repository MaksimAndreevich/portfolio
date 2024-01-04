import CalculateIcon from "@mui/icons-material/Calculate";
import CloudIcon from "@mui/icons-material/Cloud";
import ListAltIcon from "@mui/icons-material/ListAlt";
import routes from "../../lib/routes";
import { ISideBarLinkProps } from "../SideBarLink";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

const linksProjectPages: Array<ISideBarLinkProps> = [
  {
    name: "Todo List",
    href: routes.todo,
    icon: <ListAltIcon />,
  },
  {
    name: "Market",
    href: routes.market,
    icon: <LocalGroceryStoreIcon />,
  },
  {
    name: "Weather",
    href: routes.weather,
    icon: <CloudIcon />,
  },
  {
    name: "Calculator",
    href: routes.calc,
    icon: <CalculateIcon />,
  },
];

export default linksProjectPages;
