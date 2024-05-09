import { Button, Box, Container } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
import Text from "./TextFields";

interface textProps {
  text1: string;
  text2: string;
  button: string;
}

function About({ text1, text2, button }: textProps) {
  // const theme = useTheme();
  return (
    <>
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
          <Button fullWidth>{button}</Button>
        </Container>
      </Box>
    </>
  );
}
export default About;
