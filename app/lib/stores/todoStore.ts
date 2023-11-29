import MainService from "../services/mainService";
import IMainService from "../services/mainService.interface";
import IMainStore from "./interfaces/mainStore.interface";
import ITodoStore from "./interfaces/todoStore.interface";

export default class TodoStore implements ITodoStore {
  private mainStore: IMainStore;
  private service: IMainService;

  constructor(mainStore: IMainStore) {
    this.mainStore = mainStore;
    this.service = new MainService();
  }
}
