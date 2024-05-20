import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  CardsProvider,
  MixedCard,
  useCardsContext,
} from "../components/context/CardsContextProvider";
import Cards from "../components/AI/Cards";
import { AI } from "../components/AI/Form/Form";
import FinalCard from "../components/FinalCard";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "90vh",
  overflowY: "auto",
};

function MixCardsContent() {
  const theme = useTheme();
  const { cards } = useCardsContext();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [mixedCards, setMixedCards] = useState<MixedCard[]>([]); // State to store the list of mixed cards

  const [selectedCardGames, setSelectedCardGames] = useState<string | null>(
    null
  );
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const dummyFormData: AI[] = [
    {
      id: "1",
      levelOfAI: ["Card 1"],
      whereAIIsUsed: ["some1"],
      TypeOfAI: "type1",
      rateAIIntelligence: 1,
    },
    {
      id: "2",
      levelOfAI: ["Card 2"],
      whereAIIsUsed: ["some2dhwuidhuiqwhduiqwhui"],
      TypeOfAI: "type2",
      rateAIIntelligence: 2,
    },
    {
      id: "3",
      levelOfAI: ["Card 3", "Card 4", "Card 4"],
      whereAIIsUsed: ["some3", "Card 4", "Card 4"],
      TypeOfAI: "type3",
      rateAIIntelligence: 3,
    },
    {
      id: "4",
      levelOfAI: ["Card 4", "Card 4", "Card 4", "Card 4"],
      whereAIIsUsed: ["some4"],
      TypeOfAI: "type4",
      rateAIIntelligence: 4,
    },
  ];

  const handleDummyDelete = (index: number) => {
    console.log("Delete card with index:", index);
  };

  const handleDummyEdit = (ai: AI) => {
    console.log("Edit card:", ai);
  };

  const handleDummyReorder = (newOrder: AI[]) => {
    console.log("Reorder cards:", newOrder);
  };

  const handleRadioChangeGames = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedCardGames(event.target.value);
  };

  const handleRadioChangeAI = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCard(event.target.value);
  };

  const mix = () => {
    if (!selectedCardGames || !selectedCard) {
      console.log("Please select at least one card to mix.");
      return;
    }

    const selectedGameCard = cards.find(
      (card) => card.id === selectedCardGames
    );
    const selectedAICard = dummyFormData.find(
      (card) => card.id === selectedCard
    );

    if (selectedGameCard && selectedAICard) {
      console.log("Mixing:", selectedGameCard.id, "with", selectedAICard.id);

      const mixedCardData = {
        ...selectedGameCard,
        levelOfAI: selectedAICard.levelOfAI,
        whereAIIsUsed: selectedAICard.whereAIIsUsed,
        TypeOfAI: selectedAICard.TypeOfAI,
        rateAIIntelligence: selectedAICard.rateAIIntelligence,
      };

      setMixedCards((prevMixedCards) => [...prevMixedCards, mixedCardData]);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        py: 3,
        px: { xs: 2, sm: 5, md: 10 },
      }}
    >
      <Box>
        <Button onClick={handleOpen}>Add Cards</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Container
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Container>
                <RadioGroup
                  aria-label="games-cards"
                  name="games-cards"
                  value={selectedCardGames}
                  onChange={handleRadioChangeGames}
                >
                  {cards.map((card) => (
                    <FormControlLabel
                      key={card.id}
                      value={card.id}
                      control={<Radio />}
                      label={card.name}
                    />
                  ))}
                </RadioGroup>
              </Container>
              <Container>
                <RadioGroup
                  aria-label="ai-cards"
                  name="ai-cards"
                  value={selectedCard}
                  onChange={handleRadioChangeAI}
                >
                  {dummyFormData.map((card, index) => (
                    <FormControlLabel
                      key={card.id}
                      value={card.id}
                      control={<Radio />}
                      label={
                        <Cards
                          cards={[card]}
                          onDelete={() => handleDummyDelete(index)}
                          onEdit={() => handleDummyEdit(card)}
                          onReorder={handleDummyReorder}
                        />
                      }
                    />
                  ))}
                </RadioGroup>
              </Container>
            </Container>
            <Button onClick={mix}>Mix Selected Cards</Button>
          </Box>
        </Modal>
        <Typography>Final Cards</Typography>
      </Box>
      {mixedCards.map((card, index) => (
        <FinalCard key={index} mixedCard={card} />
      ))}
    </Box>
  );
}

export default function MixCards() {
  return (
    <CardsProvider>
      <MixCardsContent />
    </CardsProvider>
  );
}
