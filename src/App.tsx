//import "./App.css";
import Form from "./components/Form";
import Cards from "./components/Cards";
import { useState } from "react";
import { AI } from "./components/Form";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

function App() {
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
          marginTop: { xs: 0, sm: 1 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
          minWidth: "calc(100vw - 2em)",
        }}
      >
        <Box
          sx={{
            minWidth: { xs: "100%", sm: "40%" },
            maxWidth: { xs: "100%", sm: "40%" },
            borderRight: { sm: "1px solid #000" },
            borderBottom: { xs: "1px solid #000", sm: "none" },
            borderRadius: 0.3,
            p: 1,
          }}
        >
          <Form onSubmit={handleFormSubmit} />
        </Box>
        <Box
          sx={{
            minWidth: { xs: "100%", sm: "59%" },
            maxWidth: { xs: "100%", sm: "59%" },
            // borderLeft: { sm: "1px solid #000" },
            borderTop: { xs: "1px solid #000", sm: "none" },
            borderRadius: 0.3,
            marginBottom: { xs: 0, sm: 3 },
            p: 1,
          }}
        >
          <Cards cards={formData} onDelete={handleDelete} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
