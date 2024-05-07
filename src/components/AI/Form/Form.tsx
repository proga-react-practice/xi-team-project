import { CHECK_AND_RADIO, RANGE } from "../../../data";
import Alert from "../../Alert";
import React, { useState } from "react";
import {
  Box,
  Grid,
  Slider,
  Button,
  Typography,
  Container,
  TextField,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import ClearIcon from "@mui/icons-material/Clear";
import SendIcon from "@mui/icons-material/Send";
import CustomFormControl from "./CustomFormControl";

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
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const defaultFormState = {
    levelOfAI: [],
    whereAIIsUsed: [],
    TypeOfAI: "",
    rateAIIntelligence: 0,
  };

  const theme = useTheme();

  const [Ai, setAI] = useState<AI>(defaultFormState);

  const onLevelChange = (event: SelectChangeEvent<string | string[]>) => {
    const {
      target: { value },
    } = event;
    const newOption = Array.isArray(value) ? value : value.split(",");
    setAI((prevAi) => ({ ...prevAi, levelOfAI: newOption }));
  };

  const onWhereUsedChange = (event: SelectChangeEvent<string | string[]>) => {
    const {
      target: { value },
    } = event;
    const newOption = Array.isArray(value) ? value : value.split(",");
    setAI((prevAi) => ({ ...prevAi, whereAIIsUsed: newOption }));
  };

  const onTypeChange = (e: SelectChangeEvent<string | string[]>) => {
    const value = Array.isArray(e.target.value)
      ? e.target.value[0]
      : e.target.value;
    setAI((prevAi) => ({ ...prevAi, TypeOfAI: value || "" }));
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
          border: "2px solid",
          borderColor: theme.palette.text.primary,
          borderRadius: 2,
          justifyContent: "left",
          bgcolor: theme.palette.background.paper,
        }}
      >
        <Typography variant="h3" sx={{ my: 2, textAlign: "center" }}>
          Register the AI
        </Typography>

        <CustomFormControl
          label={CHECK_AND_RADIO[0].label}
          values={CHECK_AND_RADIO[0].value}
          selectedValues={Ai.levelOfAI}
          multiple={true}
          onChange={onLevelChange}
        />
        <CustomFormControl
          label={CHECK_AND_RADIO[1].label}
          values={CHECK_AND_RADIO[1].value}
          selectedValues={Ai.whereAIIsUsed}
          multiple={true}
          onChange={onWhereUsedChange}
        />
        <CustomFormControl
          label={CHECK_AND_RADIO[2].label}
          values={CHECK_AND_RADIO[2].value}
          selectedValues={Ai.TypeOfAI}
          multiple={false}
          onChange={onTypeChange}
        />
        <Box
          sx={{
            marginBottom: "0.65em",
          }}
        >
          <Typography sx={{ marginLeft: "0.35em" }}>
            {RANGE[0].label}
          </Typography>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs>
              <Slider
                sx={{
                  width: "95%",
                  height: "8px",
                }}
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
