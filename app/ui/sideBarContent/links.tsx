import CalculateIcon from "@mui/icons-material/Calculate";
import CloudIcon from "@mui/icons-material/Cloud";
import GitHubIcon from "@mui/icons-material/GitHub";
import ListAltIcon from "@mui/icons-material/ListAlt";
import QuizIcon from "@mui/icons-material/Quiz";
import TranslateIcon from "@mui/icons-material/Translate";
import { ISideBarLinkProps } from "../SideBarLink";

const linksProjectPages: Array<ISideBarLinkProps> = [
  {
    name: "Todo List",
    href: "/todo",
    icon: <ListAltIcon />,
  },
  {
    name: "Calculator",
    href: "/calc",
    icon: <CalculateIcon />,
  },
  {
    name: "Weather",
    href: "/weather",
    icon: <CloudIcon />,
    disabled: true,
  },
  {
    name: "Quiz",
    href: "/quiz",
    icon: <QuizIcon />,
    disabled: true,
  },
  {
    name: "Word Cards",
    href: "/word-cards",
    icon: <TranslateIcon />,
    disabled: true,
  },
  {
    name: "GitHub",
    href: "/git-hub",
    icon: <GitHubIcon />,
    disabled: true,
  },
];

export default linksProjectPages;
