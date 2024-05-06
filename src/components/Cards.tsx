import { CHECK_AND_RADIO, RANGE } from "../data";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, Button, Chip, Container, Typography } from "@mui/material";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useTheme } from "@mui/material/styles";
import { AI } from "./Form/Form";

interface ICardsProps {
  cards: AI[];
  onDelete: (index: number) => void;
}

interface ICardsInfoProps {
  title: string;
  info: string | string[];
}
const CardsInfo: React.FC<ICardsInfoProps> = ({ title, info }) => {
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
          width: { xs: "5em", sm: "14.6em", md: "6.7em", lg: "14.6em" },
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
      <TransitionGroup disableGutters>
        {cards.map((card, index) => (
          <CSSTransition key={index} timeout={500} classNames="card">
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
              <CardsInfo
                title={CHECK_AND_RADIO[0].label}
                info={card.levelOfAI}
              />
              <CardsInfo
                title={CHECK_AND_RADIO[1].label}
                info={card.whereAIIsUsed}
              />
              <CardsInfo
                title={CHECK_AND_RADIO[2].label}
                info={card.TypeOfAI}
              />
              <CardsInfo
                title={RANGE[0].label}
                info={card.rateAIIntelligence.toString()}
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
