import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

interface ICustomSliderProps {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
}

const CustomSlider: React.FC<ICustomSliderProps> = ({ sx, children }) => {
  return (
    <Box
      sx={{
        "&::-webkit-scrollbar": {
          width: "0.5em",
        },
        "&::-webkit-scrollbar-track": {
          boxShadow: (theme) =>
            theme.palette.mode === "dark" ? `inset 0 0 9px` : `inset 0 0 6px`,
          borderRadius: (theme) => theme.shape.borderRadius,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: (theme) => theme.palette.primary.main,
          borderRadius: (theme) => theme.shape.borderRadius,
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default CustomSlider;
