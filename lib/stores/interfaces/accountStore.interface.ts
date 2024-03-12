import { ITodo } from "./todoStore.interface";

export default interface IAccountStore {
  user: IUser | null;

  initAccount: (email: string) => Promise<void>;
  register: (data: IRegisterFormData) => Promise<true | string>;
  setUser: (user: IUser) => void;
  logout: () => void;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  // TODO: personal todos
  todos: Array<ITodo>;
}

export interface IRegisterFormData {
  name: string;
  email: string;
  password: string;
}
