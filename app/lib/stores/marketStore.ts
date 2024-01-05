import * as mobx from "mobx";
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
      this.products = products.map((p) => ({ count: 0, ...p }));
    });
  };

  @mobx.action
  setCountOfProduct = (id: number, count: number) => {
    const index = this.products?.findIndex((p) => p.id === id);

    if (index === undefined || !this.products) return;

    mobx.runInAction(() => {
      this.products![index].count = count;
    });
  };

  @mobx.action
  getProduct = (id: number) => {
    const product = this.products?.find((p) => p.id === id);

    return product;
  };
}
