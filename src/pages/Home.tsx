import { Box } from "@mui/material";
import gamesAIImage from "../images/AI-in-Gaming.png";
import { useTheme } from "@mui/material/styles";
import TextFields from "../components/HomePage/TextFields";
import About from "../components/HomePage/Description";

export default function Home() {
  const theme = useTheme();
  // TODO add choose color functionality
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
            <TextFields
              text="Welcome to our site. We are the Xi team. 
            The team members are Sofiia Stanishevska and Maxym Matskiv. Our project 
            is based on the topic of artificial intelligence in games."
            />
          </Box>
        </Box>

        <About
          link="/games"
          title="About Games"
          article="A video game, also known as a computer game, 
          is an electronic game that can be interacted with using an 
          input device, such as a controller, keyboard, or joystick. 
          Video games can be used for entertainment and relaxation, but they can also 
          be used for competitions and for computer learning."
          aboveButtonText="Right now you can add info about Game here:"
          button="Add game"
        />

        <About
          link="/AI"
          title="About Artificial Intelligence"
          article="Artificial Intelligence (AI) has the potential to completely revolutionize the video 
          game industry, from how games are developed to how they are experienced and played. 
          AI promises to unlock new frontiers in terms of scale, realism, interactivity, 
          and more that could profoundly change gaming as we know it."
          aboveButtonText="Right now you can add info about AI here:"
          button="Add AI"
        />
      </Box>
    </>
  );
}
