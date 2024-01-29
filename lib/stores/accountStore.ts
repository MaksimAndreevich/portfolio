import { createHashPassword, register } from "../services/serverActions";
import IAccountStore, { IRegisterFormData } from "./interfaces/accountStore.interface";
import IMainStore from "./interfaces/mainStore.interface";

import * as mobx from "mobx";

export default class AccountStore implements IAccountStore {
  mainStore: IMainStore;

  constructor(mainStore: IMainStore) {
    this.mainStore = mainStore;

    mobx.makeAutoObservable(this);
  }

  @mobx.action
  register = async (data: IRegisterFormData) => {
    const { name, email, password } = data;

    const hashedPassword = await createHashPassword(password);

    const res = await register({ name: name, email: email, password: hashedPassword });

    console.log(res, "REGISTER");
  };
}
