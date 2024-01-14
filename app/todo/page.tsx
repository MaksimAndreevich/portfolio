import { fetchTodos } from "../../lib/services/serverRequests";
import Todo from "../../ui/Todo";

export const dynamic = "force-dynamic";

export default async function TodoPage() {
  const todosFromServer = await fetchTodos();

  return <Todo todosFromServer={todosFromServer} />;
}
