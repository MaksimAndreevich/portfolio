import ICalcStore from "./interfaces/calcStore.interface";
import IMainStore from "./interfaces/mainStore.interface";

import * as mobx from "mobx";

export default class CalcStore implements ICalcStore {
  mainStore: IMainStore;

  count = 0;

  constructor(mainStore: IMainStore) {
    this.mainStore = mainStore;

    mobx.makeAutoObservable(this);
  }

  @mobx.action
  inc = () => {
    mobx.runInAction(() => {
      this.count++;
    });
  };

  @mobx.action
  dec = () => {
    mobx.runInAction(() => {
      this.count--;
    });
  };
}
