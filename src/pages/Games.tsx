import Form from "../components/Games/Form";
import Cards from "../components/Games/Cards";
import { useState } from "react";

import { Container, Box } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Title from "../components/Title";
import StyleIcon from "@mui/icons-material/Style";
import { useTheme } from "@mui/material/styles";

import { Card } from "../components/Games/Cards";

export default function App() {
  const theme = useTheme();
  const [cards, setCards] = useState<Card[]>([]);
  const handleFormSubmit = (newCard: Card) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const deleteCard = (id: string) => {
    setCards((prevCards) => {
      const filteredCards = prevCards.filter((card: Card) => card.id !== id);
      return filteredCards;
    });
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
        <Title icon={SportsEsportsIcon} title="Registration Form" />
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
        <Cards cards={cards} onDelete={deleteCard} />
      </Container>
    </Box>
  );
}
