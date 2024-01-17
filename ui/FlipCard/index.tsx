"use client";

import { Box, SxProps, Theme } from "@mui/material";
import { keyframes } from "@mui/system";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useStore } from "../../lib/hooks/useStore";
import { IMemoCard } from "../../lib/stores/interfaces/memoStore.interface";

//https://unsplash.com/random/230x150
interface FlipCardProps {
  card: IMemoCard;
  sx?: SxProps<Theme>;
}

const flipBack = keyframes(`
from {
  transform: rotateY(0deg);
}
to {
  transform: rotateY(180deg);
}
`);

const flipFront = keyframes(`
from {
  transform: rotateY(0deg);
}
to {
  transform: rotateY(180deg);
}
`);

const cardSideSx = {
  height: "100%",
  width: "100%",
  maxHeight: "100%",
  maxWidth: "100%",
  position: "absolute",
  backfaceVisibility: "hidden",
};

const FlipCard = observer(({ sx, card }: FlipCardProps) => {
  const { matched, isShowFront, image, uid } = card;

  const memoStore = useStore("memoStore");

  return (
    <Box
      onClick={() => {
        console.log(uid);

        memoStore.setShowFront(true, uid);
      }}
      sx={{
        height: "100%",
        width: "100%",
        cursor: "pointer",
        position: "relative",
        animation: isShowFront ? `${flipBack} 2s none ease` : "",
        transition: "all 1s ease",
        transformStyle: "preserve-3d",
        perspective: 1000,

        ...sx,
      }}
      onAnimationEnd={() => {}}
    >
      <Box
        id="memo-card-front-image"
        sx={{
          transform: "rotateY(180deg)",

          // transformStyle: "preserve-3d",
          // animation: flipped ? `${flipBack} 2s none ease` : "",
          ...cardSideSx,
        }}
      >
        <Image src={image.urls.regular} width={350} height={250} alt="memo image" style={{ objectFit: "cover", maxHeight: "100%", maxWidth: "100%" }} />
      </Box>

      <Box
        id="memo-card-back-cover"
        sx={{
          background: "linear-gradient(to right bottom, #1976d2, #bbfccb)",

          // transform: "roteteY(180deg)",
          ...cardSideSx,
        }}
      >
        BACK я в массиве по номером {memoStore.cards.findIndex((c) => c.uid === uid)}
      </Box>
    </Box>
  );
});

export default FlipCard;
