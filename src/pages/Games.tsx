import { Box, Container } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Title from "../components/Title";
import StyleIcon from "@mui/icons-material/Style";
import { useTheme } from "@mui/material/styles";
import Form from "../components/Games/Form";
import { Cards } from "../components/Games/Cards";
import { CardsProvider } from "../components/context/GamesCardsContextProvider";
import { HEADER_HEIGHT } from "../constants";

export default function Games() {
  const theme = useTheme();

  return (
    <CardsProvider>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "space-between",
          backgroundColor: theme.palette.background.default,
          minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
        }}
      >
        <Container
          sx={{
            width: { xs: "100%", md: "35%" },
            padding: theme.spacing(2),
            boxSizing: "border-box",
          }}
        >
          <Title icon={SportsEsportsIcon} title="Registration Form" />
          <Form />
        </Container>
        <Container
          sx={{
            width: { xs: "100%", md: "60%" },
            padding: theme.spacing(2),
            boxSizing: "border-box",
          }}
        >
          <Title icon={StyleIcon} title="Submitted Cards" />
          <Cards />
        </Container>
      </Box>
    </CardsProvider>
  );
}
