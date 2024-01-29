import { ReactElement } from "react";

export interface IProjectCard {
  image: ReactElement;
  title: string;
  description: string;
  linkToPage: string;
  linkToGit: string;
}

// to account store
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};
