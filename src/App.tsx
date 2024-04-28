import "./App.css";
import Form from "./components/Form";
import Cards from "./components/Cards";
import { useState } from "react";
import { AI } from "./components/Form";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  const [formData, setFormData] = useState<AI[]>([]);

  const handleDelete = (index: number) => {
    setFormData((prevCards) => prevCards.filter((_, i) => i !== index));
  };

  const handleFormSubmit = (Ai: AI) => {
    setFormData([...formData, Ai]);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <main>
          <div className="container">
            <section id="content">
              <div className="main-container">
                <Form onSubmit={handleFormSubmit} />
                <Cards cards={formData} onDelete={handleDelete} />
              </div>
            </section>
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
