import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Menu/MainNavigation";
import { darkTheme, lightTheme } from "../theme";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer";
import { ColorResult } from "react-color";

export default function RootLayout() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const [showColorPicker, setShowColorPicker] = useState(false); // State to manage whether the color picker should be displayed

  const handleThemeChange = () => {
    setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };

  const toggleColorPicker = () => {
    setShowColorPicker((prev) => !prev); // Toggle the state to show/hide the color picker
  };

  const handleColorChange = (newColor: ColorResult) => {
    // Assuming you'll use this color for something later, otherwise you can remove this handler
    console.log(newColor.hex); // Example of using the color
  };

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <MainNavigation
          onThemeChange={handleThemeChange}
          currentTheme={currentTheme}
          showColorPicker={showColorPicker}
          toggleColorPicker={toggleColorPicker}
          handleColorChange={handleColorChange}
        />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
}
