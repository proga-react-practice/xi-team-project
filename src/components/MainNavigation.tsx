import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Tab, Tabs } from "@mui/material";
import SportsIcon from "@mui/icons-material/SportsEsports";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { useTheme } from "@mui/material/styles";

export default function MainNavigation() {
  const theme = useTheme();
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

  const handleChange = (_: React.ChangeEvent<unknown>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          bgcolor: theme.palette.background.paper,
        }}
      >
        <SportsIcon />
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={{
            // flexGrow: 1,
            "& .MuiTab-root": {
              mx: 16,
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab label="Home" value="/" component={NavLink} to="/" />
          <Tab
            label="Artificial Intelligence"
            value="/AI"
            component={NavLink}
            to="/AI"
          />
          <Tab label="Games" value="/games" component={NavLink} to="/games" />
        </Tabs>
        <SmartToyIcon />
      </Toolbar>
    </AppBar>
  );
}
