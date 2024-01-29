"use server";

import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "../../auth";
import { User } from "../stores/interfaces/accountStore.interface";

export async function addTodoToServer(text: string) {
  const status = "pending";

  await sql`
  INSERT INTO todos (status, title)
  VALUES (${status}, ${text})
`;

  revalidatePath("/todo");
}

export async function updateTodo(updTodo: { id: string; status: "pending" | "done" }) {
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

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function signOutAction() {
  await signOut();
}

export async function register(user: Omit<User, "id">) {
  await sql`
    INSERT INTO users (name, email, password)
    VALUES (${user.name}, ${user.email}, ${user.password});
  `;
}

export async function createHashPassword(password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return hashedPassword;
}
