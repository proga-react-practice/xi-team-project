import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Menu/MainNavigation";
import { darkTheme, lightTheme } from "../theme";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";

export default function RootLayout() {
  const [theme, setTheme] = useState("light");
  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const currentTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <MainNavigation
          onThemeChange={handleThemeChange}
          currentTheme={theme}
        />
        <Outlet />
      </ThemeProvider>
    </>
  );
}
