"use client";

import { Box, SxProps, Theme } from "@mui/material";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useStore } from "../../lib/hooks/useStore";
import { IMemoCard } from "../../lib/stores/interfaces/memoStore.interface";

interface FlipCardProps {
  card: IMemoCard;
  sx?: SxProps<Theme>;
}

const FlipCard = observer(({ sx, card }: FlipCardProps) => {
  const { matched, isFlipped, image, uid } = card;

  const memoStore = useStore("memoStore");

  const handleFlip = () => {
    if (memoStore.showedCardsTimer || isFlipped) return;

    memoStore.setIsFlipped(true, uid);
    memoStore.chooseCard(uid);
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        perspective: "1000px",
        "& .flip-card-inner": {
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)",
        },
        "& .flip-card-front, & .flip-card-back": {
          width: "100%",
          height: "100%",
          position: "absolute",
          backfaceVisibility: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        "& .flip-card-front": {
          background: "linear-gradient(to right bottom, #1976d2, #bbfccb)",
        },
        "& .flip-card-back": {
          transform: "rotateY(180deg)",
          padding: 0,
        },
        ...sx,
      }}
      onClick={handleFlip}
    >
      {!matched && (
        <Box className="flip-card-inner">
          <Box className="flip-card-front" />

          <Box className="flip-card-back">
            <Image
              src={image.urls.regular}
              width={350}
              height={250}
              alt="memo image"
              style={{ objectFit: "cover", maxHeight: "100%", maxWidth: "100%", height: "100%", width: "100%" }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
});

export default FlipCard;
