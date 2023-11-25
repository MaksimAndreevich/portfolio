import CalculateIcon from "@mui/icons-material/Calculate";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import SideBarLink from "../SideBarLink";

const linksProjectPages = [
  {
    name: "Todo List",
    key: "todo",
    href: "/todo",
    icon: <ListAltIcon />,
  },
  {
    name: "Calculator",
    key: "calc",
    href: "/calc",
    icon: <CalculateIcon />,
  },
];

const sideBarContent = (
  <div>
    <Toolbar />
    <Divider />
    <List>
      <SideBarLink
        name={"About Me"}
        key="about me"
        href="/"
        icon={<CoPresentIcon />}
      />
    </List>
    <Divider />
    <List>
      {linksProjectPages.map(({ name, key, href, icon }, index) => (
        <SideBarLink name={name} key={key} href={href} icon={icon} />
      ))}
    </List>
  </div>
);

export default sideBarContent;
