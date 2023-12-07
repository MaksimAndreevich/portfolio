export interface ITodo {
  id: string;
  status: "done" | "pending";
  title: string;
  created_at: string;
}

export enum Filter {
  ALL = "all",
  UPCOMING = "upcoming",
  COMPLETED = "completed",
}
