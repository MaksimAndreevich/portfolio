import ICalcStore, { CalcOperatoprsEnum } from "./interfaces/calcStore.interface";
import IMainStore from "./interfaces/mainStore.interface";

import * as mobx from "mobx";

export default class CalcStore implements ICalcStore {
  mainStore: IMainStore;

  a: number = 0;
  b: number | null = null;

  operator: CalcOperatoprsEnum = CalcOperatoprsEnum.Null;
  input: string = String(this.a);

  constructor(mainStore: IMainStore) {
    this.mainStore = mainStore;

    mobx.makeAutoObservable(this);
  }

  @mobx.action
  buttonClickHandler = (value: string | number, role: string, content: string) => {
    switch (role) {
      case "execute":
        this.execute();
        break;
      case "insert":
        this.handleInsert(value);
        break;
      case "operator":
        this.setInput("00");
        this.setOperator(value as CalcOperatoprsEnum);
        break;
      default:
        break;
    }
  };

  @mobx.action
  execute = () => {
    if (!this.b || !this.operator) return;

    let result: number | null = null;

    switch (this.operator) {
      case CalcOperatoprsEnum.Division:
        result = Math.round((this.a / this.b) * 10000) / 10000;
        break;
      case CalcOperatoprsEnum.Multiply:
        result = this.a * this.b;
        break;
      case CalcOperatoprsEnum.Minus:
        result = this.a - this.b;
        break;
      case CalcOperatoprsEnum.Plus:
        result = this.a + this.b;
        break;
    }

    if (result !== null) {
      this.setInput(String(result));
      this.setA(result);
      this.setOperator(CalcOperatoprsEnum.Null);
    }
  };

  @mobx.action
  handleInsert = (value: string | number) => {
    if (value === "reset") return this.clear();
    if (value === "inversion") return this.inversion();

    if (value === "." && !this.input.includes(".")) {
      this.insert(value);
    } else if (typeof value === "number") {
      if (this.input.length < 16) this.insert(value);
    }
  };

  insert = (value: string | number) => {
    if (!this.operator) {
      const newA = this.input + value;
      this.setA(+newA);
      this.setInput(newA);
    } else {
      const newB = this.input + value;
      this.setB(+newB);
      this.setInput(newB);
    }
  };

  @mobx.action
  setA = (value: number) => {
    mobx.runInAction(() => {
      this.a = value;
    });
  };

  @mobx.action
  setB = (value: number | null) => {
    mobx.runInAction(() => {
      this.b = value;
    });
  };

  @mobx.action
  setOperator = (op: CalcOperatoprsEnum) => {
    mobx.runInAction(() => {
      this.operator = op;
    });
  };

  @mobx.action
  setInput = (value: string) => {
    let s = value[0] === "0" ? value.slice(1) : value;

    if (s[0] === ".") {
      s = "0" + s;
    }

    mobx.runInAction(() => {
      this.input = s;
    });
  };

  @mobx.action
  clear = () => {
    this.setA(0);
    this.setB(null);
    this.setOperator(CalcOperatoprsEnum.Null);
    mobx.runInAction(() => {
      this.input = "0";
    });
  };

  @mobx.action
  inversion = () => {
    let inv: number;

    if (+this.input < 0) {
      inv = +this.input * -1;
    } else {
      inv = -Number(this.input);
    }

    if (this.operator) {
      this.setB(inv);
    } else {
      this.setA(inv);
    }

    this.setInput(String(inv));
  };
}
