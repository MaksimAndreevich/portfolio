import IMainStore from "./interfaces/mainStore.interface";
import ITodoStore from "./interfaces/todoStore.interface";

export default class TodoStore implements ITodoStore {
  mainStore: IMainStore;

  constructor(mainStore: IMainStore) {
    this.mainStore = mainStore;
  }
}
