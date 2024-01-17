export default interface IMemoStore {
  images: Array<IMemoImage>;
  cards: Array<IMemoCard>;
  currentDifficult: MemoDifficultEnum | null;
  score: number;

  setImages: (cards: Array<IMemoImage>) => void;
  setCurrentDifficult: (difficult: MemoDifficultEnum | null) => void;
  newGame: () => void;
  setShowFront: (on: boolean, id: string) => void;
}

export interface IMemoImage {
  id: string;
  urls: { full: string; regular: string; small: string };
}

export interface IMemoCard {
  image: IMemoImage;
  matched: boolean;
  isShowFront: boolean;
  uid: string;
}

export enum MemoDifficultEnum {
  Easy = "16",
  Medium = "24",
  Hard = "32",
}
