import DeleteIcon from "@mui/icons-material/Delete";
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../lib/hooks/useStore";
import { deleteTodo, updateTodo } from "../../lib/services/serverActions";

const TodoList = observer(() => {
  const todoStore = useStore("todoStore");

  const handleToggleStatus = (id: string, status: "done" | "pending") => {
    const newStatus = status === "done" ? "pending" : "done";
    updateTodo({ id: id, status: newStatus });
  };

  const handleDelete = (id: string) => {
    deleteTodo(id);
  };

  return (
    <List sx={{ flexGrow: 1, overflow: "auto" }}>
      {todoStore
        .getFilteredTodos(todoStore.filter)
        .map(({ id, title, status }) => (
          <ListItem
            key={id}
            alignItems="flex-start"
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete todo"
                onClick={() => handleDelete(id)}
              >
                <DeleteIcon color="error" />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              onClick={() => handleToggleStatus(id, status)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={status === "done"}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>

              <ListItemText
                id={id}
                primary={title}
                sx={
                  (status === "done" && { textDecoration: "line-through" }) ||
                  undefined
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
    </List>
  );
});

export default TodoList;
