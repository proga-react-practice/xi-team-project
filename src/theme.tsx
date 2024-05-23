import { createTheme, ThemeOptions } from "@mui/material/styles";
const shape = 8;
const black = "#000000";
const white = "#ffffff";
const lightBlue = "#8c92ff";
const darkPurple = "#7d0fd4";

const blue = "#646cff";
const grey = "#bcbcbc";
const purple = "#535bf2";
const lightSecondBackgroundColor = "#B556FF";
const darkSecondBackgroundColor = "#9035D8";
const lightBackgroundColor = "#637BED";
const darkBackgroundColor = "#0A28B6";
const lighterror = "#672222";
const darkerror = "#D5FF00";

const lightTheme: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4CDCF0",
    },
    secondary: {
      main: lightBlue,
    },
    background: {
      default: lightBackgroundColor,
      paper: lightSecondBackgroundColor,
    },
    text: {
      primary: black,
      secondary: black,
    },
    error: {
      main: lighterror,
    },
  },
  typography: {
    body1: {
      fontFamily: "Chakra Petch, sans-serif",
      fontWeight: 500,
    },
    fontFamily: "Do Hyeon",
    fontSize: 18,
    button: {
      fontFamily: "Chakra Petch, sans-serif",
      fontWeight: 600,
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
      fontFamily: "Chakra Petch, sans-serif",
    },
  },

  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: lighterror,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          borderRadius: shape,
          transition: "background-color 0.2s ease-in-out",
          "&.Mui-selected": {
            backgroundColor: "#8E00FF",
            color: "inherit",
            fontWeight: "bold",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: black,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          borderRadius: shape,
          background: lightBackgroundColor,
          borderColor: black,
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
            borderRadius: shape,
          },
        },
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
            background: lightBackgroundColor,
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
          background: white,
          borderRadius: shape / 2,
          border: "1px solid",
          "&:hover": { background: grey },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: "2px solid",
          borderColor: black,
          color: black,
          borderRadius: shape,
          cursor: "pointer",
          transition: "border-color 0.25s",
          "&:focus": { outline: "4px auto -webkit-focus-ring-color" },
          zIndex: 2,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        thumb: {
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
          borderRadius: shape / 2,
          backgroundColor: lightBackgroundColor,
        },
        track: {
          borderRadius: shape / 2,
          backgroundColor: lightBlue,
        },
      },
    },
  },
  spacing: 8,
  shape: {
    borderRadius: shape,
  },
});

const darkTheme: ThemeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#12B1C7",
    },
    secondary: {
      main: darkPurple,
    },
    background: {
      default: darkBackgroundColor,
      paper: darkSecondBackgroundColor,
    },
    text: {
      primary: white,
      secondary: white,
    },
    error: {
      main: darkerror,
    },
  },
  typography: {
    body1: {
      fontFamily: "Chakra Petch, sans-serif",
      fontWeight: 500,
    },
    fontFamily: "Do Hyeon",
    fontSize: 18,
    button: {
      fontFamily: "Chakra Petch, sans-serif",
      fontWeight: 600,
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
      fontFamily: "Chakra Petch, sans-serif",
    },
  },

  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: darkerror,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          borderRadius: shape,
          "&.Mui-selected": {
            backgroundColor: "#7712C7",
            color: "inherit",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: white,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          borderRadius: shape,
          background: darkBackgroundColor,
          borderColor: white,
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderWidth: 2,
            borderColor: white,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            textAlign: "center",
            borderRadius: shape,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: white,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": { background: lightBlue },
          "&.Mui-selected": {
            fontWeight: "bold",
            background: darkBackgroundColor,
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
          background: white,
          color: black,
          borderRadius: shape / 2,
          border: "1px solid",
          "&:hover": { background: grey },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: "2px solid",
          borderColor: white,
          color: white,
          borderRadius: shape,
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
        thumb: {
          backgroundColor: "#7712C7",
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
          borderRadius: shape / 2,
          backgroundColor: darkBackgroundColor,
        },
        track: {
          borderRadius: shape / 2,
          backgroundColor: lightBlue,
        },
      },
    },
  },
  spacing: 8,
  shape: {
    borderRadius: shape,
  },
});

// theme = responsiveFontSizes(theme);
export { lightTheme, darkTheme };
