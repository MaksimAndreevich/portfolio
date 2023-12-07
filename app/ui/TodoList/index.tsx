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
import moment from "moment";
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
        .map(({ id, title, status, created_at }) => (
          <ListItem
            key={id}
            alignItems="flex-start"
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete todo"
                onClick={() => handleDelete(id)}
                sx={{ pr: 0.5 }}
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
                secondary={moment(created_at).format("DD-MM-YYYY")}
                secondaryTypographyProps={{ fontSize: 10 }}
                sx={
                  (status === "done" && {
                    textDecoration: "line-through",
                    overflow: "hidden",
                  }) || { overflow: "hidden" }
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
    </List>
  );
});

export default TodoList;
