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
import { ITodo } from "../../lib/interfaces";

const TodoList = observer(
  ({ todosFromServer }: { todosFromServer: Array<ITodo> }) => {
    return (
      <List sx={{ flexGrow: 1, overflow: "auto" }}>
        {todosFromServer.map(({ id, title, status }) => (
          <ListItem
            key={id}
            alignItems="flex-start"
            secondaryAction={
              <IconButton edge="end" aria-label="delete todo">
                <DeleteIcon color="error" />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              //   onClick={handleDone(value)}
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
  }
);

export default TodoList;
