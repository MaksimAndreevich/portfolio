import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useStore } from "../../lib/hooks/useStore";

const AutoScaleTextField = observer(() => {
  const calcStore = useStore("calcStore");

  const [fontSize, setFontSize] = useState(96);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
  const ratio = isMobile ? 6 : 10;

  useEffect(() => {
    setFontSize(Math.max(16, 96 / Math.max(1, calcStore.input.length / ratio)));
  }, [calcStore.input]);

  return (
    <Box sx={{ display: "flex", alignItems: "center", height: 160 }}>
      <Typography
        sx={{
          flexGrow: 1,
          maxWidth: "100%",
          overflow: "hidden",
          fontSize: `${fontSize}px`,
          textAlign: "right",
          p: 1,
        }}
      >
        {calcStore.input}
      </Typography>
    </Box>
  );
});

export default AutoScaleTextField;
