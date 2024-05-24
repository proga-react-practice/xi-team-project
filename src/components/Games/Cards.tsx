import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { Container, Typography, Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import { useCardsContext } from "../context/GamesCardsContextProvider";
import CustomSlider from "../ScrollContainer";

export interface Card {
  id: string;
  name: string;
  difficulty: string;
  price: number;
  currency: string;
}

interface CardsInfoProps {
  title: string;
  info: string;
}

export const CardsInfo: React.FC<CardsInfoProps> = ({ title, info }) => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "baseline",
        gap: 2,
        flexDirection: "row",
        marginBottom: 2,
      }}
    >
      <Typography
        variant="h4"
        color="text.primary"
        sx={{
          width: { xs: "5em", sm: "14.6em", md: "6.7em", lg: "14.6em" },
          textAlign: "right",
          flexShrink: 0,
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {Array.isArray(info) ? (
          info.map((option, index) => (
            <Chip
              key={index}
              label={option}
              sx={{
                margin: theme.spacing(0, 0.5),
                display: "flex",
              }}
            />
          ))
        ) : (
          <Chip
            label={info}
            sx={{
              margin: theme.spacing(0, 0.5),
              padding: { xs: 0.5, sm: 1, md: 1.5 },
            }}
          />
        )}
      </Box>
    </Container>
  );
};

export const CardComponent: React.FC<{ card: Card }> = ({ card }) => {
  const theme = useTheme();
  const { deleteCard, setEditingCard } = useCardsContext();

  return (
    <Box
      sx={{
        flexDirection: "column",
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: { md: 0, lg: 2 },
        paddingRight: { md: 0, lg: 2 },
        maxWidth: { md: "90%", lg: "80%" },
        border: "2px solid",
        borderColor: theme.palette.text.primary,
        py: 2.5,
        borderRadius: 2,
        position: "relative",
        marginBottom: 5,
        bgcolor: "background.paper",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: theme.spacing(1),
          left: {
            xs: theme.spacing(1),
            sm: theme.spacing(2),
            md: theme.spacing(4),
          },
          right: {
            xs: theme.spacing(0.7),
            sm: theme.spacing(1),
            md: theme.spacing(2),
          },
          height: "2px",
          backgroundColor: theme.palette.text.primary,
        },
      }}
    >
      <CardsInfo title="Name of the Game" info={card.name} />
      <CardsInfo title="Difficulty" info={card.difficulty} />
      <CardsInfo
        title="Price"
        info={card.price.toString() + " " + card.currency}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: {
            xs: 2,
            sm: 4,
            md: 6,
          },
          marginBottom: -6,
        }}
      >
        <Button
          variant="contained"
          endIcon={<EditIcon />}
          onClick={() => setEditingCard(card)}
          sx={{
            width: {
              xs: theme.spacing(16.5),
              sm: theme.spacing(20),
              md: theme.spacing(25),
            },
            marginRight: 3,
          }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          endIcon={<ClearIcon />}
          onClick={() => deleteCard(card.id)}
          sx={{
            width: {
              xs: theme.spacing(16.5),
              sm: theme.spacing(20),
              md: theme.spacing(25),
            },
          }}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

interface ICardsProps {
  searchTerms: string[];
}

export default function CardsList({ searchTerms }: ICardsProps) {
  const { cards, reorderCards } = useCardsContext();
  const [dragItemIndex, setDragItemIndex] = useState<number | null>(null);
  const [dragOverItemIndex, setDragOverItemIndex] = useState<number | null>(
    null
  );
  const [cardsState, setCardsState] = useState(cards);

  useEffect(() => {
    setCardsState(cards);
  }, [cards]);

  const handleDragStart = (index: number) => {
    setDragItemIndex(index);
  };

  const handleDragOver = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    event.preventDefault();
    setDragOverItemIndex(index);
  };

  const handleDrop = () => {
    if (
      dragItemIndex !== null &&
      dragOverItemIndex !== null &&
      dragItemIndex !== dragOverItemIndex
    ) {
      const updatedCards = [...cardsState];
      const [draggedItem] = updatedCards.splice(dragItemIndex, 1);
      updatedCards.splice(dragOverItemIndex, 0, draggedItem);

      setCardsState(updatedCards);
      reorderCards(updatedCards);
    }
    setDragItemIndex(null);
    setDragOverItemIndex(null);
  };

  return (
    <CustomSlider
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        overflowY: { sm: "none", md: "auto" },
        maxHeight: { sm: "auto", md: "75vh" },
      }}
    >
      <TransitionGroup>
        {cardsState
          .filter((card) =>
            searchTerms.every((term) =>
              JSON.stringify(card).toLowerCase().includes(term.toLowerCase())
            )
          )
          .map((card, index) => (
            <CSSTransition key={card.id} timeout={500} classNames="card">
              <Box
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(event) => handleDragOver(event, index)}
                onDrop={handleDrop}
                sx={{
                  cursor: dragItemIndex === index ? "grabbing" : "grab",
                }}
              >
                <CardComponent card={card} />
              </Box>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </CustomSlider>
  );
}

export const CardComponentMix: React.FC<{ card: Card }> = ({ card }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flexDirection: "column",
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: { md: 1, lg: 2 },
        paddingRight: { md: 0, lg: 8 },
        maxWidth: { md: "90%", lg: "80%" },
        border: "2px solid",
        borderColor: theme.palette.text.primary,
        py: 2.5,
        borderRadius: 2,
        position: "relative",
        marginBottom: 5,
        bgcolor: "background.paper",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: theme.spacing(1),
          left: {
            xs: theme.spacing(1),
            sm: theme.spacing(2),
            md: theme.spacing(4),
          },
          right: {
            xs: theme.spacing(0.7),
            sm: theme.spacing(1),
            md: theme.spacing(2),
          },
          height: "2px",
          backgroundColor: theme.palette.text.primary,
        },
      }}
    >
      <CardsInfo title="Name of the Game" info={card.name} />
      <CardsInfo title="Difficulty" info={card.difficulty} />
      <CardsInfo
        title="Price"
        info={card.price.toString() + " " + card.currency}
      />
    </Box>
  );
};
