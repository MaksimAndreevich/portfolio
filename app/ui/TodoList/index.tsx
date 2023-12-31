import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Checkbox, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
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
    <Box sx={{ flexGrow: 1, overflow: "auto" }}>
      <List>
        {todoStore.getFilteredTodos(todoStore.filter).map(({ id, title, status, created_at }) => (
          <ListItem
            key={id}
            alignItems="flex-start"
            secondaryAction={
              <IconButton edge="end" aria-label="delete todo" onClick={() => handleDelete(id)}>
                <DeleteIcon color="error" />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton onClick={() => handleToggleStatus(id, status)} dense disableRipple>
              <ListItemIcon>
                <Checkbox edge="start" checked={status === "done"} tabIndex={-1} disableRipple />
              </ListItemIcon>

              <ListItemText
                id={id}
                primary={title}
                // TODO: moment time zone is not correct

                secondary={moment.utc(created_at).local().format("DD-MM-YYYY HH:mm")}
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
    </Box>
  );
});

export default TodoList;
