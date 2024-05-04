import Form from "./components/Form";
import Cards from "./components/Cards";
import { useState } from "react";
import { AI } from "./components/Form";
// import { theme } from "./theme";
import { useTheme } from "@mui/material/styles";
import { Container } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Title from "./components/Title";
import StyleIcon from "@mui/icons-material/Style";

export default function App() {
  const [formData, setFormData] = useState<AI[]>([]);
  const handleDelete = (index: number) => {
    setFormData((prevCards) => prevCards.filter((_, i) => i !== index));
  };

  const handleFormSubmit = (Ai: AI) => {
    setFormData([...formData, Ai]);
  };
  const theme = useTheme();
  return (
    <Container
      sx={{
        // marginTop: { xs: 0, sm: 1, md: 1 },
        // marginBottom: 1,
        // marginLeft: { xs: 0, sm: 1, md: 1 },
        // // marginRight: { xs: 0, sm: 1, md: 1 },

        display: "flex",
        justifyContent: "space-between",
        // flexWrap: "wrap",
        bgcolor: theme.palette.background.default,
        // p: 1,
        // bgcolor: "background.paper",
        // borderRadius: 1,
        width: "100%",
        // width: {
        //   xs: "100vw",
        //   sm: "calc(100vw - 1.6em)",
        //   md: "calc(100vw - 1em)",
        // },
        height: "100vh",
      }}
    >
      <Container
        sx={
          {
            //width: 350,
            // minWidth: { xs: "100%", sm: "100%", md: "40%" },
            // maxWidth: { xs: "100%", sm: "100%", md: "40%" },
            // borderRight: { md: `2px solid ${theme.palette!.text!.primary}` },
            // borderBottom: {
            //   xs: `1px solid ${theme.palette!.text!.primary}`,
            //   sm: `1px solid ${theme.palette!.text!.primary}`,
            //   md: "none",
            // },
            // p: 1,
          }
        }
      >
        <Title icon={SmartToyIcon} title="Registration Form" />
        <Form onSubmit={handleFormSubmit} />
      </Container>
      <Container
        sx={
          {
            // minWidth: { xs: "100%", sm: "100%", md: "60%" },
            // maxWidth: { xs: "100%", sm: "100%", md: "60%" },
            // marginBottom: { xs: 0, sm: 0, md: 3 },
            // p: 1,
          }
        }
      >
        <Title icon={StyleIcon} title="Submitted Cards" />
        <Cards cards={formData} onDelete={handleDelete} />
      </Container>
    </Container>
  );
}
