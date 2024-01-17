import * as mobx from "mobx";
import IMainStore from "./interfaces/mainStore.interface";
import IMemoStore, { IMemoCard, IMemoImage, MemoDifficultEnum } from "./interfaces/memoStore.interface";

export default class MemoStore implements IMemoStore {
  images: Array<IMemoImage> = [];
  cards: Array<IMemoCard> = [];
  currentDifficult: MemoDifficultEnum | null = null;
  score: number = 0;

  constructor(mainStore: IMainStore) {
    mobx.makeAutoObservable(this);
  }

  @mobx.action
  setImages = (images: Array<IMemoImage>) => {
    mobx.runInAction(() => {
      this.images = images;
    });
  };

  dublicateCards = (cards: Array<IMemoCard>) => {
    return cards.flatMap((i) => [i, i]);
  };

  shuffleCards = (cards: Array<IMemoCard>) => {
    let currentIndex = cards.length;
    let randomIndex: number;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
    }

    return cards;
  };

  @mobx.action
  setCurrentDifficult = (difficult: MemoDifficultEnum | null) => {
    mobx.runInAction(() => {
      this.currentDifficult = difficult;
    });
  };

  @mobx.action
  setScore = (score: number) => {
    mobx.runInAction(() => {
      this.score = score;
    });
  };
}
