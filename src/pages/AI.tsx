import Form from "../components/AI/Form/Form";
import Cards from "../components/AI/Cards/Cards";
import { AI } from "../components/AI/Form/Form";
import { Container, Box, TextField } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Title from "../components/Title";
import StyleIcon from "@mui/icons-material/Style";
import { useTheme } from "@mui/material/styles";
import { nanoid } from "nanoid";
import { HEADER_HEIGHT } from "../constants";
import { useAICardsContext } from "../components/context/AICardsContextProvider";

export default function App() {
  const theme = useTheme();
  const {
    addCard,
    updateCard,
    editingCard,
    setEditingCard,
    searchQuery,
    setSearchQuery,
    searchTerms,
    setSearchTerms,
  } = useAICardsContext();
  const handleFormSubmit = (newData: AI) => {
    if (editingCard) {
      updateCard({ ...newData, id: editingCard.id });
    } else {
      addCard({ ...newData, id: nanoid() });
    }

    setEditingCard(null);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    const terms = query.toLowerCase().split(";");
    setSearchTerms(terms ? terms.map((term) => term.trim()) : []);
  };
  return (
    <Box
      sx={{
        flexDirection: { xs: "column", sm: "column", md: "row" },
        display: "flex",
        justifyContent: "space-between",
        bgcolor: theme.palette.background.default,
        minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
      }}
    >
      <Container
        sx={{
          width: { sm: "100%", md: "40%" },
          paddingLeft: theme.spacing(1),
          paddingRight: theme.spacing(1),
          marginBottom: 2,
        }}
      >
        <Title icon={SmartToyIcon} title="Registration Form" />
        <Form
          onSubmit={handleFormSubmit}
          editCard={editingCard ? editingCard.id : null}
          initialData={editingCard || undefined}
        />
      </Container>
      <Container
        sx={{
          minWidth: { md: "40%", lg: "59%" },
          maxWidth: { md: "100%", lg: "70%" },
          flexGrow: 1,
          paddingLeft: theme.spacing(1),
          paddingRight: theme.spacing(1),
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
        <Cards searchTerms={searchTerms} />
      </Container>
    </Box>
  );
}
