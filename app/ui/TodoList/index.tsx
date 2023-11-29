import { Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import { ITodo } from "../../lib/interfaces";

const TodoList = observer(
  ({ todosFromServer }: { todosFromServer: Array<ITodo> }) => {
    return <Box></Box>;
  }
);

export default TodoList;
