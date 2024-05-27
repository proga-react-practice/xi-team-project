import { Box, Container, TextField } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Title from "../components/Title";
import StyleIcon from "@mui/icons-material/Style";
import { useTheme } from "@mui/material/styles";
import Form from "../components/Games/Form";
import CardsList from "../components/Games/Cards";
import { CardsProvider } from "../components/context/GamesCardsContextProvider";
import { HEADER_HEIGHT } from "../constants";
import { useGamesCardsContext } from "../components/context/useGamesCardsContext";

const GamesContent = () => {
  const theme = useTheme();
  const { searchQuery, setSearchQuery, searchTerms, setSearchTerms } =
    useGamesCardsContext();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Split the query into words and phrases
    const terms = query.split(";");
    setSearchTerms(terms ? terms.map((term) => term.trim()) : []);
  };

  return (
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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: "flex-start",
            gap: { xs: 0, sm: 0, md: 2 },
            alignItems: "center",
            marginBottom: { xs: 2, sm: 2, md: 0 },
          }}
        >
          <Title icon={StyleIcon} title="Submitted Cards" />
          <TextField
            label="Search Card"
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ width: { xs: "90%", sm: "90%", md: "auto" } }}
          />
        </Box>
        <CardsList searchTerms={searchTerms} />
      </Container>
    </Box>
  );
};

export default function Games() {
  return (
    <CardsProvider>
      <GamesContent />
    </CardsProvider>
  );
}
