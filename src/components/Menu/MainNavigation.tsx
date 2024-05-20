import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Tab,
  Tabs,
  useMediaQuery,
  IconButton,
  MenuItem,
  Box,
  Drawer,
} from "@mui/material";
import SportsIcon from "@mui/icons-material/SportsEsports";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import { useTheme } from "@mui/material/styles";
import { tabs } from "./Tabs";
import { darkTheme } from "../../theme";

type MainNavigationProps = {
  onThemeChange: () => void;
  currentTheme: string;
};

export default function MainNavigation({
  onThemeChange,
  currentTheme,
}: MainNavigationProps) {
  const theme = useTheme();
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setValue(location.pathname); // update the value of the tab when the path changes
  }, [location.pathname]);

  const handleChange = (_: React.ChangeEvent<unknown>, newValue: string) => {
    setValue(newValue);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          bgcolor: theme.palette.background.paper,
          minHeight: 64,
        }}
      >
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              sx={{ mr: 1 }}
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <IconButton component={NavLink} to={tabs[1].value} color="inherit">
              <SportsIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton component={NavLink} to={tabs[2].value} color="inherit">
              <SmartToyIcon />
            </IconButton>
            <IconButton color="inherit" onClick={onThemeChange}>
              {currentTheme === darkTheme ? (
                <DarkModeIcon />
              ) : (
                <LightModeIcon />
              )}
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={handleDrawerClose}
              PaperProps={{
                sx: {
                  padding: 2,
                },
              }}
            >
              {tabs.map((item) => (
                <MenuItem
                  key={item.value}
                  component={NavLink}
                  to={item.value}
                  onClick={handleDrawerClose}
                  sx={{
                    margin: 1,
                    borderRadius: 1,
                    border: value === item.value ? "1px solid" : "none",
                    bgcolor:
                      value === item.value ? "primary.main" : "transparent",
                    fontWeight: value === item.value ? "bold" : "600",
                  }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Drawer>
          </>
        ) : (
          <>
            <IconButton component={NavLink} to={tabs[1].value} color="inherit">
              <SportsIcon />
            </IconButton>
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

            <IconButton component={NavLink} to={tabs[2].value} color="inherit">
              <SmartToyIcon />
            </IconButton>
            <IconButton color="inherit" onClick={onThemeChange}>
              {currentTheme === darkTheme ? (
                <DarkModeIcon />
              ) : (
                <LightModeIcon />
              )}
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
