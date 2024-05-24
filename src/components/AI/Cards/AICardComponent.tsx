import React from "react";
import { AICard } from "../../context/AICardsContextProvider";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CardsInfo } from "./Cards";
import { INPUT_DATA_ASSETS, RANGE_OPTIONS } from "../inputDataAssets";

interface AICardComponentProps {
  card: AICard;
}

export const AICardComponent: React.FC<AICardComponentProps> = ({ card }) => {
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
      <CardsInfo title={INPUT_DATA_ASSETS[0].label} info={card.levelOfAI} />
      <CardsInfo title={INPUT_DATA_ASSETS[1].label} info={card.whereAIIsUsed} />
      <CardsInfo title={INPUT_DATA_ASSETS[2].label} info={card.TypeOfAI} />
      <CardsInfo
        title={RANGE_OPTIONS[0].label}
        info={card.rateAIIntelligence.toString()}
      />
    </Box>
  );
};
