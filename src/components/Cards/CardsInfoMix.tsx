import { useTheme } from "@mui/material/styles";
import { Container, Typography, Chip, Box } from "@mui/material";
import { ICardsInfoProps } from "./ICardsInfoProps";

export const CardInfoMix: React.FC<ICardsInfoProps> = ({ title, info }) => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "baseline",
        gap: 2,
        flexDirection: "row",
        marginBottom: 2,
        paddingLeft: { xs: 1, sm: 1, md: 1, lg: 2 },
      }}
    >
      <Typography
        variant="h4"
        color="text.primary"
        sx={{
          width: { xs: "5em", sm: "5em", md: "5em", lg: "4.5em" },
          textAlign: "left",
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
