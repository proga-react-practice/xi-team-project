import { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Title from "../components/Title";
import StyleIcon from "@mui/icons-material/Style";
import { useTheme } from "@mui/material/styles";

import Form from "../components/Games/Form";
import Cards, { Card } from "../components/Games/Cards";
import { CardsContext } from "../components/context/contextGames";
// import Footer from "../components/Footer";

const LOCAL_STORAGE_KEY = "cards";

export default function App() {
  const theme = useTheme();
  const [cards, setCards] = useState<Card[]>(() => {
    // Load initial state from local storage
    const savedCards = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedCards ? JSON.parse(savedCards) : [];
  });
  const [editingCard, setEditingCard] = useState<Card | null>(null);

  useEffect(() => {
    // Save cards to local storage whenever it changes
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cards));
  }, [cards]);

  const handleFormSubmit = (newCard: Card) => {
    if (editingCard) {
      const updatedCards = cards.map((card) =>
        card.id === editingCard.id ? newCard : card
      );
      setCards(updatedCards);
      setEditingCard(null);
    } else {
      setCards((prevCards) => [...prevCards, newCard]);
    }
  };

  const deleteCard = (id: string) => {
    setCards((prevCards) => prevCards.filter((card: Card) => card.id !== id));
  };

  return (
    <>
      <Box
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row" },
          display: "flex",
          justifyContent: "space-between",
          bgcolor: theme.palette.background.default,
          // TODO fix layout
          width: "98.9vw",
          maxWidth: "100%",
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
          <Form
            onSubmit={handleFormSubmit}
            editCard={editingCard}
            onCancel={() => setEditingCard(null)}
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
          <CardsContext.Provider value={cards}>
            <Cards
              // cards={cards}
              onDelete={deleteCard}
              handleEdit={(card) => setEditingCard(card)}
            />
          </CardsContext.Provider>
        </Container>
      </Box>
    </>
  );
}
