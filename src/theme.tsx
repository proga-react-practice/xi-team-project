import { createTheme, ThemeOptions } from "@mui/material/styles";

const paperColor = "#00bcd4";

export const theme: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffff00",
    },
    secondary: {
      main: "#ffc510",
    },
    background: {
      default: "#0288d1",
      paper: paperColor,
    },
    error: {
      main: "#e53935",
    },
  },
  typography: {
    body1: {
      fontFamily: "Roboto",
    },
    fontFamily: "Do Hyeon",
    caption: {
      fontFamily: "Do Hyeon",
    },
    overline: {
      fontFamily: "Do Hyeon",
    },
    body2: {
      fontFamily: "Roboto",
    },
    fontSize: 14,
    button: {
      fontSize: "1.2rem",
      fontFamily: "inherit",
      borderRadius: "8px",
    },
  },

  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "95%",
          marginBottom: "2em",
          background: "radial-gradient(circle at center, #3c77f5, #2a31bd)",
          "&:hover": { borderColor: "#646cff" },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "1.5rem",
          zIndex: 1,
          color: "#213547",
          "&.MuiInputLabel-shrink": {
            transform: "translate(0.6rem, -2rem) scale(0.85)",
          },
          "&.Mui-focused": {
            color: "#213547",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          minWidth: "100%",
          background: "radial-gradient(circle at center, #3c77f5, #2a31bd)",
          "&:hover": { borderColor: "#646cff" },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          background: "#cacedb",
          "&:hover": { background: "#bcbcbc" },
          "&.Mui-selected": {
            fontWeight: "bold",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: "2.5rem",
          fontSize: "1.3rem",
          background: "#dfdfdf",
          borderRadius: "5px",
          padding: "0.7em",
          "&:hover": { background: "#cacedb" },
        },
      },
    },
  },
});
