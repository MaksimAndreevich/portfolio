"use client";
import createCache, { Options } from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactNode, useMemo, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import { Button } from "@mui/material";

interface IThemeRegistryProps {
  options: Options;
  children: ReactNode;
}

export default function ThemeRegistry(props: IThemeRegistryProps) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          primary: {
            main: green[500],
          },
          secondary: {
            main: purple[500],
          },
        },
      }),
    [mode]
  );

  const { options, children } = props;

  const [{ cache, flush }] = useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Button
          variant={"contained"}
          onClick={() => setMode(mode === "dark" ? "light" : "dark")}
        >
          toggle theme
        </Button>
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
