import * as mobx from "mobx";
import moment from "moment";
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
  getFilteredTodos = () => {
    if (this.filter === Filter.COMPLETED) {
      return this.todosFromServer.filter((t) => t.status === "done");
    } else if (this.filter === Filter.UPCOMING) {
      return this.todosFromServer.filter((t) => t.status === "pending");
    } else {
      const upcomingTodos = this.todosFromServer
        .filter((t) => t.status === "pending")
        .sort(
          (a, b) => moment(b.created_at).unix() - moment(a.created_at).unix()
        );
      const completedTodos = this.todosFromServer
        .filter((t) => t.status === "done")
        .sort(
          (a, b) => moment(b.created_at).unix() - moment(a.created_at).unix()
        );

      return upcomingTodos.concat(completedTodos);
    }
  };

  @mobx.action
  changeFilter = (filter: Filter) => {
    this.filter = filter;
  };
}
