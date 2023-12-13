import CalculateIcon from "@mui/icons-material/Calculate";
import CloudIcon from "@mui/icons-material/Cloud";
import GitHubIcon from "@mui/icons-material/GitHub";
import ListAltIcon from "@mui/icons-material/ListAlt";
import QuizIcon from "@mui/icons-material/Quiz";
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
    disabled: true,
  },
  {
    name: "Quiz",
    href: routes.quiz,
    icon: <QuizIcon />,
    disabled: true,
  },
  {
    name: "GitHub",
    href: routes.gitHub,
    icon: <GitHubIcon />,
    disabled: true,
  },
];

export default linksProjectPages;
