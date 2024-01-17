import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { observer } from "mobx-react-lite";
import { useStore } from "../../lib/hooks/useStore";
import { MemoDifficultEnum } from "../../lib/stores/interfaces/memoStore.interface";

const MemoGameStartDialog = observer(() => {
  const memoStore = useStore("memoStore");

  const handleChoose = (count: MemoDifficultEnum) => {
    memoStore.setCurrentDifficult(count);
  };

  return (
    <Dialog
      open={!memoStore.currentDifficult}
      // enable position inside main container (modal and backdrop)
      // container={() => document.getElementById("main-container")}
      // sx={{ position: "absolute" }}
      // slotProps={{ backdrop: { sx: { position: "absolute" } } }}
    >
      <DialogTitle>Сhoose a difficulty</DialogTitle>

      <List sx={{ pt: 0 }}>
        {(Object.keys(MemoDifficultEnum) as Array<keyof typeof MemoDifficultEnum>).map((key, i) => {
          return (
            <ListItem disableGutters key={i}>
              <ListItemButton onClick={() => handleChoose(MemoDifficultEnum[key])}>
                <ListItemText primary={String(key)} secondary={`Total cards: ${MemoDifficultEnum[key]}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Dialog>
  );
});

export default MemoGameStartDialog;
