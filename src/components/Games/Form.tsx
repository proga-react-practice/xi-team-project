import React, { useEffect } from "react";
import { Card } from "./Cards";
import {
  TextField,
  Select,
  MenuItem,
  Box,
  FormHelperText,
} from "@mui/material";
import { InputLabel, Button, Chip } from "@mui/material";
import { Container, Typography, FormControl } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ClearIcon from "@mui/icons-material/Clear";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import { useCardsContext } from "../context/GamesCardsContextProvider";

const Form: React.FC = () => {
  const { addCard, updateCard, editingCard, setEditingCard } =
    useCardsContext();

  const placeholders = {
    name: "Name of the Game",
    difficulty: "Difficulty",
    price: "Price",
    currency: "Currency",
  };

  const theme = useTheme();
  const form = useForm<Card>({
    defaultValues: {
      name: "",
      difficulty: "",
      price: 0, // Ensure price is initialized as a number
      currency: "",
    },
  });
  const { register, handleSubmit, formState, reset, setValue } = form;
  const { errors } = formState;

  useEffect(() => {
    if (editingCard) {
      reset(editingCard);
    }
  }, [editingCard, reset]);

  const onSubmitHandler = (data: Card) => {
    if (editingCard) {
      updateCard({ ...data, id: editingCard.id });
    } else {
      addCard({ ...data, id: crypto.randomUUID() });
    }
    clearForm();
  };

  const clearForm = () => {
    reset({
      name: "",
      difficulty: "",
      price: 0,
      currency: "",
    });
  };

  const handleCancel = () => {
    clearForm();
    setEditingCard(null);
  };
  return (
    <>
      <Container
        component="form"
        onSubmit={handleSubmit(onSubmitHandler)}
        noValidate
        sx={{
          border: "2px solid",
          borderColor: theme.palette.text.primary,
          borderRadius: 2,
          justifyContent: "left",
          bgcolor: theme.palette.background.paper,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" sx={{ my: 2, textAlign: "center" }}>
          {editingCard ? "Edit the Game" : "Register the Game"}
        </Typography>

        <TextField
          fullWidth
          label={placeholders.name}
          variant="outlined"
          value={form.watch("name")}
          {...register("name", {
            required: { value: true, message: "Name is required" },
            maxLength: {
              value: 30,
              message: "Name cannot exceed 30 characters",
            },
            onChange: (e) => setValue("name", e.target.value),
          })}
        />
        <FormHelperText>{errors.name?.message ?? " "}</FormHelperText>

        <FormControl fullWidth>
          <InputLabel id="difficulty-select">Difficulty</InputLabel>
          <Select
            label={placeholders.difficulty}
            value={form.watch("difficulty")}
            {...register("difficulty", {
              required: { value: true, message: "Difficulty is required" },
              onChange: (e) => setValue("difficulty", e.target.value),
            })}
            renderValue={(selected: string) => (
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
        <FormHelperText>{errors.difficulty?.message ?? " "}</FormHelperText>

        <Container
          disableGutters
          sx={{
            display: { xs: "block", sm: "flex", md: "flex" },
            justifyContent: "space-between",
            marginBottom: 1,
            gap: 1,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <FormControl fullWidth>
              <TextField
                label={placeholders.price}
                type="number"
                variant="outlined"
                value={form.watch("price")}
                {...register("price", {
                  required: { value: true, message: "Price is required" },
                  min: { value: 0, message: "Price must be a positive number" },
                  onChange: (e) => setValue("price", e.target.value),
                })}
              />
            </FormControl>
            <FormHelperText>{errors.price?.message ?? " "} </FormHelperText>
          </Box>

          <Box sx={{ flex: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="currency-select">Currency</InputLabel>
              <Select
                label={placeholders.currency}
                value={form.watch("currency")}
                {...register("currency", {
                  required: { value: true, message: "Currency is required" },
                  onChange: (e) => setValue("currency", e.target.value),
                })}
                renderValue={(selected: string) => (
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
            <FormHelperText>{errors.currency?.message ?? " "}</FormHelperText>
          </Box>
        </Container>
        {/* <FormHelperText>{errors.price?.message ?? " "} </FormHelperText> */}
        {/* <FormHelperText>{errors.currency?.message ?? " "}</FormHelperText> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 2,
            gap: 1,
          }}
        >
          {!editingCard ? (
            <Button
              fullWidth
              variant="contained"
              startIcon={<ClearIcon />}
              onClick={clearForm}
            >
              Clear
            </Button>
          ) : (
            <Button
              fullWidth
              variant="contained"
              startIcon={<ClearIcon />}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          )}
          <Button
            fullWidth
            variant="contained"
            endIcon={<SendIcon />}
            type="submit"
          >
            {editingCard ? "Save" : "Add"}
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Form;
