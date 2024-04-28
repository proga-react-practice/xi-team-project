import { CHECK_AND_RADIO, RANGE } from "../data";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";

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
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {cards.map((card, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "20px",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          <h3>
            {CHECK_AND_RADIO[0].label}: {card.levelOfAI.join(", ")}
          </h3>
          <h3>
            {CHECK_AND_RADIO[1].label}: {card.whereAIIsUsed.join(", ")}
          </h3>
          <h3>
            {CHECK_AND_RADIO[2].label}: {card.TypeOfAI}
          </h3>
          <h3>
            {RANGE[0].label}: {card.rateAIIntelligence}
          </h3>
          <Button
            variant="outlined"
            endIcon={<ClearIcon />}
            onClick={() => onDelete(index)}
            sx={{
              borderRadius: "8px",
              border: "1px solid transparent",
              padding: "0.6em 1.2em",
              fontSize: "1em",
              fontWeight: "500",
              fontFamily: "inherit",
              cursor: "pointer",
              transition: "border-color 0.25s",
              "&:hover": {
                borderColor: "#646cff",
              },
              "&:focus": {
                outline: "4px auto -webkit-focus-ring-color",
              },
              "&:hover, &:focus-visible": {
                borderColor: "#646cff",
              },
              "@media (prefers-color-scheme: light)": {
                backgroundColor: "#f9f9f9",
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
