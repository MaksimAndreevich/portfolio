import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export interface ISideBarLinkProps {
  name: string;
  href: string;
  icon: ReactNode;
  disabled?: true;
}

const SideBarLink = ({ name, href, icon, disabled }: ISideBarLinkProps) => {
  const pathname = usePathname();

  return (
    <Link key={name} href={disabled ? "#" : href}>
      <ListItemButton selected={pathname === href} disabled={disabled}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </Link>
  );
};

export default SideBarLink;
