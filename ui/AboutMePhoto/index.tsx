"use client";

import TelegramIcon from "@mui/icons-material/Telegram";
import { Box, Button } from "@mui/material";
import Image from "next/image";

const AboutMePhoto = () => {
  const handleGoToTelegram = () => {
    window.open("https://t.me/yahontovyy", "_blank");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", pt: 1 }}>
      <Box sx={{ textAlign: "center" }}>
        <Image priority src="/images/aboutMePhoto.jpg" width={200} height={300} alt="my photo" style={{ objectFit: "fill" }} />
      </Box>

      <Button
        onClick={handleGoToTelegram}
        color="info"
        variant="contained"
        size="small"
        startIcon={<TelegramIcon />}
        sx={{ alignSelf: "center", width: "100%", maxWidth: 200 }}
      >
        Telegram
      </Button>
    </Box>
  );
};

export default AboutMePhoto;
