"use client";

import { Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";
import { ITodo } from "../../lib/interfaces";

interface ITodoProps {
  todosFromServer: Array<ITodo>;
}

const Todo = observer(({ todosFromServer }: ITodoProps) => {
  return (
    <Box>
      <TodoInput />

      <TodoList todosFromServer={todosFromServer} />
    </Box>
  );
});

export default Todo;
