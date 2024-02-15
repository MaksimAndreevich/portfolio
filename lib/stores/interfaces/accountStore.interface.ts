export default interface IAccountStore {
  user: IUser | null;

  register: (data: IRegisterFormData) => Promise<true | string>;
  setUser: (user: IUser) => void;
  logout: () => void;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface IRegisterFormData {
  name: string;
  email: string;
  password: string;
}
