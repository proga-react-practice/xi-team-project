import { Box, Container, Grid, Typography } from "@mui/material";
import Links from "../components/Links";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useTheme } from "@mui/material/styles";

function Footer() {
  const theme = useTheme();
  return (
    <Box sx={{ background: "#fff", pt: 4, pb: 4, display: "flex" }}>
      <Container
        sx={{
          p: 1,
          // mb: 3,
          width: "auto",
          background: theme.palette.background.paper,
          borderRadius: 2,
          mx: "auto",

          // width: {
          //   xs: "100%", // Set width to 100% for extra small screens
          //   sm: "auto", // Reset width for small screens and above
          // },
        }}
      >
        <Container>
          <Typography variant="h3" sx={{ pt: 1, pb: 5, textAlign: "center" }}>
            Contacts
          </Typography>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Grid
              container
              // spacing={4}
              justifyContent="center"
            >
              <Grid item>
                <Container
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Links link="#" icon={InstagramIcon} title="Instagram" />
                  <Links link="#" icon={YouTubeIcon} title="YouTube" />
                </Container>
              </Grid>
              <Grid item>
                <Container
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Links link="#" icon={XIcon} title="X" />
                  <Links link="#" icon={TelegramIcon} title="Telegram" />
                </Container>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Container>
    </Box>
  );
}

export default Footer;
