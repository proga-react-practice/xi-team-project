// import React from "react";
import { Box } from "@mui/material";
import gamesAIImage from "../images/games-ai.jpg";
import { useTheme } from "@mui/material/styles";
import Text from "../components/HomePage/TextFields";
import About from "../components/HomePage/Description";
import Footer from "../components/Footer";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          bgcolor: theme.palette.background.default,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          py: 3,
          px: { xs: 2, sm: 5, md: 10 },
        }}
      >
        <Box
          sx={{
            background: theme.palette.secondary.main,
            px: { xs: 2, sm: 3, md: 4 },
            py: 1,
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              gap: { xs: 1, sm: 3, md: 5 },
              py: { xs: 1, sm: 3, md: 5 },

              justifyContent: "center",
              textAlign: "center",
              "& img": {
                maxWidth: "100%",
                height: "auto",
              },
            }}
          >
            <Box
              component="img"
              sx={{
                height: 220,
                width: 400,
                alignItems: { sx: "center", sm: "center", md: "left" },
                marginX: "auto",
                display: "block",
                borderRadius: 2,
              }}
              alt="Image"
              src={gamesAIImage}
            />
            <Text
              text="Welcome to our site. The topic is games and
they have artificial intelligence."
            />
          </Box>
        </Box>

        <About
          link="/games"
          title="About Games"
          text1="Games are very popular in the modern world...."
          text2="Right now you can add info about Game here:"
          button="Add game"
        />

        <About
          link="/AI"
          title="About Artificial Intelligence"
          text1="Nowadays, artificial intelligence plays an important role
        in our lifes. Now it's like the Internet in the
         nineties. Without it, our life does not exist"
          text2="Right now you can add info about AI here:"
          button="Add AI"
        />
      </Box>
      <Footer />
    </>
  );
}
