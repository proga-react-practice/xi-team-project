import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import { useGamesCardsContext } from "../context/useGamesCardsContext";
import CustomSlider from "../ScrollContainer";
import { CardsInfo } from "../Cards/CardsInfo";
import { CardInfoMix } from "../Cards/CardsInfoMix";
import { ModalCardBox } from "../Cards/ModalCardBox";
import BasisCard from "../Cards/BasisCard";

export interface Card {
  id: string;
  name: string;
  difficulty: string;
  price: number;
  currency: string;
}

export const CardComponent: React.FC<{ card: Card }> = ({ card }) => {
  const theme = useTheme();
  const { deleteCard, setEditingCard } = useGamesCardsContext();

  return (
    <BasisCard>
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
    </BasisCard>
  );
};

interface ICardsProps {
  searchTerms: string[];
}

export default function CardsList({ searchTerms }: ICardsProps) {
  const { cards, reorderCards } = useGamesCardsContext();
  const [dragItemIndex, setDragItemIndex] = useState<number | null>(null);
  const [dragOverItemIndex, setDragOverItemIndex] = useState<number | null>(
    null
  );
  const [cardsState, setCardsState] = useState(cards);

  useEffect(() => {
    setCardsState(cards);
  }, [cards]);

  const handleTouchStart = (
    _event: React.TouchEvent<HTMLDivElement>,
    index: number
  ) => {
    setDragItemIndex(index);
  };

  const handleTouchEnd = (
    _event: React.TouchEvent<HTMLDivElement>,
    index: number
  ) => {
    setDragOverItemIndex(index);
    handleDrop();
  };

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
      const dragItem = updatedCards[dragItemIndex];
      const dragOverItem = updatedCards[dragOverItemIndex];
      updatedCards[dragItemIndex] = dragOverItem;
      updatedCards[dragOverItemIndex] = dragItem;
      setCardsState(updatedCards);
      reorderCards(updatedCards);
      setDragItemIndex(null);
      setDragOverItemIndex(null);
    }
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
                onTouchStart={(event: React.TouchEvent<HTMLDivElement>) =>
                  handleTouchStart(event, index)
                }
                onTouchEnd={(event: React.TouchEvent<HTMLDivElement>) =>
                  handleTouchEnd(event, index)
                }
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
  return (
    <ModalCardBox>
      <CardInfoMix title="Name of the Game" info={card.name} />
      <CardInfoMix title="Difficulty" info={card.difficulty} />
      <CardInfoMix
        title="Price"
        info={card.price.toString() + " " + card.currency}
      />
    </ModalCardBox>
  );
};
