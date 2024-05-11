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
          px: 10,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          py: 3,
        }}
      >
        <Box sx={{ background: "#fff", px: 4, py: 1, borderRadius: 2 }}>
          <Box
            sx={{
              display: "flex",
              gap: 5,
              py: 5,
            }}
          >
            <Box
              component="img"
              sx={{
                height: 220,
                width: 400,

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

        <Box sx={{ background: "#fff", px: 2, py: 1, borderRadius: 2 }}>
          <About
            title="About Games"
            text1="Games are very popular in the modern world...."
            text2="Right now you can add info about Game here:"
            button="Add game"
          />
        </Box>

        <About
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
