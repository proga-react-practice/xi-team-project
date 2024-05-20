import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router.tsx";
import { RouterProvider } from "react-router-dom";
import { Box } from "@mui/material";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Box
      sx={{
        margin: -1,
      }}
    >
      <RouterProvider router={router} />
    </Box>
  </React.StrictMode>
);
