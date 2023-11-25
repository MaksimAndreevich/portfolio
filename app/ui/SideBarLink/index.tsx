import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ISideBarLinkProps {
  name: string;
  key: string;
  href: string;
  icon: ReactNode;
}

const SideBarLink = ({ name, key, href, icon }: ISideBarLinkProps) => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <Link key={key} href={href}>
      <ListItemButton selected={pathname === href}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </Link>
  );
};

export default SideBarLink;
