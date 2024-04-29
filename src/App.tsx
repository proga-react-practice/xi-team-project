import Form from "./components/Form";
import Cards from "./components/Cards";
import { useState } from "react";
import { AI } from "./components/Form";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

export default function App() {
  const [formData, setFormData] = useState<AI[]>([]);
  const handleDelete = (index: number) => {
    setFormData((prevCards) => prevCards.filter((_, i) => i !== index));
  };

  const handleFormSubmit = (Ai: AI) => {
    setFormData([...formData, Ai]);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          marginTop: { xs: 0, sm: 1, md: 1 },
          marginBottom: 1,
          marginLeft: { xs: 0, sm: 1, md: 1 },
          marginRight: { xs: 0, sm: 1, md: 1 },
          border: `5px solid ${theme.palette!.text!.primary}`,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          p: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
          width: {
            xs: "100vw",
            sm: "calc(100vw - 1.6em)",
            md: "calc(100vw - 1em)",
          },
        }}
      >
        <Box
          sx={{
            minWidth: { xs: "100%", sm: "100%", md: "40%" },
            maxWidth: { xs: "100%", sm: "100%", md: "40%" },
            borderRight: { md: `2px solid ${theme.palette!.text!.primary}` },
            borderBottom: {
              xs: `1px solid ${theme.palette!.text!.primary}`,
              sm: `1px solid ${theme.palette!.text!.primary}`,
              md: "none",
            },
            p: 1,
          }}
        >
          <Form onSubmit={handleFormSubmit} />
        </Box>
        <Box
          sx={{
            minWidth: { xs: "100%", sm: "100%", md: "59%" },
            maxWidth: { xs: "100%", sm: "100%", md: "59%" },
            marginBottom: { xs: 0, sm: 0, md: 3 },
            p: 1,
          }}
        >
          <Cards cards={formData} onDelete={handleDelete} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
