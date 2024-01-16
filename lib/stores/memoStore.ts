import * as mobx from "mobx";
import IMainStore from "./interfaces/mainStore.interface";
import IMemoStore from "./interfaces/memoStore.interface";

export default class MemoStore implements IMemoStore {
  constructor(mainStore: IMainStore) {
    mobx.makeAutoObservable(this);
  }
}
