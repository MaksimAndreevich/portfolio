export default interface ITodoStore {
  filter: Filter;
  todosFromServer: Array<ITodo>;

  setTodosFromServer: (todos: Array<ITodo>) => void;

  getFilteredTodos: (filter: Filter) => Array<ITodo>;
  changeFilter: (filter: Filter) => void;
}

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
