import CoPresentIcon from "@mui/icons-material/CoPresent";
import InfoIcon from "@mui/icons-material/Info";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import routes from "../../lib/routes";
import SideBarLink from "../SideBarLink";
import linksProjectPages from "./links";

const sideBarContent = (
  <div>
    <Toolbar />
    <Divider />
    <List>
      <SideBarLink name={"About Me"} href={routes.root} icon={<CoPresentIcon />} />
      <SideBarLink name={"About This App"} href={routes.aboutThisApp} icon={<InfoIcon />} />
    </List>
    <Divider />
    <List>
      {linksProjectPages.map(({ name, href, icon, disabled }) => (
        <SideBarLink name={name} key={name} href={href} icon={icon} disabled={disabled} />
      ))}
    </List>
  </div>
);

export default sideBarContent;
