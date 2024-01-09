import * as mobx from "mobx";
import IMainStore from "./interfaces/mainStore.interface";
import IMarketStore, { IProduct } from "./interfaces/marketStore.interface";

export default class MarketStore implements IMarketStore {
  products: Array<IProduct> | null = null;
  cart: Array<IProduct> = [];
  totalProductsInCart = 0;

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

    if (count > 0) {
      this.addToCart(id, count);
    } else {
      this.removeFromCart(id);
    }

    this.updateTotalProductsInCart();
  };

  @mobx.action
  getProduct = (id: number) => {
    const product = this.products?.find((p) => p.id === id);

    return product;
  };

  @mobx.action
  addToCart = (id: number, count: number) => {
    const product = this.getProduct(id);

    if (this.cart.some((p) => p.id === id)) {
      const index = this.cart.findIndex((p) => p.id === id);

      return mobx.runInAction(() => {
        this.cart[index].count = count;
      });
    }

    if (product) {
      mobx.runInAction(() => {
        this.cart.push(product);
      });
    }
  };

  @mobx.action
  removeFromCart = (id: number) => {
    mobx.runInAction(() => {
      this.cart = this.cart.filter((p) => p.id !== id);
    });
  };

  @mobx.action
  updateTotalProductsInCart = () => {
    let total: number = 0;

    this.cart.forEach((p) => {
      if (p.count) total += p.count;
    });

    mobx.runInAction(() => {
      this.totalProductsInCart = total;
    });
  };

  @mobx.action
  getTotalAmount = () => {
    let total = 0;

    this.cart.forEach((p) => {
      if (!p.count) return;
      total += p.price * p.count;
    });

    return Math.round(total);
  };

  @mobx.action
  order = () => {
    mobx.runInAction(() => {
      this.cart.length = 0;
      this.products = this.products!.map((p) => ({ ...p, count: 0 }));
      this.totalProductsInCart = 0;
    });
  };
}
