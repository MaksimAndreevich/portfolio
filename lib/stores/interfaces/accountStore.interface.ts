export default interface IAccountStore {
  register: (data: IRegisterFormData) => Promise<true | string>;
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
