export default interface IAccountStore {
  register: (data: IRegisterFormData) => Promise<true | string>;
}

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export interface IRegisterFormData {
  name: string;
  email: string;
  password: string;
}
