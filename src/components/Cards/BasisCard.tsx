import { Box, useTheme } from "@mui/material";
import { BoxProps } from "@mui/material/Box";

const BasisCard: React.FC<BoxProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flexDirection: "column",
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: { md: 0, lg: 2 },
        paddingRight: { md: 0, lg: 2 },
        maxWidth: { md: "90%", lg: "80%" },
        border: "2px solid",
        borderColor: theme.palette.text.primary,
        py: 2.5,
        borderRadius: 2,
        position: "relative",
        marginBottom: 5,
        bgcolor: "background.paper",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: theme.spacing(1),
          left: {
            xs: theme.spacing(1),
            sm: theme.spacing(2),
            md: theme.spacing(4),
          },
          right: {
            xs: theme.spacing(0.7),
            sm: theme.spacing(1),
            md: theme.spacing(2),
          },
          height: "2px",
          backgroundColor: theme.palette.text.primary,
        },
      }}
    >
      {children}
    </Box>
  );
};
export default BasisCard;
