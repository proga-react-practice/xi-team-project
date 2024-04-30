import { CHECK_AND_RADIO, RANGE } from "../data";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, Button, Chip } from "@mui/material";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useTheme } from "@mui/material/styles";
import { AI } from "./Form";

interface ICardsProps {
  cards: AI[];
  onDelete: (index: number) => void;
}

export default function Cards({ cards, onDelete }: ICardsProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      <TransitionGroup>
        {cards.map((card, index) => (
          <CSSTransition key={index} timeout={500} classNames="card">
            <Box
              sx={{
                flexDirection: "column",
                padding: 2,
                border: `2px solid ${theme.palette.text.primary}`,
                borderRadius: "5px",
                position: "relative",
                marginBottom: 6,
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
              <h3>
                {CHECK_AND_RADIO[0].label}:
                {card.levelOfAI.map((option, index) => (
                  <Chip
                    key={index}
                    label={option}
                    sx={{ margin: (theme) => theme.spacing(0, 0.5) }}
                  />
                ))}
              </h3>

              <h3>
                {CHECK_AND_RADIO[1].label}:
                {card.whereAIIsUsed.map((option, index) => (
                  <Chip
                    key={index}
                    label={option}
                    sx={{ margin: (theme) => theme.spacing(0, 0.5) }}
                  />
                ))}
              </h3>

              <h3>
                {CHECK_AND_RADIO[2].label}: <Chip label={card.TypeOfAI} />
              </h3>

              <h3>
                {RANGE[0].label}:{" "}
                <Chip label={card.rateAIIntelligence.toString()} />
              </h3>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingRight: {
                    xs: 0.5,
                    sm: 2,
                    md: 4,
                  },
                  marginBottom: -6,
                }}
              >
                <Button
                  variant="contained"
                  endIcon={<ClearIcon />}
                  onClick={() => onDelete(index)}
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
            </Box>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Box>
  );
}
