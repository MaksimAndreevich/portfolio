import ICalcStore from "./interfaces/calcStore.interface";
import IMainStore from "./interfaces/mainStore.interface";

export default class CalcStore implements ICalcStore {
  mainStore: IMainStore;

  constructor(mainStore: IMainStore) {
    this.mainStore = mainStore;
  }
}
