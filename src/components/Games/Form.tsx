import React, { useState } from "react";
import { Card } from "./Cards";
import Alert from "../Alert";
import { TextField, Select, MenuItem, Box } from "@mui/material";
import { InputLabel, Button, Chip } from "@mui/material";
import { Container, Typography, FormControl } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ClearIcon from "@mui/icons-material/Clear";
import SendIcon from "@mui/icons-material/Send";

export interface Props {
  onSubmit: (data: Card) => void;
}

const Form: React.FC<Props> = ({ onSubmit }) => {
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [currency, setCurrency] = useState("");

  const theme = useTheme();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage("");

    if (name === "" || difficulty === "" || price === "" || currency === "") {
      setErrorMessage("Please fill all the fields");
      return;
    } else {
      onSubmit({ id: crypto.randomUUID(), name, difficulty, price, currency });
    }
  };

  const handleClear = () => {
    setName("");
    setDifficulty("");
    setPrice("");
    setCurrency("");
  };

  return (
    <>
      {errorMessage && (
        <Alert message={errorMessage} onClose={() => setErrorMessage(null)} />
      )}
      <Container
        component="form"
        onSubmit={handleSubmit}
        sx={{
          border: "2px solid",
          borderColor: theme.palette.text.primary,
          borderRadius: 2,
          justifyContent: "left",
          bgcolor: theme.palette.background.paper,
          display: "flex",
          flexDirection: "column",
          gap: "0.65em",
        }}
      >
        <Typography variant="h3" sx={{ my: 2, textAlign: "center" }}>
          Register the Game
        </Typography>

        <TextField
          fullWidth
          label="Name of the Game"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
          <Select
            label="Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            renderValue={(selected) => (
              <Chip
                label={selected}
                sx={{
                  height: "1.8rem",
                  padding: { xs: 0.5, sm: 1, md: 1.5 },
                }}
              />
            )}
          >
            <MenuItem value={"Easy"}>Easy</MenuItem>
            <MenuItem value={"Medium"}>Medium</MenuItem>
            <MenuItem value={"Hard"}>Hard</MenuItem>
            <MenuItem value={"Expert"}>Expert</MenuItem>
          </Select>
        </FormControl>

        <Container
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 1,
            gap: 1,
          }}
        >
          <TextField
            fullWidth
            sx={{ width: "130%" }}
            label="Price"
            type="number"
            variant="outlined"
            value={price}
            onChange={(e) =>
              setPrice(
                e.target.value === ""
                  ? ""
                  : Math.max(0, parseInt(e.target.value))
              )
            }
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Currency</InputLabel>

            <Select
              label="Currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              renderValue={(selected) => (
                <Chip
                  label={selected}
                  sx={{
                    height: "1.8rem",
                    padding: { xs: 0.5, sm: 1, md: 1.5 },
                  }}
                />
              )}
            >
              <MenuItem value={"₴"}>₴</MenuItem>
              <MenuItem value={"$"}>$</MenuItem>
              <MenuItem value={"€"}>€</MenuItem>
            </Select>
          </FormControl>
        </Container>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 2,
            gap: 1,
          }}
        >
          <Button
            variant="contained"
            sx={{ px: 5 }}
            startIcon={<ClearIcon />}
            onClick={handleClear}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            sx={{ px: 10 }}
            endIcon={<SendIcon />}
            onClick={handleSubmit}
          >
            Add
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Form;
