import React from "react";
import { Box, Button, Container, Modal } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Cards as CardsGames } from "../components/Games/Cards"; // Import Cards component
import { CardsProvider } from "../components/context/CardsContextProvider";
import Cards from "../components/AI/Cards";
import { AI } from "../components/AI/Form/Form";
// import {formData, handleDelete, handleEdit, handleReorder} from "./AI";

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
};

export default function MixCards() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  // Dummy functions for handling card interactions
  const handleDummyDelete = (index: number) => {
    console.log("Delete card with index:", index);
  };

  const handleDummyEdit = (ai: AI) => {
    console.log("Edit card:", ai);
  };

  const handleDummyReorder = (newOrder: AI[]) => {
    console.log("Reorder cards:", newOrder);
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
            <CardsProvider>
              <Container
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Container>
                  <CardsGames />
                </Container>
                <Container>
                  <Cards
                    cards={dummyFormData}
                    onDelete={handleDummyDelete}
                    onEdit={handleDummyEdit}
                    onReorder={handleDummyReorder}
                  />
                </Container>
              </Container>
            </CardsProvider>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}
