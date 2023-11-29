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
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = observer(
  ({ todosFromServer }: { todosFromServer: Array<ITodo> }) => {
    return (
      <List>
        {todosFromServer.map(({ id, title, status }) => (
          <ListItem
            key={id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete todo">
                <DeleteIcon />
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
                  //   inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={id} primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    );
  }
);

export default TodoList;
