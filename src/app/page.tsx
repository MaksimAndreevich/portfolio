import { Button, Paper } from "@mui/material";

export default function Home() {
  return (
    <Paper
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        p: 10,
      }}
    >
      <Button variant={"contained"}>Hello world</Button>

      <Button variant={"text"}>Hello world</Button>

      <Button variant={"outlined"}>Hello world</Button>
    </Paper>
  );
}
