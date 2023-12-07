import * as mobx from "mobx";
import { Filter, ITodo } from "../interfaces";
import MainService from "../services/mainService";
import IMainService from "../services/mainService.interface";
import IMainStore from "./interfaces/mainStore.interface";
import ITodoStore from "./interfaces/todoStore.interface";

export default class TodoStore implements ITodoStore {
  private mainStore: IMainStore;
  private service: IMainService;

  filter = Filter.ALL;
  todosFromServer: Array<ITodo> = [];

  constructor(mainStore: IMainStore) {
    this.mainStore = mainStore;
    this.service = new MainService();

    mobx.makeAutoObservable(this);
  }

  @mobx.action
  setTodosFromServer = (todos: Array<ITodo>) => {
    mobx.runInAction(() => {
      this.todosFromServer = todos;
    });
  };

  @mobx.action
  changeTodoStatus = (id: string) => {};

  @mobx.action
  getFilteredTodos = () => {
    if (this.filter === Filter.COMPLETED) {
      return this.todosFromServer.filter((t) => t.status === "done");
    } else if (this.filter === Filter.UPCOMING) {
      return this.todosFromServer.filter((t) => t.status === "pending");
    } else {
      return this.todosFromServer
        .slice()
        .sort((a, b) => (a.status === "done" ? 1 : -1));
    }
  };

  @mobx.action
  changeFilter = (filter: Filter) => {
    this.filter = filter;
  };
}
