"use client";

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
    <>
      <MemoGameStartDialog />
      <MemoGameCards />
    </>
  );
});

export default MemoGame;
