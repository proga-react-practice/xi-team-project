import React from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { CardsInfo as CardsInfoGames } from "../components/AI/Cards/Cards";
import { MixedCard } from "./context/GamesCardsContextProvider";

const FinalCard: React.FC<{ mixedCard: MixedCard }> = ({ mixedCard }) => {
  const theme = useTheme();

  return (
    <Box>
      {/* TODO update card style */}
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
                  <CardsInfoGames
                    title="Name of the Game"
                    info={mixedCard.name}
                  />
                  <CardsInfoGames
                    title="Difficulty"
                    info={mixedCard.difficulty}
                  />
                  <CardsInfoGames
                    title="Price"
                    info={mixedCard.price.toString() + " " + mixedCard.currency}
                  />
                </Grid>
                <Grid item>
                  <CardsInfoGames
                    title="Level of AI"
                    info={mixedCard.levelOfAI}
                  />
                  <CardsInfoGames
                    title="Where AI is used"
                    info={mixedCard.whereAIIsUsed}
                  />
                  <CardsInfoGames
                    title="Type of AI"
                    info={mixedCard.TypeOfAI}
                  />
                  <CardsInfoGames
                    title="AI intelligence"
                    info={mixedCard.rateAIIntelligence.toString()}
                  />
                </Grid>
              </Grid>
            </Box>
          </CSSTransition>
        </TransitionGroup>
      )}
    </Box>
  );
};

export default FinalCard;
