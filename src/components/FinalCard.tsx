import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { CardsInfo as CardsInfoGames } from "../components/Games/Cards";
import { MixedCard } from "./context/GamesCardsContextProvider";

const FinalCard: React.FC<{ mixedCard: MixedCard }> = ({ mixedCard }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        overflowY: "auto",
        maxHeight: "75vh",
      }}
    >
      // TODO update card style
      {mixedCard && (
        <TransitionGroup>
          <CSSTransition key={mixedCard.id} timeout={500} classNames="card">
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
              <CardsInfoGames title="Name of the Game" info={mixedCard.name} />
              <CardsInfoGames title="Difficulty" info={mixedCard.difficulty} />
              <CardsInfoGames
                title="Price"
                info={mixedCard.price.toString() + " " + mixedCard.currency}
              />
              <CardsInfoGames
                title="Level of AI"
                info={mixedCard.levelOfAI ? mixedCard.levelOfAI.join(", ") : ""}
              />
              <CardsInfoGames
                title="Where AI is used"
                info={
                  mixedCard.whereAIIsUsed
                    ? mixedCard.whereAIIsUsed.join(", ")
                    : ""
                }
              />
              <CardsInfoGames
                title="Type of AI"
                info={mixedCard.TypeOfAI ? mixedCard.TypeOfAI : ""}
              />
              <CardsInfoGames
                title="AI intelligence"
                info={
                  mixedCard.rateAIIntelligence !== undefined
                    ? mixedCard.rateAIIntelligence.toString()
                    : ""
                }
              />
            </Box>
          </CSSTransition>
        </TransitionGroup>
      )}
    </Box>
  );
};

export default FinalCard;
