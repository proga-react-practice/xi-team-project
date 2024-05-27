import { INPUT_DATA_ASSETS, RANGE_OPTIONS } from "../inputDataAssets";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button } from "@mui/material";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useTheme } from "@mui/material/styles";
import CustomSlider from "../../ScrollContainer";
import { useState, useEffect } from "react";
import { useAICardsContext } from "../../context/useAICardsContext";
import { CardsInfo } from "../../Cards/CardsInfo";
import BasisCard from "../../Cards/BasisCard";

interface ICardsProps {
  searchTerms: string[];
}

export default function Cards({ searchTerms }: ICardsProps) {
  const theme = useTheme();
  const { AICards, deleteCard, setEditingCard, reorderCards, editingCard } =
    useAICardsContext();

  const [cardsState, setCards] = useState(AICards);
  useEffect(() => {
    setCards(AICards);
  }, [AICards]);
  const [dragItemIndex, setDragItemIndex] = useState<number | undefined>();
  const [dragOverItemIndex, setDragOverItemIndex] = useState<
    number | undefined
  >();

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
      typeof dragItemIndex === "number" &&
      typeof dragOverItemIndex === "number"
    ) {
      const _cards = [...cardsState];
      const dragItem = _cards[dragItemIndex];
      const dragOverItem = _cards[dragOverItemIndex];
      _cards[dragItemIndex] = dragOverItem;
      _cards[dragOverItemIndex] = dragItem;
      setCards(_cards);
      reorderCards(_cards);
      setDragItemIndex(undefined);
      setDragOverItemIndex(undefined);
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
        {AICards.filter((card) =>
          searchTerms.every((term) =>
            JSON.stringify(card).toLowerCase().includes(term)
          )
        ).map((card, index) => (
          <CSSTransition key={index} timeout={500} classNames="card">
            {/* TODO: This Box can be reused (in Games Cards too) */}
            <BasisCard
              sx={{
                "& > *:not(.MuiButton-root)": {
                  pointerEvents: "auto",
                },
              }}
            >
              <Box
                draggable
                onTouchStart={(event: React.TouchEvent<HTMLDivElement>) =>
                  handleTouchStart(event, index)
                }
                onTouchEnd={(event: React.TouchEvent<HTMLDivElement>) =>
                  handleTouchEnd(event, index)
                }
                onDragStart={() => handleDragStart(index)}
                onDragOver={(event: React.DragEvent<HTMLDivElement>) =>
                  handleDragOver(event, index)
                }
                onDrop={handleDrop}
                sx={{
                  cursor: dragItemIndex === index ? "grabbing" : "grab",
                }}
              >
                <CardsInfo
                  title={INPUT_DATA_ASSETS[0].label}
                  info={card.levelOfAI}
                />
                <CardsInfo
                  title={INPUT_DATA_ASSETS[1].label}
                  info={card.whereAIIsUsed}
                />
                <CardsInfo
                  title={INPUT_DATA_ASSETS[2].label}
                  info={card.TypeOfAI}
                />
                <CardsInfo
                  title={RANGE_OPTIONS[0].label}
                  info={card.rateAIIntelligence.toString()}
                />
              </Box>
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
                  endIcon={
                    editingCard?.id === AICards[index].id ? (
                      <ClearIcon />
                    ) : (
                      <EditIcon />
                    )
                  }
                  onClick={() => {
                    editingCard?.id === AICards[index].id
                      ? setEditingCard(null)
                      : setEditingCard(AICards[index]);
                  }}
                  sx={{
                    marginRight: 3,
                    width: {
                      xs: theme.spacing(13),
                      sm: theme.spacing(16),
                      lg: theme.spacing(18),
                    },
                  }}
                >
                  {editingCard?.id === AICards[index].id ? "Cancel" : "Edit"}
                </Button>
                <Button
                  variant="contained"
                  endIcon={<DeleteIcon />}
                  onClick={() => deleteCard(card.id)}
                  sx={{
                    width: {
                      xs: theme.spacing(16),
                      sm: theme.spacing(20),
                      lg: theme.spacing(24),
                    },
                  }}
                >
                  Delete
                </Button>
              </Box>
            </BasisCard>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </CustomSlider>
  );
}
