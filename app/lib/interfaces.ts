export interface ITodo {
  id: string;
  status: "done" | "pending";
  title: string;
}

export enum Filter {
  ALL = "all",
  UPCOMING = "upcoming",
  COMPLETED = "completed",
}
