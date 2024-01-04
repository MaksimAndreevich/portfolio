export default interface IMarketStore {
  products: null | Array<IProduct>;

  setProducts: (products: Array<IProduct>) => void;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: CategoryEnum;
  image: string;
  rating: { rate: number; count: number };
}

export enum CategoryEnum {
  electronics = "electronics",
  jewelery = "jewelery",
  mensClothing = "men's clothing",
  womensClothing = "women's clothing",
}
