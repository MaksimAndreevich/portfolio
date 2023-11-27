import CalcStore from "./calcStore";
import ICalcStore from "./interfaces/calcStore.interface";
import IMainStore from "./interfaces/mainStore.interface";
import ITodoStore from "./interfaces/todoStore.interface";
import TodoStore from "./todoStore";


export default class MainStore implements IMainStore {
public readonly todoStore: ITodoStore;
public readonly  calcStore: ICalcStore;

constructor(){
    this.todoStore = new TodoStore(this)
    this.calcStore = new CalcStore(this)
}
}