const { db } = require("@vercel/postgres");
const { todos } = require("./placeholder-data.js");

const bcrypt = require("bcrypt");

async function seedTodos(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "todos" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS todos (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        status VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        created_at TIMESTAMP now()
      );
    `;

    console.log(`Created "todos" table`);

    // Insert data into the "todos" table
    const insertedTodos = await Promise.all(
      todos.map(
        (todo) => client.sql`
        INSERT INTO todos (id, status, title)
        VALUES (${todo.id}, ${todo.status}, ${todo.title})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedTodos.length} todos`);

    return {
      createTable,
      todos: insertedTodos,
    };
  } catch (error) {
    console.error("Error seeding todos:", error);
    throw error;
  }
}

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      [
        {
          id: "410544b2-4001-4271-9855-fec4b6a6442a",
          name: "User",
          email: "user@nextmail.com",
          password: "123456",
        },
      ].map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);

        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  // await seedTodos(client);
  await seedUsers(client);

  await client.end();
}

main().catch((err) => {
  console.error("An error occurred while attempting to seed the database:", err);
});
