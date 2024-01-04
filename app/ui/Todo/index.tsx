"use client";

import { Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../lib/hooks/useStore";
import TodoFilterButtons from "../TodoFilterButtons";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";
import { ITodo } from "../../lib/stores/interfaces/todoStore.interface";

interface ITodoProps {
  todosFromServer: Array<ITodo>;
}

const Todo = observer(({ todosFromServer }: ITodoProps) => {
  const todoStore = useStore("todoStore");

  todoStore.setTodosFromServer(todosFromServer);

  return (
    <Box display={"flex"} sx={{ flexDirection: "column", height: "100%", maxHeight: "100%" }}>
      <TodoInput />

      <TodoList />

      <TodoFilterButtons />
    </Box>
  );
});

export default Todo;
