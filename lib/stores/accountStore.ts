import { createHashPassword, getUser, register, signOutAction } from "../services/serverActions";
import IAccountStore, { IRegisterFormData, IUser } from "./interfaces/accountStore.interface";
import IMainStore from "./interfaces/mainStore.interface";

import * as mobx from "mobx";

export default class AccountStore implements IAccountStore {
  user: IUser | null = null;

  mainStore: IMainStore;

  constructor(mainStore: IMainStore) {
    this.mainStore = mainStore;

    mobx.makeAutoObservable(this);
  }

  // TODO: need?
  @mobx.action
  initAccount = async (email: string) => {
    if (this.user !== null) return;

    const userData = await getUser(email);
    userData && this.setUser(userData);
  };

  @mobx.action
  register = async (data: IRegisterFormData) => {
    const { name, email, password } = data;

    const hashedPassword = await createHashPassword(password);

    const res = await register({ name: name, email: email, password: hashedPassword });

    if (!("error" in res)) return true;

    return res.errorMessage;
  };

  @mobx.action
  setUser = (user: IUser) => {
    if (this.user !== null) return;
    mobx.runInAction(() => {
      this.user = Object.assign({}, user);
    });
  };

  @mobx.action
  logout = () => {
    signOutAction();
    mobx.runInAction(() => {
      this.user = null;
    });
  };
}
