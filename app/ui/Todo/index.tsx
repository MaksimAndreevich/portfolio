"use client";

import { Box, Button, ButtonGroup } from "@mui/material";
import { observer } from "mobx-react-lite";
import { ITodo } from "../../lib/interfaces";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";

interface ITodoProps {
  todosFromServer: Array<ITodo>;
}

const Todo = observer(({ todosFromServer }: ITodoProps) => {
  return (
    <Box
      display={"flex"}
      sx={{ flexDirection: "column", height: "100%", maxHeight: "100%" }}
    >
      <TodoInput />

      <TodoList todosFromServer={todosFromServer} />

      <ButtonGroup variant="text" aria-label="todo filter" fullWidth>
        <Button>All</Button>
        <Button>Upcoming</Button>
        <Button>Сompleted</Button>
      </ButtonGroup>
    </Box>
  );
});

export default Todo;
