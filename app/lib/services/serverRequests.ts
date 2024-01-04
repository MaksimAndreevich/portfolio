import { sql } from "@vercel/postgres";
import { ITodo } from "../stores/interfaces/todoStore.interface";
import { IProduct } from "../stores/interfaces/marketStore.interface";

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
  let products: null | Array<IProduct> = null;

  await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => (products = json));

  return products;
}
