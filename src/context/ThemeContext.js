import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { yellow, blueGrey } from "@material-ui/core/colors";
// import blueGrey from "@material-ui/core/colors/blueGrey";

/* export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: "#333",
  },
})); */

export const theme = createMuiTheme({
  typography: {
    fontFamily: "IBM Plex Sans",
    fontWeightThin: 100,
    fontWeightExtraLight: 200,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    h1: {
      fontFamily: "IBM Plex Sans",
      fontWeight: 100,
      fontSize: "2.4rem",
    },
    button: {
      border: "0.5px",
      borderColor: "#e7e7e7",
      borderStyle: "solid",
      color: "secondary",
    },
  },
  palette: {
    background: {
      xs: "#080808",
      sm: "blue",
      md: "white",
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#EFEFEF",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: yellow[700],
      main: "#D8D1F4",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#000000",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  shadows: ["none"],
  zDepthShadows: ["none"],
});
/*   return (
    <ThemeProvider theme={theme}>{childern}</ThemeProvider>
  )
} */

/* export function ThemeContext({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
} */
