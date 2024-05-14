import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Menu/MainNavigation";
import { darkTheme, lightTheme } from "../theme";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";

export default function RootLayout() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const handleThemeChange = () => {
    setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <MainNavigation
          onThemeChange={handleThemeChange}
          // TODO discussion(prop value)
          currentTheme={currentTheme}
        />
        <Outlet />
      </ThemeProvider>
    </>
  ); 
}
