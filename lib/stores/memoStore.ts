import * as mobx from "mobx";
import { createUid } from "../helpers";
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
    uid: createUid();
    return cards.flatMap((i) => [
      { ...i, uid: createUid() },
      { ...i, uid: createUid() },
    ]);
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

    difficult && this.prepareForCards();
  };

  @mobx.action
  setScore = (score: number) => {
    mobx.runInAction(() => {
      this.score = score;
    });
  };

  @mobx.action
  prepareForCards = () => {
    if (!this.currentDifficult) return;

    const filteredCards: Array<IMemoCard> = this.images
      .filter((image, i) => i < +this.currentDifficult! / 2)
      .map((image) => ({ image: { id: image.id, urls: image.urls }, matched: false, isFlipped: false, uid: "" }));

    const dublicatedCards = this.dublicateCards(filteredCards);
    const shuffledCards = this.shuffleCards(dublicatedCards);

    mobx.runInAction(() => {
      this.cards = shuffledCards;
    });
  };

  @mobx.action
  newGame = () => {
    this.setScore(0);
    this.prepareForCards();
  };

  @mobx.action
  setIsFlipped = (on: boolean, uid: string) => {
    const index = this.cards.findIndex((c) => c.uid === uid);

    mobx.runInAction(() => {
      this.cards[index].isFlipped = on;
    });
  };
}
