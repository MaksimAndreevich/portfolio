import * as mobx from "mobx";
import MainService from "../services/mainService";
import IMainService from "../services/mainService.interface";
import IMainStore from "./interfaces/mainStore.interface";
import IMarketStore from "./interfaces/marketStore.interface";

export default class MarketStore implements IMarketStore {
  private mainStore: IMainStore;
  private service: IMainService;

  constructor(mainStore: IMainStore) {
    this.mainStore = mainStore;
    this.service = new MainService();

    mobx.makeAutoObservable(this);
  }
}
