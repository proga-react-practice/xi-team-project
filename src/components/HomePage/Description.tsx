import { Button, Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Text from "./TextFields";
import { Link } from "react-router-dom";

interface textProps {
  link: string;
  title: string;
  article: string;
  aboveButtonText: string;
  button: string;
}

function About({ link, title, article, aboveButtonText, button }: textProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: theme.palette.secondary.main,
        px: 2,
        py: 1,
        borderRadius: 2,
      }}
    >
      <Typography sx={{ pl: 3 }}>{title}</Typography>
      <Box
        sx={{
          display: "flex",
          pb: 5,
          justifyContent: "space-between",
          gap: 3,
          flexDirection: { xs: "column", sm: "column", md: "row" },
          px: { xs: 0.1, sm: 1, md: 2 },
        }}
      >
        <Text text={article} />
        <Container
          disableGutters
          sx={{
            width: { xs: "100%", sm: "100%", md: "50%" },
          }}
        >
          <Text text={aboveButtonText} />
          <Button variant="contained" fullWidth component={Link} to={link}>
            {button}
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
export default About;
