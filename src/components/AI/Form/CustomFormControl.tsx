import React from "react";
import {
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

interface ICustomFormControlProps {
  label: string;
  values: string[];
  selectedValue: string | string[];
  multiple: boolean;
  onChange: (newOption: string[]) => void;
}

const CustomFormControl: React.FC<ICustomFormControlProps> = ({
  label,
  values,
  selectedValue,
  multiple,
  onChange,
}) => {
  const handleChange = (event: SelectChangeEvent<string | string[]>) => {
    const {
      target: { value },
    } = event;
    const newOption = Array.isArray(value) ? value : value.split(",");
    onChange(newOption);
  };

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
        value={selectedValue}
        onChange={handleChange}
        sx={{ minHeight: 65 }}
        renderValue={(selected) => (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 0.5,
            }}
          >
            {(Array.isArray(selected) ? selected : [selected]).map((value) => (
              <Chip key={value} label={value} />
            ))}
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
