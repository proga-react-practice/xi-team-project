import { Container, Link, Typography } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import { SxProps, useTheme } from "@mui/material/styles";

interface iconLinkProp {
  icon: SvgIconComponent;
  link: string;
  title: string;
}

function Links({ icon: Icon, link, title }: iconLinkProp) {
  const theme = useTheme();
  const linkStyles: SxProps = {
    color: theme.palette.text.primary,
    // fontFamily: theme.typography.fontFamily,
    // fontWeight: theme.typography.body1.fontWeight,
    // fontSize: theme.typography.body1.fontSize,
    textAlign: "center",
    display: "flex",
    textDecoration: "none",
  };
  return (
    <Container>
      <Link href={link} sx={linkStyles}>
        <Icon sx={{ marginRight: 1, fontSize: "2rem" }} />
        <Typography sx={{ display: "inline-block" }}>{title}</Typography>
      </Link>
    </Container>
  );
}

export default Links;
