export default interface IMemoStore {
  images: Array<IMemoImage>;
  cards: Array<IMemoCard>;
  currentDifficult: MemoDifficultEnum | null;
  score: number;
  showedCardsTimer: NodeJS.Timer | null;

  setImages: (cards: Array<IMemoImage>) => void;
  setCurrentDifficult: (difficult: MemoDifficultEnum | null) => void;
  newGame: () => void;
  setIsFlipped: (on: boolean, id: string) => void;
  showAllCards: () => void;
  chooseCard: (imageId: string) => void;
}

export interface IMemoImage {
  id: string;
  urls: { full?: string; regular: string; small?: string };
}

export interface IMemoCard {
  image: IMemoImage;
  matched: boolean;
  isFlipped: boolean;
  uid: string;
}

export enum MemoDifficultEnum {
  Easy = "16",
  Medium = "24",
  Hard = "32",
}
