"use client";

import { Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../../lib/hooks/useStore";
import { IMemoImage } from "../../lib/stores/interfaces/memoStore.interface";
import MemoGameCards from "../MemoGameCards";
import MemoGameStartDialog from "../MemoGameStartDialog";

const MemoGame = observer(({ photos }: { photos: Array<IMemoImage> }) => {
  const memoStore = useStore("memoStore");

  useEffect(() => {
    memoStore.setImages(photos);
  }, []);

  return (
    <Box sx={{ height: "100%", width: "100%", position: "relative" }}>
      <MemoGameStartDialog />
      <MemoGameCards />
    </Box>
  );
});

export default MemoGame;
