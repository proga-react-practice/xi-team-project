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
    <Box
      sx={{
        background: theme.palette.secondary.main,
        pt: 4,
        pb: 4,
        display: "flex",
      }}
    >
      <Container
        sx={{
          pt: 1,
          pb: 2,
          width: "auto",
          background: theme.palette.background.paper,
          borderRadius: 2,
          mx: "auto",
        }}
      >
        <Container>
          <Typography variant="h3" sx={{ pt: 1, pb: 2, textAlign: "center" }}>
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
              justifyContent="center"
              spacing={2}
              sx={{ display: { xs: "block", sm: "flex", md: "flex" } }}
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
