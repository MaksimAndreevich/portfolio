import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CalculateIcon from "@mui/icons-material/Calculate";
import CloudIcon from "@mui/icons-material/Cloud";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import routes from "../../lib/routes";
import { ISideBarLinkProps } from "../SideBarLink";

const linksProjectPages: Array<ISideBarLinkProps> = [
  {
    name: "Account",
    href: routes.account,
    icon: <AccountBoxIcon />,
  },
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
  {
    name: "Memo Game",
    href: routes.memo,
    icon: <SportsEsportsIcon />,
  },
];

export default linksProjectPages;
