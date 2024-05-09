// import React from "react";
import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface TextProps {
  text: string;
}

function Text({ text }: TextProps) {
  const theme = useTheme();
  return (
    <Container
      sx={{ bgcolor: theme.palette.background.paper, borderRadius: 2 }}
    >
      <Typography sx={{ py: 2, marginBottom: 1.5, textAlign: "left" }}>
        {text}
      </Typography>
    </Container>
  );
}

export default Text;
