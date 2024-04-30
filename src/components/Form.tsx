import { CHECK_AND_RADIO, RANGE } from "../data";
import Alert from "./Alert";
import React, { useState } from "react";
import {
  Box,
  Grid,
  Slider,
  Input,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Chip,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import ClearIcon from "@mui/icons-material/Clear";
import SendIcon from "@mui/icons-material/Send";

export interface AI {
  levelOfAI: string[];
  whereAIIsUsed: string[];
  TypeOfAI: string;
  rateAIIntelligence: number;
}
interface IFormProps {
  onSubmit: (Ai: AI) => void;
}

const Form = ({ onSubmit }: IFormProps) => {
  const [levelOfAI] = React.useState<string[]>([]);
  const [whereAIIsUsed] = React.useState<string[]>([]);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const defaultFormState = {
    levelOfAI: [],
    whereAIIsUsed: [],
    TypeOfAI: "",
    rateAIIntelligence: 0,
  };

  const [Ai, setAI] = useState<AI>(defaultFormState);

  const onLevelChange = (event: SelectChangeEvent<typeof levelOfAI>) => {
    const {
      target: { value },
    } = event;
    const newOption = typeof value === "string" ? value.split(",") : value;
    setAI((prevAi) => ({ ...prevAi, levelOfAI: newOption }));
  };

  const onWhereUsedChange = (
    event: SelectChangeEvent<typeof whereAIIsUsed>
  ) => {
    const {
      target: { value },
    } = event;
    const newOption = typeof value === "string" ? value.split(",") : value;
    setAI((prevAi) => ({ ...prevAi, whereAIIsUsed: newOption }));
  };

  const onTypeChange = (e: SelectChangeEvent) => {
    setAI((prevAi) => ({ ...prevAi, TypeOfAI: e.target.value }));
  };

  const onRateSliderChange = (_: Event, newValue: number | number[]) => {
    const value = Array.isArray(newValue) ? newValue[0] : newValue;
    setAI((prevAi) => ({ ...prevAi, rateAIIntelligence: value }));
  };

  const onRateInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value === "" ? 0 : Number(event.target.value);
    setAI((prevAi) => ({ ...prevAi, rateAIIntelligence: value }));
  };

  const handleBlur = () => {
    if (Ai.rateAIIntelligence < 0) {
      setAI((prevAi) => ({ ...prevAi, rateAIIntelligence: 0 }));
    } else if (Ai.rateAIIntelligence > 100) {
      setAI((prevAi) => ({ ...prevAi, rateAIIntelligence: 100 }));
    }
  };
  const validateAI = (Ai: AI) => {
    if (
      Ai.levelOfAI.length === 0 ||
      Ai.whereAIIsUsed.length === 0 ||
      !Ai.TypeOfAI ||
      Ai.rateAIIntelligence === 0
    ) {
      return "Please fill all the fields";
    } else if (Ai.rateAIIntelligence > 100) {
      Ai.rateAIIntelligence = 100;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const error = validateAI(Ai);
    if (error) {
      setErrorMessage(error);
      return;
    }
    onSubmit(Ai);
  };
  const handleClear = () => {
    setErrorMessage(null);
    setAI(defaultFormState);
    document.querySelectorAll('input[type="checkbox"]').forEach((element) => {
      const checkbox = element as HTMLInputElement;
      checkbox.checked = false;
    });
    document.querySelectorAll('input[type="radio"]').forEach((element) => {
      const radio = element as HTMLInputElement;
      radio.checked = false;
    });
  };

  return (
    <div>
      {errorMessage && (
        <Alert message={errorMessage} onClose={() => setErrorMessage(null)} />
      )}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ margin: "3rem auto" }}
      >
        <FormControl>
          <InputLabel id="LevelOfAI-chip">
            {CHECK_AND_RADIO[0].label}
          </InputLabel>
          <Select
            labelId="LevelOfAI-chip"
            id="Level of AI"
            multiple
            value={Ai.levelOfAI}
            onChange={onLevelChange}
            input={<OutlinedInput id="Level of AI" label="" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {CHECK_AND_RADIO[0].value.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="WhereAIIsUsed-chip">
            {CHECK_AND_RADIO[1].label}
          </InputLabel>
          <Select
            labelId="WhereAIIsUsed-chip"
            id="Where AI Is Used"
            multiple
            value={Ai.whereAIIsUsed}
            onChange={onWhereUsedChange}
            input={<OutlinedInput id="Where AI Is Used" label="" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {CHECK_AND_RADIO[1].value.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel
            id="TypeOfAI-select-standard-label"
            sx={{
              marginLeft: "0.5em",
            }}
          >
            {CHECK_AND_RADIO[2].label}
          </InputLabel>
          <Select
            labelId="TypeOfAI-select-standard-label"
            id="TypeOfAI-select-standard"
            value={Ai.TypeOfAI}
            onChange={onTypeChange}
            label="Type of AI"
            input={<OutlinedInput id="TypeOfAI-select-standard" label="" />}
            renderValue={(selected) => (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 0.5,
                  justifyContent: "center",
                }}
              >
                <Chip key={selected} label={selected} />
              </Box>
            )}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"NPC"}>NPC</MenuItem>
            <MenuItem value={"Neural Network"}>Neural Network</MenuItem>
            <MenuItem value={"Function"}>Function</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ width: "95%", marginBottom: "1em" }}>
          <Typography variant="body1" sx={{ marginLeft: "0.35em" }}>
            {RANGE[0].label}
          </Typography>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs>
              <Slider
                aria-label="Volume"
                value={
                  typeof Ai.rateAIIntelligence === "number"
                    ? Ai.rateAIIntelligence
                    : RANGE[0].min
                }
                onChange={onRateSliderChange}
                aria-labelledby="input-slider"
              />
            </Grid>
            <Grid item>
              <Input
                value={Ai.rateAIIntelligence}
                size="small"
                onChange={onRateInputChange}
                onBlur={handleBlur}
                inputProps={{
                  step: 1,
                  min: RANGE[0].min,
                  max: RANGE[0].max,
                  type: "number",
                  "aria-labelledby": "input-slider",
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button
            variant="outlined"
            startIcon={<ClearIcon />}
            onClick={handleClear}
          >
            Clear
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Form;
