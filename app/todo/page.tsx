import { ITodo } from "../lib/interfaces";
import { fetchTodos } from "../lib/services/serverRequests";
import Todo from "../ui/Todo";

const todosFromServer: Array<ITodo> = [
  { id: "adf", title: "afasf", status: "done" },
  { id: "asfasf", title: "afaasfasfsf", status: "done" },
  { id: "232s", title: "afasaf asfasfsaf  s afasfasf sasf", status: "pending" },
  {
    id: "asfa",
    title: "af  fas f    asf fsafasfas f asf asf",
    status: "pending",
  },
];

export default async function TodoPage() {
  // const todosFromServer = await fetchTodos();

  return <Todo todosFromServer={todosFromServer} />;
}
