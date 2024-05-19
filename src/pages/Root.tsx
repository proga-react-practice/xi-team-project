import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Menu/MainNavigation";
import { darkTheme, lightTheme } from "../theme";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";

export default function RootLayout() {
  enum Theme {
    Light = "light",
    Dark = "dark",
  }
  const [theme, setTheme] = useState<Theme>(Theme.Light);
  const handleThemeChange = () => {
    setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
  };
  const currentTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <MainNavigation
          onThemeChange={handleThemeChange}
          currentTheme={Theme.Light}
        />
        <Outlet />
      </ThemeProvider>
    </>
  );
}
