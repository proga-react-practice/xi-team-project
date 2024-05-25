import SadIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SadlyIcon from "@mui/icons-material/SentimentDissatisfied";
import { Typography, Box, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { HEADER_HEIGHT } from "../constants";

export default function ErrorPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  // TODO update animation
  const [icon, setIcon] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      setIcon((prevIcon) => !prevIcon);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const IconComponent = icon ? SadIcon : SadlyIcon;

  return (
    <Box
      sx={{
        justifyContent: "center",
        bgcolor: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
        alignItems: "center",
      }}
    >
      <IconComponent
        sx={{
          fontSize: 100,
          height: matches ? "1.5em" : "2em",
          width: matches ? "1.5em" : "2em",
          color: theme.palette.text.primary,
        }}
      />
      <Box
        sx={{
          bgcolor: theme.palette.background.paper,
          borderRadius: 2,
          border: "2px solid",
          borderColor: theme.palette.text.primary,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            my: 2,
            textAlign: "center",
          }}
        >
          Page not found
        </Typography>
        <Typography
          sx={{
            marginTop: 1,
            marginBottom: 2,
            maxWidth: "400px",
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 2,
            border: "2px solid",
            padding: 1,
            bgcolor: theme.palette.background.default,
          }}
          variant="body1"
        >
          Apologies, but the page you were looking for wasn't found. Try to
          click on the menu to navigate to a different page or go back to the
          home page by clicking button below.
        </Typography>
        <Button variant="contained" onClick={() => navigate("/")}>
          Go to Home
        </Button>
      </Box>
    </Box>
  );
}
