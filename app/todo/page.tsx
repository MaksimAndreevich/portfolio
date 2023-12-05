import { ITodo } from "../lib/interfaces";
import Todo from "../ui/Todo";

const todosFromServer: Array<ITodo> = [
  { id: "adf", title: "afasf", status: "done" },
  {
    id: "asfasf",
    title:
      "afaasfasfsf afaasfasfsf afafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsffsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfaasfasfsf afaasfasafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsffsf",
    status: "done",
  },
  { id: "232s", title: "afasaf asfasfsaf  s afasfasf sasf", status: "pending" },
  {
    id: "asfa",
    title: "af  fas f    asf fsafasfas f asf asf",
    status: "pending",
  },
  { id: "adf", title: "afasf", status: "done" },
  {
    id: "asfasf",
    title:
      "afaasfasfsf afaasfasfsf afafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsffsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfaasfasfsf afaasfasafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsffsf",
    status: "done",
  },
  { id: "232s", title: "afasaf asfasfsaf  s afasfasf sasf", status: "pending" },
  {
    id: "asfa",
    title: "af  fas f    asf fsafasfas f asf asf",
    status: "pending",
  },
  { id: "adf", title: "afasf", status: "done" },
  {
    id: "asfasf",
    title:
      "afaasfasfsf afaasfasfsf afafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsffsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfaasfasfsf afaasfasafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsffsf",
    status: "done",
  },
  { id: "232s", title: "afasaf asfasfsaf  s afasfasf sasf", status: "pending" },
  {
    id: "asfa",
    title: "af  fas f    asf fsafasfas f asf asf",
    status: "pending",
  },
  { id: "adf", title: "afasf", status: "done" },
  {
    id: "asfasf",
    title:
      "afaasfasfsf afaasfasfsf afafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsffsf afaasfasfsf afaasfasfsfafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsfaasfasfsf afaasfasafaasfasfsf afaasfasfsf afaasfasfsf afaasfasfsffsf",
    status: "done",
  },
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
