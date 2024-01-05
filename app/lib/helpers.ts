import moment from "moment";
import linksProjectPages from "../ui/sideBarContent/links";

export const getPageName = (path: string): string => {
  if (path === "") return "About Me";
  if (path === "about-this-app") return "About This App";

  const currentPage = linksProjectPages.find((link) => link.href === `/${path}`);

  return currentPage?.name || "";
};

export const getTotalExperienceDate = (startAt: number, endAt: number | null): string => {
  const start = moment(startAt).format("MMMM YYYY");
  const end = endAt ? moment(startAt).format("MMMM YYYY") : "the present";

  return `${start} to ${end}`;
};

export const formatTitleMarketCard = (title: string): string => {
  const arr = title.split(" ");
  arr.length = 7;

  return arr.join(" ");
};
