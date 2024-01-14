export default interface IMarketStore {
  products: null | Array<IProduct>;
  cart: Array<IProduct>;
  totalProductsInCart: number;
  currentCategory: CategoryEnum;

  setProducts: (products: Array<IProduct>) => void;
  setCountOfProduct: (id: number, count: number) => void;
  getProduct: (id: number) => IProduct | undefined;
  getTotalAmount: () => number;
  order: () => void;
  changeCategory: (key: keyof typeof CategoryEnum) => void;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: CategoryEnum;
  image: string;
  rating: { rate: number; count: number };

  count?: number;
}

export enum CategoryEnum {
  all = "all goods",
  electronics = "electronics",
  jewelery = "jewelery",
  mensClothing = "men's clothing",
  womensClothing = "women's clothing",
}
