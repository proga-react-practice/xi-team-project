import { Container, Typography, Chip, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
              //TODO: Add hyphenation
            }}
          />
        )}
      </Box>
    </Container>
  );
};
