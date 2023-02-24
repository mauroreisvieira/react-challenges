import { createContext, useContext } from "react";
import type { Theme } from "./types";

const definitionError = (): null => {
  throw new Error(
    'Please make sure "ThemeProvider" component is wrapping your application.'
  );
};

export const ThemeContext = createContext<Theme>({
  language: "en",
  setLanguage: definitionError,
});

export const useTheme = (): Theme => useContext(ThemeContext);
