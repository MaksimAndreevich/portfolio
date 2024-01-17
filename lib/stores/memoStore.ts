import * as mobx from "mobx";
import { createUid } from "../helpers";
import IMainStore from "./interfaces/mainStore.interface";
import IMemoStore, { IMemoCard, IMemoImage, MemoDifficultEnum } from "./interfaces/memoStore.interface";

const delay = (ms: number) => new Promise((_) => setTimeout(_, ms));
export default class MemoStore implements IMemoStore {
  images: Array<IMemoImage> = [];
  cards: Array<IMemoCard> = [];
  currentDifficult: MemoDifficultEnum | null = null;
  score: number = 0;

  firstCardId: IMemoCard | null = null;
  secondCardId: IMemoCard | null = null;

  showedCardsTimer: NodeJS.Timeout | null = null;

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
    if (this.showedCardsTimer) return;

    this.setScore(0);
    this.prepareForCards();
    this.showAllCards();

    this.firstCardId = null;
    this.secondCardId = null;
  };

  @mobx.action
  setIsFlipped = (on: boolean, uid: string) => {
    const index = this.cards.findIndex((c) => c.uid === uid);

    mobx.runInAction(() => {
      this.cards[index].isFlipped = on;
    });
  };

  @mobx.action
  showAllCards = () => {
    if (this.showedCardsTimer) return;

    this.cards.forEach((c) => this.setIsFlipped(true, c.uid));
    this.showedCardsTimer = setTimeout(this.hideAllCards, 3000);
  };

  @mobx.action
  hideAllCards = () => {
    this.cards.forEach((c) => this.setIsFlipped(false, c.uid));
    this.showedCardsTimer = null;
  };

  @mobx.action
  chooseCard = (uid: string) => {
    const targetCard = this.cards.find((c) => c.uid === uid) || null;

    if (!this.firstCardId) {
      this.firstCardId = targetCard;
      console.log("выбираем первую карту");
    } else {
      this.secondCardId = targetCard;
      console.log("выбираем вторую карту");

      this.matchCards();
    }
  };

  @mobx.action
  matchCards = async () => {
    if (!this.firstCardId || !this.secondCardId) return false;
    this.showedCardsTimer = await setTimeout(this.hideAllCards, 1000);

    const isMatched = this.firstCardId.image.id === this.secondCardId.image.id;

    if (isMatched) {
      await delay(800);
      this.cards.forEach((c, i) => {
        if (c.image.id === this.firstCardId?.image.id) {
          mobx.runInAction(() => {
            this.cards[i].matched = true;
          });
        }
      });

      this.setScore(this.score + 100);
    }

    this.firstCardId = null;
    this.secondCardId = null;
    return isMatched;
  };
}
