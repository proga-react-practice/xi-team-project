import React from "react";
import { Alert, AlertTitle, Dialog, Stack } from "@mui/material";

export default function Alerts({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) {
  const [open, setOpen] = React.useState(true);

  const handleDialogClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Dialog open={open} onClose={handleDialogClose}>
        <Alert
          severity="error"
          sx={{
            fontSize: "1.2em",
            boxShadow: "0px 3px 5px 2px rgba(0, 0, 0, 0.3)",
            padding: "20px",
            zIndex: 1000,
          }}
          onClose={handleDialogClose}
        >
          <AlertTitle>Error</AlertTitle>
          {message}
        </Alert>
      </Dialog>
    </Stack>
  );
}
