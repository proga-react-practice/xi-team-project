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
  const [levelOfAI, setLevelOfAI] = useState<string[]>([]);
  const [whereAIIsUsed, setWhereAIIsUsed] = useState<string[]>([]);
  const [TypeOfAI, setTypeOfAI] = useState("");
  const [rateAIIntelligence, setRateAIIntelligence] = useState<number>(0);

  const theme = useTheme();

  const onRateSliderChange = (_: Event, newValue: number | number[]) => {
    const value = Array.isArray(newValue) ? newValue[0] : newValue;
    setRateAIIntelligence(value);
  };

  const onRateInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value === "" ? 0 : Number(event.target.value);
    setRateAIIntelligence(value);
  };

  const handleBlur = () => {
    if (rateAIIntelligence < 0) {
      setRateAIIntelligence(0);
    } else if (rateAIIntelligence > 100) {
      setRateAIIntelligence(100);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage("");

    if (
      levelOfAI.length === 0 ||
      whereAIIsUsed.length === 0 ||
      TypeOfAI === "" ||
      rateAIIntelligence === 0
    ) {
      setErrorMessage("Please fill all the fields");
      return;
    } else {
      onSubmit({ levelOfAI, whereAIIsUsed, TypeOfAI, rateAIIntelligence });
    }
  };
  const handleClear = () => {
    setLevelOfAI([]);
    setWhereAIIsUsed([]);
    setTypeOfAI("");
    setRateAIIntelligence(0);
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
          selectedValue={levelOfAI}
          multiple={true}
          onChange={(newOption) => setLevelOfAI(newOption)}
        />
        <CustomFormControl
          label={CHECK_AND_RADIO[1].label}
          values={CHECK_AND_RADIO[1].value}
          selectedValue={whereAIIsUsed}
          multiple={true}
          onChange={(newOption) => setWhereAIIsUsed(newOption)}
        />
        <CustomFormControl
          label="Type of AI"
          values={CHECK_AND_RADIO[2].value}
          selectedValue={TypeOfAI}
          multiple={false}
          onChange={(newOption) => setTypeOfAI(newOption[0])}
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
                  typeof rateAIIntelligence === "number"
                    ? rateAIIntelligence
                    : RANGE[0].min
                }
                onChange={onRateSliderChange}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                sx={{
                  width: "5em",
                }}
                value={rateAIIntelligence}
                size="small"
                onChange={onRateInputChange}
                onBlur={handleBlur}
                inputProps={{
                  step: 1,
                  min: RANGE[0].min,
                  max: RANGE[0].max,
                  type: "number",
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
