import linksProjectPages from "../ui/sideBarContent/links";

export const getPageName = (path: string): string => {
  if (path === "/") return "About Me";
  if (path === "/about-this-page") return "About This Page";

  const currentPage = linksProjectPages.find((link) => link.href === path);

  return currentPage?.name || "";
};
