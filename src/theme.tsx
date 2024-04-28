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
          background: "#324ed4",
          "&:hover": { borderColor: "#646cff" },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "1.5rem",
          zIndex: 1,
          color: "#ffffff",
          "&.MuiInputLabel-shrink": {
            transform: "translate(0.6rem, -2rem) scale(0.85)",
            color: "#213547",
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
    MuiButton: {
      styleOverrides: {
        root: {
          border: "1px solid transparent",
          fontSize: "1em",
          fontFamily: "inherit",
          borderRadius: "8px",
          padding: "0.6em 1.2em",
          cursor: "pointer",
          transition: "border-color 0.25s",
          "&:hover": { borderColor: "#646cff" },
          "&:focus": { outline: "4px auto -webkit-focus-ring-color" },
          "&:hover, &:focus-visible": { borderColor: "#646cff" },
          zIndex: 2,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        thumb: {
          height: 20,
          width: 20,
          backgroundColor: "#747bff",
          "&:hover": {
            backgroundColor: "#535bf2",
          },
          "&.Mui-focusVisible": {
            boxShadow: "0px 0px 0px 8px rgba(116, 123, 255, 0.16)",
          },
          "&.Mui-active": {
            boxShadow: "0px 0px 0px 14px rgba(116, 123, 255, 0.16)",
          },
        },
        rail: {
          height: 8,
          borderRadius: 4,
          backgroundColor: "#747bff",
        },
        track: {
          height: 8,
          borderRadius: 4,
          backgroundColor: "#747bff",
        },
      },
    },
  },
});
