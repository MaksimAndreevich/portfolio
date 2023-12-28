export default interface ICalcStore {
  input: string;

  buttonClickHandler: (value: string | number, role: string, content: string) => void;
}

export enum CalcOperatoprsEnum {
  Null = 0,
  Plus = "+",
  Minus = "-",
  Multiply = "*",
  Division = "/",
}
