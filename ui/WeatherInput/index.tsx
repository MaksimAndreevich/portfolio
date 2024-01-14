"use client";

import { Box, IconButton, TextField } from "@mui/material";
import { observer } from "mobx-react-lite";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useStore } from "../../lib/hooks/useStore";

const WeatherInput = observer(() => {
  const [value, setValue] = useState("");

  const weatherStore = useStore("weatherStore");

  const handleClickSearch = async () => {
    if (value) {
      weatherStore.getWeather(value);
      setValue("");
    }
  };

  // TODO: autocomplete with Google maps https://mui.com/material-ui/react-autocomplete/#system-GoogleMaps.tsx

  return (
    <Box sx={{ display: "flex" }}>
      <TextField
        variant="standard"
        fullWidth
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="City"
        inputProps={{
          onKeyDown: (e) => {
            if (e.key === "Enter") {
              handleClickSearch();
            }
          },
        }}
        error={weatherStore.isCityNotFound}
        helperText={weatherStore.isCityNotFound && "City not found..."}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pl: 1,
        }}
      >
        <IconButton color="primary" aria-label="search city" type="submit" onClick={handleClickSearch}>
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
});

export default WeatherInput;
