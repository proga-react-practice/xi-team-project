import { Button, Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Text from "./TextFields";

interface textProps {
  title: string;
  text1: string;
  text2: string;
  button: string;
}

function About({ title, text1, text2, button }: textProps) {
  const theme = useTheme();
  return (
    <Box sx={{ background: "#fff", px: 2, py: 1, borderRadius: 2 }}>
      <Typography sx={{ pl: 3 }}>{title}</Typography>
      <Box
        sx={{
          display: "flex",
          pb: 5,
          justifyContent: "space-between",
          gap: 3,
          // bgColor: theme.palette.
        }}
      >
        <Text text={text1} />
        <Container
          disableGutters
          sx={{
            width: "50%",
          }}
        >
          <Text text={text2} />
          <Button
            fullWidth
            sx={{
              background: theme.palette.primary.main,
            }}
          >
            {button}
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
export default About;
