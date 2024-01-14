import { sql } from "@vercel/postgres";
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
