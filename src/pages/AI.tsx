import Form from "../components/AI/Form/Form";
import Cards from "../components/AI/Cards";
import { useState } from "react";
import { AI } from "../components/AI/Form/Form";
import { Container, Box } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Title from "../components/Title";
import StyleIcon from "@mui/icons-material/Style";
import { useTheme } from "@mui/material/styles";

export default function App() {
  const theme = useTheme();
  const [formData, setFormData] = useState<AI[]>([]);
  const handleDelete = (index: number) => {
    setFormData((prevCards) => prevCards.filter((_, i) => i !== index));
  };

  const handleFormSubmit = (Ai: AI) => {
    setFormData([...formData, Ai]);
  };
  return (
    <Box
      sx={{
        flexDirection: { xs: "column", sm: "column", md: "row" },
        display: "flex",
        justifyContent: "space-between",
        bgcolor: theme.palette.background.default,
        width: "100vw",
        minHeight: "100vh",
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
        <Form onSubmit={handleFormSubmit} />
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
        <Cards cards={formData} onDelete={handleDelete} />
      </Container>
    </Box>
  );
}
