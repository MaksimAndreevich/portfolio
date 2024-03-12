"use client";

import { Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import TodoFilterButtons from "../TodoFilterButtons";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";
import { useEffect } from "react";
import { useStore } from "../../lib/hooks/useStore";

const Todo = observer(() => {
  const todoStore = useStore("todoStore");
  const accountStore = useStore("accountStore");

  useEffect(() => {
    if (accountStore.user) todoStore.setTodosFromServer(accountStore.user?.todos);
  }, []);

  return (
    <Box display={"flex"} sx={{ flexDirection: "column", height: "100%", maxHeight: "100%" }}>
      <TodoInput />

      <TodoList />

      <TodoFilterButtons />
    </Box>
  );
});

export default Todo;
