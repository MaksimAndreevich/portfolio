import { ReactElement } from "react";

export interface IProjectCard {
  image: ReactElement;
  title: string;
  description: string;
  linkToPage: string;
  linkToGit: string;
}
