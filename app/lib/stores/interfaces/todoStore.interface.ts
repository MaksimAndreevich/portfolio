import { Filter, ITodo } from "../../interfaces";

export default interface ITodoStore {
  filter: Filter;
  todosFromServer: Array<ITodo>;

  setTodosFromServer: (todos: Array<ITodo>) => void;

  changeTodoStatus: (id: string) => void;
  getFilteredTodos: (filter: Filter) => Array<ITodo>;
  changeFilter: (filter: Filter) => void;
}
