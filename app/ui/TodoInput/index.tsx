import AddIcon from "@mui/icons-material/Add";
import { Box, IconButton, TextField } from "@mui/material";

const TodoInput = () => {
  return (
    <Box display={"flex"} pb={2}>
      <TextField fullWidth label="Add todo" variant="outlined" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton color="primary" aria-label="add todo">
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TodoInput;
