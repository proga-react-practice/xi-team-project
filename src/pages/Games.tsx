import { Box, Container } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Title from "../components/Title";
import StyleIcon from "@mui/icons-material/Style";
import { useTheme } from "@mui/material/styles";
import Form from "../components/Games/Form";
import { Cards } from "../components/Games/Cards";
import { CardsProvider } from "../components/context/CardsContextProvider";

export default function Games() {
  const theme = useTheme();

  return (
    <CardsProvider>
      <Box
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row" },
          display: "flex",
          justifyContent: "space-between",
          bgcolor: theme.palette.background.default,
          width: "98.9vw",
          maxWidth: "100%",
          minHeight: "100vh",
        }}
      >
        <Container
          sx={{
            width: { sm: "100%", md: "40%" },
            paddingLeft: { xs: 0, md: 2, lg: 3 },
            paddingRight: { xs: 0, md: 2, lg: 3 },
          }}
        >
          <Title icon={SportsEsportsIcon} title="Registration Form" />
          <Form />
        </Container>
        <Container
          sx={{
            minWidth: { md: "40%", lg: "59%" },
            maxWidth: { md: "100%", lg: "70%" },
            flexGrow: 1,
            paddingLeft: { xs: 0, md: 2, lg: 3 },
            paddingRight: { xs: 0, md: 2, lg: 3 },
          }}
        >
          <Title icon={StyleIcon} title="Submitted Cards" />
          <Cards />
        </Container>
      </Box>
    </CardsProvider>
  );
}
