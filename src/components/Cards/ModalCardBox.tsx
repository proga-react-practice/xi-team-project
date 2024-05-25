import { Box, useTheme } from "@mui/material";
import { BoxProps } from "@mui/material/Box";

export const ModalCardBox: React.FC<BoxProps> = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flexDirection: "column",
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: { sm: 0, md: 1, lg: 1, xl: 2 },
        paddingRight: { sm: 0, md: 1, lg: 6 },
        maxWidth: { md: "95%", lg: "95%" },
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
      {...props}
    />
  );
};
