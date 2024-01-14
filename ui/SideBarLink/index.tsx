import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { useStore } from "../../lib/hooks/useStore";

export interface ISideBarLinkProps {
  name: string;
  href: string;
  icon: ReactNode;
  disabled?: true;
}

const SideBarLink = ({ name, href, icon, disabled }: ISideBarLinkProps) => {
  const pathname = usePathname();
  const store = useStore("mainStore");

  const isCurrentPage = (pathname === "/" && href === "/") || pathname.split("/")[1] === href.substring(1);

  const handleClick = () => {
    store.mobileOpen && store.toggleMobileOpen();
  };

  return (
    <Link key={name} href={disabled ? "#" : href}>
      <ListItemButton selected={isCurrentPage} disabled={disabled} onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </Link>
  );
};

export default SideBarLink;
