import moment from "moment";
import cards from "../ui/AboutThisApp/projectsCards";
import linksProjectPages from "../ui/sideBarContent/links";
import { IRegisterFormData } from "./stores/interfaces/accountStore.interface";

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

export const getDescriptionAboutThisProject = (projectName: string) => {
  const project = cards.find((p) => p.title === projectName);

  return project?.description || null;
};

export const createUid = () => {
  return "id" + Math.random().toString(16).slice(2);
};

export const login = (dispatch: (payload: FormData) => void, data: IRegisterFormData) => {
  const formData = new FormData();

  formData.append("email", data.email);
  formData.append("password", data.password);

  dispatch(formData);
};
