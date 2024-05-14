import Form from "../components/AI/Form/Form";
import Cards from "../components/AI/Cards";
import { useState } from "react";
import { AI } from "../components/AI/Form/Form";
import { Container, Box } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Title from "../components/Title";
import StyleIcon from "@mui/icons-material/Style";
import { useTheme } from "@mui/material/styles";
import { nanoid } from "nanoid";

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
    if (index !== -1) {
      console.log(formData[index]);
    }
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
  return (
    <Box
      sx={{
        flexDirection: { xs: "column", sm: "column", md: "row" },
        display: "flex",
        justifyContent: "space-between",
        bgcolor: theme.palette.background.default,
        width: "100vw",
        minHeight: "calc(100vh - 64px)",
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
          submitButtonText={editingCard !== null ? "Update" : "Add"}
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
        <Title icon={StyleIcon} title="Submitted Cards" />
        <Cards
          cards={formData}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onReorder={handleReorder}
        />
      </Container>
    </Box>
  );
}
