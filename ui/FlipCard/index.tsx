"use client";

import { Box, Paper, SxProps, Theme } from "@mui/material";
import { keyframes } from "@mui/system";
import { useState } from "react";

//https://unsplash.com/random/230x150
interface FlipCardProps {
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

const FlipCard = ({ sx }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Box
      onClick={() => setFlipped(true)}
      sx={{
        height: "100%",
        width: "100%",
        cursor: "pointer",
        position: "relative",
        animation: flipped ? `${flipBack} 2s none ease` : "",
        transition: "all 1.5s ease",
        transformStyle: "preserve-3d",
        ...sx,
      }}
      onAnimationEnd={() => setFlipped(false)}
    >
      <Paper
        id="memo-card-front-image"
        elevation={16}
        sx={{
          transform: "rotateY(180deg)",
          background: "linear-gradient(to left top, #e7e7e7, #00ff40)",

          // transformStyle: "preserve-3d",
          // animation: flipped ? `${flipBack} 2s none ease` : "",
          ...cardSideSx,
        }}
      />

      <Box
        id="memo-card-back-cover"
        sx={{
          background: "linear-gradient(to right bottom, #1976d2, #bbfccb)",

          // transform: "roteteY(180deg)",
          ...cardSideSx,
        }}
      ></Box>
    </Box>
  );
};

export default FlipCard;
