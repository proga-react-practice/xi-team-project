import { CHECK_AND_RADIO } from "../../data";
import Alert from "../Alert";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Input from "@mui/material/Input";

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
  const [rangeValue, setRangeValue] = React.useState<number>(0);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const defaultFormState = {
    levelOfAI: [],
    whereAIIsUsed: [],
    TypeOfAI: "",
    rateAIIntelligence: 0,
  };

  const [Ai, setAI] = useState<AI>(defaultFormState);

  const onLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAI({ ...Ai, levelOfAI: [...Ai.levelOfAI, e.target.value] });
  };

  const onWhereUsedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAI({ ...Ai, whereAIIsUsed: [...Ai.whereAIIsUsed, e.target.value] });
  };

  const onTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAI({ ...Ai, TypeOfAI: e.target.value });
  };

  const onRateSliderChange = (event: Event, newValue: number | number[]) => {
    const value = Array.isArray(newValue) ? newValue[0] : newValue;
    setAI({ ...Ai, rateAIIntelligence: value });
    setRangeValue(value);
  };

  const onRateInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value === "" ? 0 : Number(event.target.value);
    setAI({ ...Ai, rateAIIntelligence: value });
    setRangeValue(value);
  };

  const handleBlur = () => {
    if (rangeValue < 0) {
      setRangeValue(0);
    } else if (rangeValue > 100) {
      setRangeValue(100);
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
    setRangeValue(0);
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
    <div className="form-container">
      {errorMessage && (
        <Alert message={errorMessage} onClose={() => setErrorMessage(null)} />
      )}
      <form onSubmit={handleSubmit}>
        <section id="examples">
          <div className="form-group">
            <label>Level of AI</label>
            <div className="checkbox-group">
              {CHECK_AND_RADIO[0].value.map((val, index) => (
                <React.Fragment key={index}>
                  <input
                    type="checkbox"
                    name="levelOfAI"
                    value={val}
                    id={val}
                    onChange={onLevelChange}
                  />
                  <label htmlFor={val}>{val}</label>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label>Where AI is used</label>
            <div className="checkbox-group">
              {CHECK_AND_RADIO[1].value.map((val, index) => (
                <React.Fragment key={index}>
                  <input
                    type="checkbox"
                    name="levelOfAI"
                    value={val}
                    id={val}
                    onChange={onWhereUsedChange}
                  />
                  <label htmlFor={val}>{val}</label>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label>Type of AI</label>
            <div className="radio-group">
              {CHECK_AND_RADIO[2].value.map((val, index) => (
                <React.Fragment key={index}>
                  <input
                    type="radio"
                    name="TypeOfAI"
                    value={val}
                    id={val}
                    onChange={onTypeChange}
                  />
                  <label htmlFor={val}>{val}</label>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label>Rate AI intelligence</label>

            <Box sx={{ width: "100%" }}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs>
                  <Slider
                    aria-label="Volume"
                    value={typeof rangeValue === "number" ? rangeValue : 0}
                    onChange={onRateSliderChange}
                    aria-labelledby="input-slider"
                    sx={{
                      width: "95%",
                      margin: 0,
                      "& .MuiSlider-thumb": {
                        height: 20,
                        width: 20,
                        backgroundColor: "#747bff",
                        "&:hover": {
                          backgroundColor: "#535bf2",
                        },
                        "&.Mui-focusVisible": {
                          boxShadow:
                            "0px 0px 0px 8px rgba(116, 123, 255, 0.16)",
                        },
                        "&.Mui-active": {
                          boxShadow:
                            "0px 0px 0px 14px rgba(116, 123, 255, 0.16)",
                        },
                      },
                      "& .MuiSlider-rail": {
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: "#747bff",
                      },
                      "& .MuiSlider-track": {
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: "#747bff",
                      },
                    }}
                  />
                </Grid>
                <Grid item>
                  <Input
                    value={rangeValue}
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
                        color: "#213547", // Text color
                        backgroundColor: "#f9f9f9", // Background color
                        borderRadius: "4px", // Border radius
                        padding: "0.5em", // Padding
                        border: "1px solid #ddd", // Border
                        "&:hover": {
                          borderColor: "#747bff", // Border color on hover
                        },
                        "&.Mui-focused": {
                          borderColor: "#747bff", // Border color when focused
                        },
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
          <button type="reset" onClick={handleClear}>
            Clear
          </button>
        </section>
      </form>
    </div>
  );
};

export default Form;
