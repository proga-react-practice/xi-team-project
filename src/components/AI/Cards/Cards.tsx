import { INPUT_DATA_ASSETS, RANGE_OPTIONS } from "../inputDataAssets";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Chip, Container, Typography } from "@mui/material";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useTheme } from "@mui/material/styles";
import CustomSlider from "../../ScrollContainer";
import { useState, useEffect } from "react";
import { useAICardsContext } from "../../context/AICardsContextProvider";

interface ICardsInfoProps {
  title: string;
  info: string | string[];
}
export const CardsInfo: React.FC<ICardsInfoProps> = ({ title, info }) => {
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

  const handleDragEnter = (index: number) => {
    setDragOverItemIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverItemIndex(undefined);
  };

  const handleDragEnd = () => {
    setDragItemIndex(undefined);
    setDragOverItemIndex(undefined);
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
          searchTerms.every((term) => JSON.stringify(card).includes(term))
        ).map((card, index) => (
          <CSSTransition key={index} timeout={500} classNames="card">
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
                  bottom: {
                    xs: theme.spacing(1),
                    md: theme.spacing(0.875),
                    lg: theme.spacing(1),
                  },
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
                onDragEnter={() => handleDragEnter(index)}
                onDragLeave={handleDragLeave}
                onDragEnd={handleDragEnd}
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
                    marginRight: 2.5,
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
            </Box>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </CustomSlider>
  );
}
