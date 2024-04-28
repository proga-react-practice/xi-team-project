import { CHECK_AND_RADIO, RANGE } from "../data";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
export interface ICardData {
  levelOfAI: string[];
  whereAIIsUsed: string[];
  TypeOfAI: string;
  rateAIIntelligence: number;
}

interface ICardsProps {
  cards: ICardData[];
  onDelete: (index: number) => void;
}

export default function Cards({ cards, onDelete }: ICardsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      {cards.map((card, index) => (
        <Box
          key={index}
          sx={{
            // display: "flex",
            flexDirection: "column",
            padding: "20px",
            border: "2px solid black",
            borderRadius: "5px",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "10px",
              left: "40px",
              right: "20px",
              height: "2px",
              backgroundColor: "#000",
              "@media (max-width: 600px)": {
                left: "20px",
                right: "10px",
              },
            },
          }}
        >
          <h3>{CHECK_AND_RADIO[0].label}:</h3>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {card.levelOfAI.map((option, i) => (
              <Chip key={i} label={option} />
            ))}
          </Box>
          <h3>{CHECK_AND_RADIO[1].label}:</h3>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {card.whereAIIsUsed.map((option, i) => (
              <Chip key={i} label={option} />
            ))}
          </Box>
          <h3>{CHECK_AND_RADIO[2].label}:</h3>
          <Box sx={{ flexGrow: 1 }}>
            <Chip label={card.TypeOfAI} />
          </Box>
          <h3>{RANGE[0].label}:</h3>
          <Box sx={{ flexGrow: 1 }}>
            <Chip label={card.rateAIIntelligence.toString()} />
          </Box>
          <Button
            variant="contained"
            endIcon={<ClearIcon />}
            onClick={() => onDelete(index)}
            sx={{
              // position: "relative",
              bottom: "-50px",
              left: "70%",
              width: "200px",
              "@media (max-width: 600px)": {
                left: "50%",
                padding: "0.6em 0.8em",
              },
            }}
          >
            Delete
          </Button>
        </Box>
      ))}
    </Box>
  );
}
