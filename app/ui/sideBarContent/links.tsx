import CalculateIcon from "@mui/icons-material/Calculate";
import CloudIcon from "@mui/icons-material/Cloud";
import ListAltIcon from "@mui/icons-material/ListAlt";
import routes from "../../lib/routes";
import { ISideBarLinkProps } from "../SideBarLink";

const linksProjectPages: Array<ISideBarLinkProps> = [
  {
    name: "Todo List",
    href: routes.todo,
    icon: <ListAltIcon />,
  },
  {
    name: "Calculator",
    href: routes.calc,
    icon: <CalculateIcon />,
  },
  {
    name: "Weather",
    href: routes.weather,
    icon: <CloudIcon />,
  },
];

export default linksProjectPages;
