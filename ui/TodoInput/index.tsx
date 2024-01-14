import AddIcon from "@mui/icons-material/Add";
import { Box, IconButton, TextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { addTodoToServer } from "../../lib/services/serverActions";

const TodoInput = observer(() => {
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text) {
      addTodoToServer(text);
      setText("");
    }
  };

  return (
    <Box display={"flex"} pb={2} component={"form"} action={handleAddTodo}>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        name="todo"
        fullWidth
        label="Add todo"
        variant="outlined"
        type="text"
        id="todo"
        inputProps={{ maxLength: 255 }}
        sx={{ pr: 1 }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pr: 0.5,
        }}
      >
        <IconButton color="primary" aria-label="add todo" type="submit" onClick={handleAddTodo}>
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
});

export default TodoInput;
