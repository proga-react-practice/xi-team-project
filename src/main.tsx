import React from "react";
import ReactDOM from "react-dom/client";
import Ai from "./pages/AI.tsx";
import RootLayout from "./pages/Root.tsx";
import Home from "./pages/Home.tsx";
import Game from "./pages/Game.tsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/AI", element: <Ai /> },
      { path: "/games", element: <Game /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
