import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Button,
  Container,
  FormControlLabel,
  Grid,
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
} from "../components/context/GamesCardsContextProvider";
import Cards from "../components/AI/Cards";
import { AI } from "../components/AI/Form/Form";
import FinalCard from "../components/FinalCard";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { CardComponentMix } from "../components/Games/Cards";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", sm: "90%", md: "90%" },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: { xs: "70vh", sm: "70vh", md: "80vh" },
  // maxHeight: "90vh",
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

  // TODO drop dummy values
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
  const handleDummyCancel = () => {
    console.log("Cancel cards");
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
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6">Games Cards</Typography>
                  <RadioGroup
                    aria-label="games-cards"
                    name="games-cards"
                    value={selectedCardGames}
                    onChange={handleRadioChangeGames}
                  >
                    {cards.map((card) => (
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ArrowDropDownIcon />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                        >
                          <Typography>{card.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <FormControlLabel
                            key={card.id}
                            value={card.id}
                            control={<Radio />}
                            label={<CardComponentMix card={card} />}
                          />
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </RadioGroup>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6">AI Cards</Typography>
                  <RadioGroup
                    aria-label="ai-cards"
                    name="ai-cards"
                    value={selectedCard}
                    onChange={handleRadioChangeAI}
                  >
                    {dummyFormData.map((card, index) => (
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ArrowDropDownIcon />}
                          aria-controls="panel2-content"
                          id="panel2-header"
                        >
                          <Typography>{`Card ${index + 1}`}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <FormControlLabel
                            key={card.id}
                            value={card.id}
                            control={<Radio />}
                            label={
                              // TODO add new card for this
                              <Cards
                                cards={[card]}
                                onDelete={() => handleDummyDelete(index)}
                                onEdit={() => handleDummyEdit(card)}
                                onReorder={handleDummyReorder}
                                onCancel={handleDummyCancel}
                              />
                            }
                          />
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </RadioGroup>
                </Grid>
              </Grid>
            </Container>
            <Box display="flex" justifyContent="center" mt={2}>
              <Button onClick={mix} variant="contained" color="primary">
                Mix Selected Cards
              </Button>
            </Box>
          </Box>
        </Modal>
        <Typography variant="h6" mt={2}>
          Final Cards
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {mixedCards.map((card, index) => (
          <Grid item xs={12} sm={12} md={12} key={index}>
            <FinalCard mixedCard={card} />
          </Grid>
        ))}
      </Grid>
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
