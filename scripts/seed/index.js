const { db } = require("@vercel/postgres");
const { todos } = require("./placeholder-data.js");

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

async function main() {
  const client = await db.connect();

  await seedTodos(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
