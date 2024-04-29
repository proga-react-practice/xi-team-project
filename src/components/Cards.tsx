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
              left: { xs: "10px", sm: "20px", md: "40px" },
              right: { xs: "7px", sm: "10px", md: "20px" },
              height: "2px",
              backgroundColor: "#000",
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: { xs: "5px", sm: "20px", md: "40px" },
              marginBottom: "-50px",
            }}
          >
            <Button
              variant="contained"
              endIcon={<ClearIcon />}
              onClick={() => onDelete(index)}
              sx={{
                width: { xs: "132px", sm: "160px", md: "200px" },
              }}
            >
              Delete
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
