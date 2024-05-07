import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Menu/MainNavigation";
import { Switch } from "@mui/material";
import { darkTheme, lightTheme } from "../theme";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const handleThemeChange = () => {
    setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };
  return (
    <div>
      <ThemeProvider theme={currentTheme}>
        <Switch
          checked={currentTheme === darkTheme}
          onChange={handleThemeChange}
        />
        <MainNavigation />
        <Outlet />
      </ThemeProvider>
    </div>
  );
}
