"use client";

import { TextField, Box, IconButton, Autocomplete } from "@mui/material";
import { observer } from "mobx-react-lite";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useStore } from "../../lib/hooks/useStore";

interface IWeatherInputProps {
  cities: Array<{ label: string; country?: string }>;
}

const WeatherInput = observer(({ cities }: IWeatherInputProps) => {
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
      />
      {/* <Autocomplete
        value={inputValue}
        onChange={(event: any, newValue) => {
          if (!newValue) return;
          weatherStore.getWeather(newValue.label);
        }}
        inputValue={inputValue.label}
        onInputChange={(event, newInputValue) => {
          setInputValue({ label: newInputValue });
        }}
        disablePortal
        id="autocomplete cities"
        options={cities}
        fullWidth
        renderInput={(params) => (
          <TextField
            {...params}
            label="City"
            inputProps={{
              ...params.inputProps,
              onKeyDown: (e) => {
                if (e.key === "Enter") {
                  // TODO: after keyDown Enter dropdown doesnt hide
                  e.stopPropagation();
                  handleClickSearch();
                }
              },
            }}
          />
        )}
        renderOption={(props, option) => (
          <Box component="li" key={option.label} {...props}>
            {`${option.label} (${option.country})`}
          </Box>
        )}
      /> */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pl: 1,
        }}
      >
        <IconButton
          color="primary"
          aria-label="search city"
          type="submit"
          onClick={handleClickSearch}
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
});

export default WeatherInput;
