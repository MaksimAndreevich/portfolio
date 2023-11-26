import CalculateIcon from "@mui/icons-material/Calculate";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import SideBarLink, { ISideBarLinkProps } from "../SideBarLink";
import CloudIcon from "@mui/icons-material/Cloud";
import QuizIcon from "@mui/icons-material/Quiz";
import GitHubIcon from "@mui/icons-material/GitHub";
import InfoIcon from "@mui/icons-material/Info";
import TranslateIcon from "@mui/icons-material/Translate";

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
    icon: <GitHubIcon />,
    disabled: true,
  },
  {
    name: "GitHub",
    href: "/git-hub",
    icon: <TranslateIcon />,
    disabled: true,
  },
];

const sideBarContent = (
  <div>
    <Toolbar />
    <Divider />
    <List>
      <SideBarLink name={"About Me"} href="/" icon={<CoPresentIcon />} />
      <SideBarLink
        name={"About This Page"}
        href="/about-this-page"
        icon={<InfoIcon />}
        disabled
      />
    </List>
    <Divider />
    <List>
      {linksProjectPages.map(({ name, href, icon, disabled }) => (
        <SideBarLink
          name={name}
          key={name}
          href={href}
          icon={icon}
          disabled={disabled}
        />
      ))}
    </List>
  </div>
);

export default sideBarContent;
