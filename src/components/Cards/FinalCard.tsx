import React from "react";
import { Box, Grid, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CardsInfo } from "./CardsInfo";
import { MixedCard } from "../context/GamesCardsContextProvider";
import DeleteIcon from "@mui/icons-material/Delete";

const FinalCard: React.FC<{
  mixedCard: MixedCard;
  index: number;
  handleTouchStart: (
    event: React.TouchEvent<HTMLDivElement>,
    index: number
  ) => void;
  handleTouchEnd: (
    event: React.TouchEvent<HTMLDivElement>,
    index: number
  ) => void;
  handleDragStart: (index: number) => void;
  handleDragOver: (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => void;
  handleDrop: () => void;
  dragItemIndex: number | undefined;
  deleteCard: (id: string) => void;
}> = ({
  mixedCard,
  index,
  handleTouchStart,
  handleTouchEnd,
  handleDragStart,
  handleDragOver,
  handleDrop,
  dragItemIndex,
  deleteCard,
}) => {
  const theme = useTheme();

  return (
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
      {/* TODO update card style */}
      {mixedCard && (
        <Box
          sx={{
            flexDirection: "column",
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: { md: 0, lg: 2 },
            paddingRight: { md: 0, lg: 2 },
            maxWidth: { md: "90%", lg: "40vw" },
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
          <Grid container spacing={2}>
            <Grid item>
              <CardsInfo title="Name of the Game" info={mixedCard.name} />
              <CardsInfo title="Difficulty" info={mixedCard.difficulty} />
              <CardsInfo
                title="Price"
                info={mixedCard.price.toString() + " " + mixedCard.currency}
              />
            </Grid>
            <Grid item>
              <CardsInfo title="Level of AI" info={mixedCard.levelOfAI} />
              <CardsInfo
                title="Where AI is used"
                info={mixedCard.whereAIIsUsed}
              />
              <CardsInfo title="Type of AI" info={mixedCard.TypeOfAI} />
              <CardsInfo
                title="AI intelligence"
                info={mixedCard.rateAIIntelligence.toString()}
              />
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: {
                xs: 3,
                sm: 5,
                md: 7,
              },
              marginBottom: -6,
            }}
          >
            <Button
              variant="contained"
              endIcon={<DeleteIcon />}
              onClick={() => deleteCard(mixedCard.id)}
              sx={{
                width: {
                  xs: theme.spacing(20),
                  sm: theme.spacing(25),
                  lg: theme.spacing(30),
                },
              }}
            >
              Delete
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default FinalCard;
