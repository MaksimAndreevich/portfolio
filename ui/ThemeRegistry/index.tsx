"use client";
import createCache, { Options } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { observer } from "mobx-react-lite";
import { useServerInsertedHTML } from "next/navigation";
import { ReactNode, useMemo, useState } from "react";
import { useStore } from "../../lib/hooks/useStore";

interface IThemeRegistryProps {
  options: Options;
  children: ReactNode;
}

const ThemeRegistry = observer((props: IThemeRegistryProps) => {
  const store = useStore("mainStore");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: store.modeTheme,
        },
        typography: {
          fontFamily: ["Nunito", "Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
        },
      }),
    [store.modeTheme]
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
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
});

export default ThemeRegistry;
