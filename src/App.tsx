import Form from "./components/Form/FormGames";
import Cards from "./components/CardsGames";
// import Form from "./components/Form/Form";
// import Cards from "./components/Cards";
import { useState } from "react";
// import { AI } from "./components/Form/Form";
import { Container, Box } from "@mui/material";
// import SmartToyIcon from "@mui/icons-material/SmartToy";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Title from "./components/Title";
import StyleIcon from "@mui/icons-material/Style";
import { lightTheme, darkTheme } from "./theme";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

import { Card } from "./components/CardsGames";

function Content() {
  const theme = useTheme();

  // Maxym's form
  // const [formData, setFormData] = useState<AI[]>([]);
  // const handleDelete = (index: number) => {
  //   setFormData((prevCards) => prevCards.filter((_, i) => i !== index));
  // };

  // const handleFormSubmit = (Ai: AI) => {
  //   setFormData([...formData, Ai]);
  // };

  // Sofiia's form
  const [cards, setCards] = useState<Card[]>([]);
  const handleFormSubmit = (newCard: Card) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const deleteCard = (id: string) => {
    setCards((prevCards) => {
      const filteredCards = prevCards.filter((card: Card) => card.id !== id);
      return filteredCards;
    });
  };
  return (
    <Box
      sx={{
        flexDirection: { xs: "column", sm: "column", md: "row" },
        display: "flex",
        justifyContent: "space-between",
        bgcolor: theme.palette.background.default,
        width: "100vw",
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
        {/* Maxym's form */}
        {/* <Title icon={SmartToyIcon} title="Registration Form" />
        <Form onSubmit={handleFormSubmit} /> */}

        {/* Soffia's form */}
        <Title icon={SportsEsportsIcon} title="Registration Form" />
        <Form onSubmit={handleFormSubmit} />
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
        {/* Maxyms's form */}
        {/* <Title icon={StyleIcon} title="Submitted Cards" />
        <Cards cards={formData} onDelete={handleDelete} /> */}

        {/* Sofiia's form */}
        <Title icon={StyleIcon} title="Submitted Cards" />
        <Cards cards={cards} onDelete={deleteCard} />
      </Container>
    </Box>
  );
}
export default function App() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const handleThemeChange = () => {
    setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };
  return (
    <ThemeProvider theme={currentTheme}>
      <Switch
        checked={currentTheme === darkTheme}
        onChange={handleThemeChange}
      />
      <Content />
    </ThemeProvider>
  );
}
