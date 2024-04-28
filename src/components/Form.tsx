import { CHECK_AND_RADIO } from "../data";
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
  const [rateAIIntelligence] = React.useState<number>(0);
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
    if (rateAIIntelligence < 0) {
      setAI((prevAi) => ({ ...prevAi, rateAIIntelligence: 0 }));
    } else if (rateAIIntelligence > 100) {
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
      console.log(Ai);
      return "Please fill all the fields";
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
    console.log(Ai);
  };
  const handleClear = () => {
    setErrorMessage(null);
    setAI(defaultFormState);
    console.log(Ai);
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
      <form onSubmit={handleSubmit}>
        <section id="examples">
          <FormControl>
            <InputLabel id="LevelOfAI-chip">Level of AI</InputLabel>
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
            <InputLabel id="WhereAIIsUsed-chip">Where AI is used</InputLabel>
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
          <FormControl
            variant="standard"
            sx={{
              marginBottom: "2em",
              "& .MuiSelect-root": {
                transition: "background 0.3s ease",
                "&:hover": {
                  backgroundColor: "#cacedb",
                },
                "&.Mui-selected": {
                  backgroundColor: "#747bff",
                  color: "white",
                },
              },
            }}
          >
            <InputLabel
              id="TypeOfAI-select-standard-label"
              sx={{
                marginLeft: "0.5em",
              }} //!
            >
              Type of AI
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
              sx={{
                fontSize: "1.1em",
                fontFamily: "Do Hyeon",
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"NPC"}>NPC</MenuItem>
              <MenuItem value={"Neural Network"}>Neural Network</MenuItem>
              <MenuItem value={"Function"}>Function</MenuItem>
            </Select>
          </FormControl>
          <label>Rate AI intelligence</label>

          <Box sx={{ width: "95%", marginBottom: "1em" }}>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs>
                <Slider
                  aria-label="Volume"
                  value={
                    typeof Ai.rateAIIntelligence === "number"
                      ? Ai.rateAIIntelligence
                      : 0
                  }
                  onChange={onRateSliderChange}
                  aria-labelledby="input-slider"
                  sx={{
                    width: "95%",
                    margin: 0,
                  }}
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
                    min: 0,
                    max: 100,
                    type: "number",
                    "aria-labelledby": "input-slider",
                  }}
                  sx={{
                    mt: -1,
                    "& .MuiInputBase-input": {
                      textAlign: "center",
                      backgroundColor: "#f9f9f9",
                      borderRadius: "4px",
                      padding: "0.5em 0em",
                      border: "1px solid #ddd",
                      width: "2.7em",
                      "&:hover": {
                        borderColor: "#747bff",
                      },
                    },
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
        </section>
      </form>
    </div>
  );
};

export default Form;
