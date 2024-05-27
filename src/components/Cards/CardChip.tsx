import { ChipProps as MuiChipProps, Chip as MuiChip } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const StyledLabel = styled("span")({
  whiteSpace: "normal",
});

interface ChipProps extends MuiChipProps {
  label: string;
}

const CardChip: React.FC<ChipProps> = ({ label, ...props }) => (
  <MuiChip label={<StyledLabel>{label}</StyledLabel>} {...props} />
);

export default CardChip;
