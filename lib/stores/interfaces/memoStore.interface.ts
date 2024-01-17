export default interface IMemoStore {
  images: Array<IMemoImage>;
  cards: Array<IMemoCard>;
  currentDifficult: MemoDifficultEnum | null;
  score: number;

  setImages: (cards: Array<IMemoImage>) => void;
  setCurrentDifficult: (difficult: MemoDifficultEnum | null) => void;
}

export interface IMemoImage {
  id: string;
  urls: { full: string; regular: string; small: string };
}

export interface IMemoCard {
  image: IMemoImage;
  matched: boolean;
}

export enum MemoDifficultEnum {
  Easy = "16",
  Medium = "24",
  Hard = "32",
}
