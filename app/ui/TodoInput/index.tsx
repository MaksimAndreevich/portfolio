import { Box, TextField, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const TodoInput = () => {
  return (
    <Box display={"flex"}>
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
