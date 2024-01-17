import { sql } from "@vercel/postgres";
import { memoSpareImages } from "../constants";
import { IMemoImage } from "../stores/interfaces/memoStore.interface";
import { ITodo } from "../stores/interfaces/todoStore.interface";

// These requests are executed on the server side

export async function fetchTodos() {
  try {
    const data = await sql<ITodo>`
            SELECT
              id,
              status,
              title,
              created_at
            FROM todos
          `;

    const todos = data.rows;

    return todos;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all todos.");
  }
}

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

  // return memoSpareImages;
}
