import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import React, { createContext } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = () => {};

function ThemeContext() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Barlow", "Condensed"].join(","),
    },
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

// export default ThemeContext;
