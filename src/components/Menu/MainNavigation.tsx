import { useState, useEffect } from "react";
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
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setValue(location.pathname); // update the value of the tab when the path changes
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
