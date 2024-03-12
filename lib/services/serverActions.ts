"use server";

import {sql} from "@vercel/postgres";
import bcrypt from "bcrypt";
import {AuthError} from "next-auth";
import {revalidatePath} from "next/cache";
import {signIn, signOut} from "../../auth";
import routes from "../routes";
import {IUser} from "../stores/interfaces/accountStore.interface";

export async function addTodoToServer(text: string) {
  const status = "pending";

  await sql`
  INSERT INTO todos (status, title)
  VALUES (${status}, ${text})
`;

  revalidatePath(routes.accountProfileTodo);
}

export async function updateTodo(updTodo: {id: string; status: "pending" | "done"}) {
  await sql`
    UPDATE todos
    SET id = ${updTodo.id}, status = ${updTodo.status}
    WHERE id = ${updTodo.id}
  `;

  revalidatePath(routes.accountProfileTodo);
}

export async function deleteTodo(id: string) {
  await sql`DELETE FROM todos WHERE id = ${id}`;

  revalidatePath(routes.accountProfileTodo);
}

export async function signOutAction() {
  await signOut();
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

export async function register(user: Omit<IUser, "id" | "todos">) {
  //todo: add personal todos []
  try {
    const res = await sql`
    INSERT INTO users (name, email, password)
    VALUES (${user.name}, ${user.email}, ${user.password});
  `;

    revalidatePath(routes.accountRegister);

    return res;
  } catch (error: any) {
    console.log(error);

    const errObj = {error: true, errorMessage: ""};

    if (error.code === "23505") {
      errObj.errorMessage = "User is extst";
    }

    return errObj;
  }
}

export async function createHashPassword(password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return hashedPassword;
}

export async function getUser(email: string): Promise<IUser | undefined> {
  try {
    const user = await sql<IUser>`SELECT * FROM users WHERE email=${email}`;

    return user.rows[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
