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
const boxBackground = "#B556FF";
const background = "#637BED";

export const theme: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4CDCF0",
    },
    secondary: {
      main: "#ffc510",
    },
    background: {
      default: background,
      paper: boxBackground,
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
      fontFamily: "Chakra Petch, sans-serif",
      fontWeight: 500,
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
      fontFamily: "Chakra Petch, sans-serif",
      fontWeight: 600,
      borderRadius: shape,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
      fontFamily: "Chakra Petch, sans-serif",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      fontFamily: "Chakra Petch, sans-serif",
    },
    h4: {
      fontSize: "1.2rem",
      fontWeight: 600,
    },
  },

  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          borderRadius: shape,
          background: background,
          borderColor: black,
          // "&:hover": { borderColor: black },
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderWidth: 2,
            borderColor: black,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            textAlign: "center",
            backgroundColor: background,
            borderRadius: shape,
            // "&:hover": {
            //   borderColor: lightBlue,
            // },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        // root: {
        //   fontSize: "1.5rem",
        //   zIndex: 1,
        //   color: white,
        //   // "&.MuiInputLabel-shrink": {
        //   //   transform: "translate(0.6rem, -2rem) scale(0.85)",
        //   //   color: black,
        //   //   marginLeft: "0em",
        //   // },
        //   // "&.Mui-focused": {
        //   //   color: black,
        //   //   marginLeft: "0em",
        //   // },
        // },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: black,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": { background: lightBlue },
          "&.Mui-selected": {
            fontWeight: "bold",
            background: background,
            "&:hover": {
              background: lightBlue,
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          // fontSize: "1.3rem",
          background: white,
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
          border: "2px solid",
          fontSize: "1em",
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
          backgroundColor: "#A93AFF",
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
          backgroundColor: background,
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
