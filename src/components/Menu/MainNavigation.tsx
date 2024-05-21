import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Tab,
  Tabs,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import SportsIcon from "@mui/icons-material/SportsEsports";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import { useTheme } from "@mui/material/styles";
import { tabs } from "./Tabs";
import { darkTheme } from "../../theme";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { SketchPicker, ColorResult } from "react-color";

type Theme = typeof darkTheme;

type MainNavigationProps = {
  onThemeChange: () => void;
  currentTheme: Theme;
  showColorPicker: boolean;
  toggleColorPicker: () => void;
  handleColorChange: (newColor: ColorResult) => void;
};

export default function MainNavigation({
  onThemeChange,
  currentTheme,
  showColorPicker,
  toggleColorPicker,
}: // handleColorChange,
MainNavigationProps) {
  const theme = useTheme();
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedColor, setSelectedColor] = useState("#ffffff"); // Change 'color' to 'selectedColor'

  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  const handleChange = (_: React.ChangeEvent<unknown>, newValue: string) => {
    setValue(newValue);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget as HTMLElement);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          bgcolor: theme.palette.background.paper,
        }}
      >
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              sx={{ mr: 1 }}
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <SportsIcon />
            <Box sx={{ flexGrow: 1 }} />
            <IconButton color="inherit" onClick={onThemeChange}>
              {currentTheme === darkTheme ? (
                <DarkModeIcon />
              ) : (
                <LightModeIcon />
              )}
            </IconButton>
            <SmartToyIcon />
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              sx={{
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1,
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              {tabs.map((item) => (
                <MenuItem key={item.value} component={NavLink} to={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <>
            <SportsIcon />
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              sx={{
                flexGrow: 1,
                "& .MuiTab-root": {
                  mx: { sm: 0.5, md: 4, lg: 8, xl: 16 },
                },
                "& .MuiTabs-indicator": {
                  display: "none",
                },
              }}
            >
              {tabs.map((tab) => (
                <Tab
                  key={tab.value}
                  label={tab.label}
                  value={tab.value}
                  component={NavLink}
                  to={tab.value}
                />
              ))}
            </Tabs>
            <ColorLensIcon onClick={toggleColorPicker} />
            {showColorPicker && (
              <SketchPicker
                color={selectedColor} // Change this to selectedColor
                onChangeComplete={(color: ColorResult) =>
                  setSelectedColor(color.hex)
                }
              />
            )}
            <IconButton color="inherit" onClick={onThemeChange}>
              {currentTheme === darkTheme ? (
                <DarkModeIcon />
              ) : (
                <LightModeIcon />
              )}
            </IconButton>
            <SmartToyIcon />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
