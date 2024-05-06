import React from "react";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

interface CustomFormControlProps {
  label: string;
  values: string[];
  selectedValues: string | string[];
  multiple?: boolean;
  onChange: (event: SelectChangeEvent<string | string[]>) => void;
}

const CustomFormControl: React.FC<CustomFormControlProps> = ({
  label,
  values,
  selectedValues,
  multiple,
  onChange,
}) => {
  return (
    <FormControl
      fullWidth
      sx={{
        marginBottom: "0.65em",
      }}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        multiple={multiple}
        value={selectedValues}
        onChange={onChange}
        renderValue={(selected) => (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 0.5,
            }}
          >
            {multiple ? (
              Array.isArray(selected) &&
              selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  sx={{
                    height: "1.8rem",
                    padding: { xs: 0.5, sm: 1, md: 1.5 },
                  }}
                />
              ))
            ) : (
              <Chip
                key={selected as string}
                label={selected as string}
                sx={{
                  height: "1.8rem",
                  padding: { xs: 0.5, sm: 1, md: 1.5 },
                }}
              />
            )}
          </Box>
        )}
      >
        {values.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomFormControl;
