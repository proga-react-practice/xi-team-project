import React from "react";
import { AICard } from "../../context/AICardsContextProvider";
import { Box, Chip, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { INPUT_DATA_ASSETS, RANGE_OPTIONS } from "../inputDataAssets";

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
          width: { xs: "5em", sm: "5em", md: "5em", lg: "4.5em" },
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
        paddingRight: { md: 4, lg: 6 },
        maxWidth: { md: "90%", lg: "90%" },
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
