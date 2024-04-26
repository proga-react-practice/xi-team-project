import { CHECK_AND_RADIO } from "../../data";
import Alert from "../Alert";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Input from "@mui/material/Input";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export interface AI {
  levelOfAI: string[];
  whereAIIsUsed: string[];
  TypeOfAI: string;
  rateAIIntelligence: number;
}
interface IFormProps {
  onSubmit: (Ai: AI) => void;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, option: readonly string[], theme: Theme) {
  return {
    fontWeight:
      option.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Form = ({ onSubmit }: IFormProps) => {
  const theme = useTheme();
  const [levelOfAI, setLevelOfAI] = React.useState<string[]>([]);
  const [whereAIIsUsed, setWhereAIIsUsed] = React.useState<string[]>([]);
  const [TypeOfAI, setTypeOfAI] = React.useState<string>("");

  const [rangeValue, setRangeValue] = React.useState<number>(0);
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
    setLevelOfAI(newOption);
    setAI({ ...Ai, levelOfAI: newOption });
  };

  const onWhereUsedChange = (
    event: SelectChangeEvent<typeof whereAIIsUsed>
  ) => {
    const {
      target: { value },
    } = event;
    const newOption = typeof value === "string" ? value.split(",") : value;
    setWhereAIIsUsed(newOption);
    setAI({ ...Ai, whereAIIsUsed: newOption });
  };

  const onTypeChange = (e: SelectChangeEvent) => {
    setTypeOfAI(e.target.value);
    setAI({ ...Ai, TypeOfAI: e.target.value });
  };

  const onRateSliderChange = (_: Event, newValue: number | number[]) => {
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
    setLevelOfAI([]);
    setWhereAIIsUsed([]);
    setTypeOfAI("");
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
            <FormControl
              sx={{
                m: 1,
                width: "95%",
                fontFamily: "Roboto, sans-serif",
                background:
                  "radial-gradient(circle at center, #3c77f5, #2a31bd)",
                color: "rgba(255, 255, 255, 0.87)",
              }}
            >
              <InputLabel
                id="LevelOfAI-chip"
                sx={{
                  fontSize: "1.5rem",
                  color: "#213547",
                  "&.MuiInputLabel-shrink": {
                    transform: "translate(0.6rem, -2rem) scale(0.85)",
                  },
                  "&.Mui-focused": {
                    color: "#213547",
                  },
                }}
              >
                Level of AI
              </InputLabel>
              <Select
                labelId="LevelOfAI-chip"
                id="Level of AI"
                multiple
                value={levelOfAI}
                onChange={onLevelChange}
                input={<OutlinedInput id="Level of AI" label="" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={value}
                        sx={{
                          height: "2.5rem",
                          fontSize: "1.3rem",
                          background: "#dfdfdf",
                          borderRadius: "5px",
                          padding: "0.7rem",
                          "&:hover": { background: "#cacedb" },
                        }}
                      />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
                sx={{
                  background:
                    "radial-gradient(circle at center, #3c77f5, #2a31bd)",
                  "&:hover": { borderColor: "#646cff" },
                }}
              >
                {CHECK_AND_RADIO[0].value.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, levelOfAI, theme)}
                    sx={{
                      background: "#cacedb",
                      "&:hover": { background: "#bcbcbc" },
                    }}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="form-group">
            <FormControl
              sx={{
                m: 1,
                width: "95%",
                fontFamily: "Roboto, sans-serif",
                background:
                  "radial-gradient(circle at center, #3c77f5, #2a31bd)",
                color: "rgba(255, 255, 255, 0.87)",
              }}
            >
              <InputLabel
                id="WhereAIIsUsed-chip"
                sx={{
                  fontSize: "1.5rem",
                  color: "#213547",
                  "&.MuiInputLabel-shrink": {
                    transform: "translate(0.6rem, -2rem) scale(0.85)",
                  },
                  "&.Mui-focused": {
                    color: "#213547",
                  },
                }}
              >
                Where AI is used
              </InputLabel>
              <Select
                labelId="WhereAIIsUsed-chip"
                id="Where AI Is Used"
                multiple
                value={whereAIIsUsed}
                onChange={onWhereUsedChange}
                input={<OutlinedInput id="Where AI Is Used" label="" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={value}
                        sx={{
                          height: "2.5rem",
                          fontSize: "1.3rem",
                          background: "#dfdfdf",
                          borderRadius: "5px",
                          padding: "0.7rem",
                          "&:hover": { background: "#cacedb" },
                        }}
                      />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
                sx={{
                  background:
                    "radial-gradient(circle at center, #3c77f5, #2a31bd)",
                  "&:hover": { borderColor: "#646cff" },
                }}
              >
                {CHECK_AND_RADIO[1].value.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, whereAIIsUsed, theme)}
                    sx={{
                      background: "#cacedb",
                      "&:hover": { background: "#bcbcbc" },
                    }}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="form-group">
            <FormControl
              variant="standard"
              sx={{
                m: 1,
                minWidth: "95%",
                display: "block",
                marginBottom: "0.25em",
                "& label": {
                  display: "block",
                  marginBottom: "0.25em",
                  fontSize: "1.3em",
                },
                "& .MuiInputBase-root": {
                  minWidth: "95%",
                },
                "& .MuiSelect-root": {
                  display: "inline-block",
                  padding: "0.5em 1em",

                  marginRight: "0.25em",
                  background: "#dfdfdf",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background 0.3s ease",
                  fontSize: "1.2em",
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
              <InputLabel id="TypeOfAI-select-standard-label">
                Type of AI
              </InputLabel>
              <Select
                labelId="TypeOfAI-select-standard-label"
                id="TypeOfAI-select-standard"
                value={TypeOfAI}
                onChange={onTypeChange}
                label="Type of AI"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"NPC"}>NPC</MenuItem>
                <MenuItem value={"Neural Network"}>Neural Network</MenuItem>
                <MenuItem value={"Function"}>Function</MenuItem>
              </Select>
            </FormControl>
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
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleSubmit}
              sx={{
                borderRadius: "8px",
                border: "1px solid transparent",
                padding: "0.6em 1.2em",
                fontSize: "1em",
                fontWeight: "500",
                fontFamily: "inherit",
                backgroundColor: "#1a1a1a",
                cursor: "pointer",
                transition: "border-color 0.25s",
                "&:hover": {
                  borderColor: "#646cff",
                },
                "&:focus": {
                  outline: "4px auto -webkit-focus-ring-color",
                },
              }}
            >
              Submit
            </Button>
            <Button
              variant="outlined"
              startIcon={<ClearIcon />}
              onClick={handleClear}
              sx={{
                borderRadius: "8px",
                border: "1px solid transparent",
                padding: "0.6em 1.2em",
                fontSize: "1em",
                fontWeight: "500",
                fontFamily: "inherit",
                cursor: "pointer",
                transition: "border-color 0.25s",
                "&:hover": {
                  borderColor: "#646cff",
                },
                "&:focus": {
                  outline: "4px auto -webkit-focus-ring-color",
                },
              }}
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
