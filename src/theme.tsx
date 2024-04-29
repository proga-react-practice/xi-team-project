import { createTheme, ThemeOptions } from "@mui/material/styles";

const xs = 0;
const sm = 380;
const md = 850;
const lg = 1280;
const xl = 1920;
const shape = 8;
const paperColor = "#00bcd4";
const black = "#000000";
const white = "#ffffff";
const lightBlue = "#747bff";
const darkBlue = "#324ed4";
const blue = "#646cff";
const lightGrey = "#cacedb";
const grey = "#bcbcbc";
const purple = "#535bf2";

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
      default: darkBlue,
      paper: paperColor,
    },
    error: {
      main: "#e53935",
    },
    text: {
      primary: black,
      secondary: black,
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
    fontSize: 18,
    button: {
      fontFamily: "inherit",
      borderRadius: shape,
    },
  },

  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "95%",
          borderRadius: shape,
          marginBottom: "2em",
          background: darkBlue,
          "&:hover": { borderColor: black },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          marginTop: "-1em",
          "& .MuiInputBase-input": {
            textAlign: "center",
            backgroundColor: white,
            borderRadius: "4px",
            border: "1px solid white",
            width: "2.7em",
            "&:hover": {
              borderColor: lightBlue,
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "1.5rem",
          zIndex: 1,
          color: white,
          "&.MuiInputLabel-shrink": {
            transform: "translate(0.6rem, -2rem) scale(0.85)",
            color: black,
            marginLeft: "0em",
          },
          "&.Mui-focused": {
            color: black,
            marginLeft: "0em",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          background: lightGrey,
          "&:hover": { background: grey },
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
          background: lightGrey,
          borderRadius: "5px",
          padding: "0em",
          [`@media (min-width:${sm}px)`]: {
            padding: "0.7em",
          },
          "&:hover": { background: grey },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: "1px solid transparent",
          fontSize: "1em",
          fontFamily: "inherit",
          borderRadius: shape,
          padding: "0.6em 1.2em",
          cursor: "pointer",
          transition: "border-color 0.25s",
          "&:hover": { borderColor: blue },
          "&:focus": { outline: "4px auto -webkit-focus-ring-color" },
          "&:hover, &:focus-visible": { borderColor: blue },
          zIndex: 2,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          width: "95%",
        },
        thumb: {
          height: 20,
          width: 20,
          backgroundColor: lightBlue,
          "&:hover": {
            backgroundColor: purple,
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
          backgroundColor: lightBlue,
        },
        track: {
          height: 8,
          borderRadius: 4,
          backgroundColor: lightBlue,
        },
      },
    },
  },

  breakpoints: {
    values: {
      xs: xs,
      sm: sm,
      md: md,
      lg: lg,
      xl: xl,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: shape,
  },
});
