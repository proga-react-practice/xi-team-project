import React, { useEffect } from "react";
import { Card } from "./Cards";
import { TextField, Select, MenuItem, Box } from "@mui/material";
import { InputLabel, Button, Chip } from "@mui/material";
import { Container, Typography, FormControl } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ClearIcon from "@mui/icons-material/Clear";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const size = 17;

export interface Props {
  onSubmit: (data: Card) => void;
  editCard?: Card | null;
  onCancel: () => void;
}

const Form: React.FC<Props> = ({ onSubmit, editCard, onCancel }) => {
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
      price: 0,
      currency: "",
    },
  });
  const { register, control, handleSubmit, formState, reset, setValue } = form;
  const { errors } = formState;

  useEffect(() => {
    if (editCard) {
      reset(editCard);
    }
  }, [editCard, reset]);

  const onSubmitHandler = (data: Card) => {
    if (editCard) {
      // If editCard exists, it means we're editing an existing card
      onSubmit({ ...data, id: editCard.id });
    } else {
      // If editCard doesn't exist, it means we're adding a new card
      onSubmit({ ...data, id: crypto.randomUUID() });
    }
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
    onCancel();
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
          gap: "0.65em",
        }}
      >
        <Typography variant="h3" sx={{ my: 2, textAlign: "center" }}>
          {editCard ? "Edit the Game" : "Register the Game"}
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
        <Typography sx={{ color: theme.palette.error.main, fontSize: size }}>
          {errors.name?.message ?? " "}
        </Typography>

        <FormControl fullWidth>
          <InputLabel id="difficulty-select">Difficulty</InputLabel>
          <Select
            label={placeholders.difficulty}
            value={form.watch("difficulty")}
            {...register("difficulty", {
              required: { value: true, message: "Difficulty is required" },
              onChange: (e) => setValue("difficulty", e.target.value),
            })}
            renderValue={(selected: string) => {
              return (
                <Chip
                  label={selected}
                  sx={{
                    height: "1.8rem",
                    padding: { xs: 0.5, sm: 1, md: 1.5 },
                  }}
                />
              );
            }}
          >
            <MenuItem value={"Easy"}>Easy</MenuItem>
            <MenuItem value={"Medium"}>Medium</MenuItem>
            <MenuItem value={"Hard"}>Hard</MenuItem>
            <MenuItem value={"Expert"}>Expert</MenuItem>
          </Select>
        </FormControl>
        <Typography sx={{ color: theme.palette.error.main, fontSize: size }}>
          {errors.difficulty?.message ?? " "}
        </Typography>

        <Container
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 1,
            gap: 1,
          }}
        >
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
        </Container>
        <Typography sx={{ color: theme.palette.error.main, fontSize: size }}>
          {errors.price?.message ?? " "}
        </Typography>
        <Typography sx={{ color: theme.palette.error.main, fontSize: size }}>
          {errors.currency?.message ?? " "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 2,
            gap: 1,
          }}
        >
          {!editCard ? (
            <Button
              variant="contained"
              sx={{ px: 5 }}
              startIcon={<ClearIcon />}
              onClick={clearForm}
            >
              Clear
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{ px: 5 }}
              startIcon={<ClearIcon />}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          )}
          <Button
            variant="contained"
            sx={{ px: 10 }}
            endIcon={<SendIcon />}
            type="submit"
          >
            {editCard ? "Save" : "Add"}
          </Button>
        </Box>
      </Container>
      <DevTool control={control} />
    </>
  );
};

export default Form;
