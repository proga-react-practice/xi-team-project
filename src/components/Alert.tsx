import React, { SyntheticEvent } from "react";
import { Alert, AlertTitle, Snackbar, Stack } from "@mui/material";
import { SnackbarCloseReason } from "@mui/material/Snackbar";

export default function Alerts({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) {
  const [open, setOpen] = React.useState(true);

  const handleSnackbarClose = (
    _: SyntheticEvent | Event,
    reason: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    onClose();
  };

  const handleAlertClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          severity="error"
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            zIndex: 1000,
          }}
          onClose={handleAlertClose}
        >
          <AlertTitle>Error</AlertTitle>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
