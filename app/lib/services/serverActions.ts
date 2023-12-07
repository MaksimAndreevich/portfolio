"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function addTodoToServer(text: string) {
  const status = "pending";

  await sql`
  INSERT INTO todos (status, title)
  VALUES (${status}, ${text})
`;

  revalidatePath("/todo");
}

export async function updateTodo(updTodo: {
  id: string;
  status: "pending" | "done";
}) {
  await sql`
    UPDATE todos
    SET id = ${updTodo.id}, status = ${updTodo.status}
    WHERE id = ${updTodo.id}
  `;

  revalidatePath("/todo");
}

export async function deleteTodo(id: string) {
  await sql`DELETE FROM todos WHERE id = ${id}`;

  revalidatePath("/todo");
}
