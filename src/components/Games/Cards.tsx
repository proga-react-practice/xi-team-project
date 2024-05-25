import React from "react";
import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import { useGamesCardsContext } from "../context/useGamesCardsContext";
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

const CardsList: React.FC = () => {
  const { cards } = useGamesCardsContext();

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
      <TransitionGroup>
        {cards.map((card) => (
          <CSSTransition key={card.id} timeout={500} classNames="card">
            <CardComponent card={card} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Box>
  );
};

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

export { CardsList as Cards };
