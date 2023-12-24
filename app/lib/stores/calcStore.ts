import ICalcStore, { CalcOperatoprsEnum } from "./interfaces/calcStore.interface";
import IMainStore from "./interfaces/mainStore.interface";

import * as mobx from "mobx";

export default class CalcStore implements ICalcStore {
  mainStore: IMainStore;

  firstOperand: string = "0";
  secondOperand: string = "0";
  operator: CalcOperatoprsEnum = CalcOperatoprsEnum.null;
  input: string = this.firstOperand;

  constructor(mainStore: IMainStore) {
    this.mainStore = mainStore;

    mobx.makeAutoObservable(this);
  }

  @mobx.action
  buttonClickHandler = (value: string | number, role: string, content: string) => {
    if (role === "insert") {
      this.insertIntoInput(value);
    } else {
      this.numberOperation(value as CalcOperatoprsEnum);
    }
  };

  @mobx.action
  execute = () => {
    if (!this.firstOperand || !this.secondOperand || !this.operator) return;

    const a = Number(this.firstOperand);
    const b = Number(this.secondOperand);

    switch (this.operator as CalcOperatoprsEnum) {
      case CalcOperatoprsEnum["*"]:
        this.setInput(String(a * b));
        break;
      case CalcOperatoprsEnum["/"]:
        this.setInput(String(a / b));

        break;
      case CalcOperatoprsEnum["+"]:
        this.setInput(String(a + b));

        break;
      case CalcOperatoprsEnum["-"]:
        this.setInput(String(a - b));

        break;
      default:
        console.log("Нет таких такого оператора", this.operator);
    }

    console.log("execute", `${a} ${this.operator} ${b} = ${this.input}`);
  };

  @mobx.action
  numberOperation = (value: CalcOperatoprsEnum) => {
    if (!this.operator) {
      this.setOperator(value);
    }

    this.operator && this.execute();
  };

  @mobx.action
  insertIntoInput = (value: string | number) => {
    if (value === "clear") {
      return this.clear();
    }

    if (this.operator === null) {
      this.setFirstOperand(this.firstOperand + value);
      this.setInput(this.firstOperand);
    } else {
      this.setSecondOperand(this.secondOperand + value);
      this.setInput(this.secondOperand);
    }
  };

  @mobx.action
  setFirstOperand = (newValue: string) => {
    mobx.runInAction(() => {
      this.firstOperand = newValue;
    });
  };

  @mobx.action
  setSecondOperand = (newValue: string) => {
    mobx.runInAction(() => {
      this.secondOperand = newValue;
    });
  };

  @mobx.action
  setOperator = (operator: CalcOperatoprsEnum) => {
    mobx.runInAction(() => {
      this.operator = operator;
    });
  };

  @mobx.action
  setInput = (value: string) => {
    mobx.runInAction(() => {
      this.input = value;
    });
  };

  @mobx.action
  clear = () => {
    this.setFirstOperand("0");
    this.setSecondOperand("0");
    this.setOperator(CalcOperatoprsEnum.null);

    this.setInput("0");
  };
}
