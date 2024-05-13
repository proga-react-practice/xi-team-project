import { INPUT_DATA_ASSETS, RANGE_OPTIONS } from "../inputDataAssets";
import { useEffect } from "react";
import {
  Box,
  Grid,
  Slider,
  Button,
  Typography,
  Container,
  TextField,
  FormHelperText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ClearIcon from "@mui/icons-material/Clear";
import SendIcon from "@mui/icons-material/Send";
import CustomFormControl from "./CustomFormControl";
import { useForm, Controller } from "react-hook-form";

export interface AI {
  levelOfAI: string[];
  whereAIIsUsed: string[];
  TypeOfAI: string;
  rateAIIntelligence: number;
  id: string;
}
interface IFormProps {
  onSubmit: (Ai: AI) => void;
  submitButtonText: string;
  initialData?: AI;
}

const Form = ({ onSubmit, submitButtonText, initialData }: IFormProps) => {
  const {
    handleSubmit,
    reset,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<AI>({
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

  const theme = useTheme();

  const onSubmitForm = handleSubmit((data) => {
    onSubmit(data);
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
        <FormHelperText>{errors.levelOfAI?.message ?? " "}</FormHelperText>
        <Controller
          name="levelOfAI"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <CustomFormControl
              label={INPUT_DATA_ASSETS[0].label}
              values={INPUT_DATA_ASSETS[0].value}
              selectedValue={levelOfAI}
              multiple={true}
              onChange={(newOption) => field.onChange(newOption)}
            />
          )}
        />
        <FormHelperText>{errors.whereAIIsUsed?.message ?? " "}</FormHelperText>
        <Controller
          name="whereAIIsUsed"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <CustomFormControl
              label={INPUT_DATA_ASSETS[1].label}
              values={INPUT_DATA_ASSETS[1].value}
              selectedValue={whereAIIsUsed}
              multiple={true}
              onChange={(newOption) => field.onChange(newOption)}
            />
          )}
        />
        <FormHelperText>{errors.TypeOfAI?.message ?? " "}</FormHelperText>
        <Controller
          name="TypeOfAI"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <CustomFormControl
              label="Type of AI"
              values={INPUT_DATA_ASSETS[2].value}
              selectedValue={TypeOfAI}
              multiple={false}
              onChange={(newOption) => field.onChange(newOption[0])}
            />
          )}
        />
        <Box
          sx={{
            marginBottom: "0.65em",
          }}
        >
          <Typography sx={{ marginLeft: "0.35em" }}>
            {RANGE_OPTIONS[0].label}
          </Typography>
          <FormHelperText>
            {errors.rateAIIntelligence?.message ?? " "}
          </FormHelperText>
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
                    : RANGE_OPTIONS[0].min
                }
                onChange={(_, newValue) => {
                  if (Array.isArray(newValue)) {
                    setValue("rateAIIntelligence", newValue[0], {
                      shouldValidate: true,
                    });
                  } else {
                    setValue("rateAIIntelligence", newValue, {
                      shouldValidate: true,
                    });
                  }
                }}
              />
            </Grid>
            <Grid item>
              <Controller
                name="rateAIIntelligence"
                control={control}
                rules={{
                  required: "This field is required",
                  min: {
                    value: RANGE_OPTIONS[0].min + 1,
                    message: "Value must be greater than 0",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    sx={{
                      width: "5em",
                    }}
                    size="small"
                    onChange={(event) => {
                      field.onChange(parseInt(event.target.value));
                    }}
                    onBlur={field.onBlur}
                    inputProps={{
                      step: 1,
                      min: RANGE_OPTIONS[0].min,
                      max: RANGE_OPTIONS[0].max,
                      type: "number",
                    }}
                  />
                )}
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
