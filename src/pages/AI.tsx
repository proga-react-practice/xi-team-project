import Form from "../components/AI/Form/Form";
import Cards from "../components/AI/Cards";
import { useState } from "react";
import { AI } from "../components/AI/Form/Form";
import { Container, Box, TextField } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Title from "../components/Title";
import StyleIcon from "@mui/icons-material/Style";
import { useTheme } from "@mui/material/styles";
import { nanoid } from "nanoid";
import { HEADER_HEIGHT } from "../constants";

export default function App() {
  const theme = useTheme();
  const [formData, setFormData] = useState<AI[]>([]);
  const [editingCard, setEditingCard] = useState<number | null>(null);

  const handleDelete = (index: number) => {
    setFormData((prevCards) => prevCards.filter((_, i) => i !== index));
    if (index === editingCard) {
      setEditingCard(null);
    }
  };

  const handleEdit = (ai: AI) => {
    const index = formData.findIndex((card) => card.id === ai.id);
    setEditingCard(index);
  };

  const handleCancelEdit = () => {
    setEditingCard(null);
  };

  const handleReorder = (newOrder: AI[]) => {
    setFormData(newOrder);
  };

  const handleFormSubmit = (newData: AI) => {
    if (editingCard !== null) {
      setFormData((prevCards) =>
        prevCards.map((card, i) => (i === editingCard ? newData : card))
      );
    } else {
      setFormData((prevCards) => [...prevCards, { ...newData, id: nanoid() }]);
    }

    setEditingCard(null);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerms, setSearchTerms] = useState<string[]>([]);

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
          paddingLeft: { xs: 0, md: 2, lg: 3 },
          paddingRight: { xs: 0, md: 2, lg: 3 },
        }}
      >
        <Title icon={SmartToyIcon} title="Registration Form" />
        <Form
          onSubmit={handleFormSubmit}
          editCard={editingCard}
          initialData={editingCard !== null ? formData[editingCard] : undefined}
        />
      </Container>
      <Container
        sx={{
          minWidth: { md: "40%", lg: "59%" },
          maxWidth: { md: "100%", lg: "70%" },
          flexGrow: 1,
          paddingLeft: { xs: 0, md: 2, lg: 3 },
          paddingRight: { xs: 0, md: 2, lg: 3 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: "flex-start",
            gap: { xs: 0, sm: 0, md: 2 },
            alignItems: "center",
            marginBottom: { xs: 2, sm: 0 },
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
        <Cards
          cards={formData}
          searchTerms={searchTerms}
          editCard={editingCard}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onCancel={handleCancelEdit}
          onReorder={handleReorder}
        />
      </Container>
    </Box>
  );
}
