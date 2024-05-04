import { CHECK_AND_RADIO, RANGE } from "../data";
import Alert from "./Alert";
import React, { useState } from "react";
import {
  Box,
  Grid,
  Slider,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Chip,
  Button,
  Typography,
  Container,
  TextField,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
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

  const theme = useTheme();

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
    <>
      {errorMessage && (
        <Alert message={errorMessage} onClose={() => setErrorMessage(null)} />
      )}
      <Container
        component="form"
        onSubmit={handleSubmit}
        sx={{
          // marginLeft: 0,
          border: 2,
          borderRadius: 2,
          justifyContent: "left",
          bgcolor: theme.palette.background.paper,
          // margin: "3rem auto",
        }}
      >
        <Typography
          variant="h3"
          // color="primary.main"
          sx={{ my: 2, textAlign: "center" }}
        >
          Register the AI
        </Typography>

        <FormControl
          fullWidth
          sx={{
            // width: "95%",
            marginBottom: "0.65em",
          }}
        >
          <InputLabel id="LevelOfAI-chip">
            {CHECK_AND_RADIO[0].label}
          </InputLabel>
          <Select
            labelId="LevelOfAI-chip"
            id="Level of AI"
            label="Level of AI"
            multiple
            value={Ai.levelOfAI}
            onChange={onLevelChange}
            sx={{
              height: "3.1em",
            }}
            // input={<OutlinedInput id="Level of AI" label="" />}
            renderValue={(selected) => (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 0.5,
                }}
              >
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    sx={{
                      height: "1.86rem",
                    }}
                  />
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
        <FormControl
          fullWidth
          sx={{
            marginBottom: "0.65em",
            // width: "95%", marginBottom: "2em"
          }}
        >
          <InputLabel id="WhereAIIsUsed-chip">
            {CHECK_AND_RADIO[1].label}
          </InputLabel>
          <Select
            labelId="WhereAIIsUsed-chip"
            id="Where AI Is Used"
            label="Where AI Is Used"
            multiple
            value={Ai.whereAIIsUsed}
            onChange={onWhereUsedChange}
            sx={{
              height: "3.1em",
            }}
            // input={<OutlinedInput id="Where AI Is Used" label="" />}
            renderValue={(selected) => (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 0.5,
                }}
              >
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    sx={{
                      height: "1.86rem",
                    }}
                  />
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
          fullWidth
          sx={{
            marginBottom: "0.65em",
            // width: "95%", marginBottom: "2em"
          }}
        >
          <InputLabel
            id="TypeOfAI-select-standard-label"
            sx={
              {
                // marginLeft: "0.5em",
              }
            }
          >
            {CHECK_AND_RADIO[2].label}
          </InputLabel>
          <Select
            labelId="TypeOfAI-select-standard-label"
            id="TypeOfAI-select-standard"
            value={Ai.TypeOfAI}
            onChange={onTypeChange}
            label="Type of AI"
            sx={{
              height: "3.1em",
            }}
            // input={<OutlinedInput id="TypeOfAI-select-standard" label="" />}
            renderValue={(selected) => (
              <Box
                sx={
                  {
                    // display: "flex",
                    // flexWrap: "wrap",
                    // gap: 0.5,
                    // justifyContent: "center",
                  }
                }
              >
                <Chip
                  key={selected}
                  label={selected}
                  sx={{
                    height: "1.86rem",
                  }}
                />
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
        <Box
          sx={{
            marginBottom: "0.65em",
            // width: "95%", marginBottom: "1em"
          }}
        >
          <Typography sx={{ marginLeft: "0.35em" }}>
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
              <TextField
                fullWidth
                sx={{
                  width: "5em",
                }}
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
        <Container
          disableGutters
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
        </Container>
      </Container>
    </>
  );
};

export default Form;
