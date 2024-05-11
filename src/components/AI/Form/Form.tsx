import { CHECK_AND_RADIO, RANGE } from "../../../data";
import Alert from "../../Alert";
import React, { useEffect } from "react";
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
import { useForm } from "react-hook-form";

export interface AI {
  levelOfAI: string[];
  whereAIIsUsed: string[];
  TypeOfAI: string;
  rateAIIntelligence: number;
  id?: number;
}
interface IFormProps {
  onSubmit: (Ai: AI) => void;
  submitButtonText: string;
  initialData?: AI;
}

const Form = ({ onSubmit, submitButtonText, initialData }: IFormProps) => {
  const { handleSubmit, reset, watch, setValue, trigger } = useForm<AI>({
    defaultValues: initialData || {
      levelOfAI: [],
      whereAIIsUsed: [],
      TypeOfAI: "",
      rateAIIntelligence: 0,
    },
  });

  const levelOfAI = watch("levelOfAI");
  const whereAIIsUsed = watch("whereAIIsUsed");
  const TypeOfAI = watch("TypeOfAI");
  const rateAIIntelligence = watch("rateAIIntelligence");

  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const theme = useTheme();

  const onSubmitForm = handleSubmit((data) => {
    if (
      data.levelOfAI.length === 0 ||
      data.whereAIIsUsed.length === 0 ||
      data.TypeOfAI === "" ||
      data.rateAIIntelligence === 0
    ) {
      setErrorMessage("Please fill all the fields");
      return;
    } else {
      onSubmit(data);
    }
  });
  const handleClear = () => {
    reset();
    setValue("TypeOfAI", "");
  };

  useEffect(() => {
    reset(
      initialData || {
        levelOfAI: [],
        whereAIIsUsed: [],
        TypeOfAI: "",
        rateAIIntelligence: 0,
      }
    );
  }, [initialData, reset]);

  return (
    <>
      {errorMessage && (
        <Alert message={errorMessage} onClose={() => setErrorMessage(null)} />
      )}
      <Container
        component="form"
        onSubmit={onSubmitForm}
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
          onChange={(newOption) => setValue("levelOfAI", newOption)}
        />
        <CustomFormControl
          label={CHECK_AND_RADIO[1].label}
          values={CHECK_AND_RADIO[1].value}
          selectedValue={whereAIIsUsed}
          multiple={true}
          onChange={(newOption) => setValue("whereAIIsUsed", newOption)}
        />
        <CustomFormControl
          label="Type of AI"
          values={CHECK_AND_RADIO[2].value}
          selectedValue={TypeOfAI}
          multiple={false}
          onChange={(newOption) => setValue("TypeOfAI", newOption[0])}
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
                onChange={(_, newValue) =>
                  setValue(
                    "rateAIIntelligence",
                    Array.isArray(newValue) ? newValue[0] : newValue
                  )
                }
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
                onChange={(event) =>
                  setValue("rateAIIntelligence", parseInt(event.target.value))
                }
                onBlur={() => trigger("rateAIIntelligence")}
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
            type="submit"
          >
            {submitButtonText}
          </Button>
        </Container>
      </Container>
    </>
  );
};

export default Form;
