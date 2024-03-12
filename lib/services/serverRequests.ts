import {memoSpareImages} from "../constants";
import {ICodewarsStats, ILeetcodeStats} from "../stores/interfaces/mainStore.interface";
import {IMemoImage} from "../stores/interfaces/memoStore.interface";

export async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  return res.json();
}

// https://unsplash.com/documentation#get-a-random-photo
export async function getRandomPhotos(count: number): Promise<Array<IMemoImage>> {
  // TODO: optimaze loading images
  const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

  const res = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}`);
  const photos = await res.json();

  if (photos.errors) return memoSpareImages;

  return photos;
}

export async function getLeetcodeStats() {
  const res = await fetch("https://leetcode-stats-api.herokuapp.com/MaksimAndreevich");
  const json: ILeetcodeStats = await res.json();

  if (json.status === "error") return null;
  return json;
}

export async function getCodewarsStats() {
  const res = await fetch("https://www.codewars.com/api/v1/users/MaksimAndreevich");
  const json: ICodewarsStats = await res.json();

  if (json.success === false) return null;
  return json;
}
