import * as mobx from "mobx";
import MainService from "../services/mainService";
import IMainService from "../services/mainService.interface";
import IMainStore from "./interfaces/mainStore.interface";
import IMarketStore, { IProduct } from "./interfaces/marketStore.interface";

export default class MarketStore implements IMarketStore {
  products: Array<IProduct> | null = null;

  constructor(mainStore: IMainStore) {
    mobx.makeAutoObservable(this);
  }

  @mobx.action
  setProducts = (products: Array<IProduct>) => {
    mobx.runInAction(() => {
      this.products = products;
    });
  };
}
