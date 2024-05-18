import React from "react";
import ReactDOM from "react-dom/client";
import Ai from "./pages/AI.tsx";
import RootLayout from "./pages/Root.tsx";
import Home from "./pages/Home.tsx";
import Game from "./pages/Games.tsx";
import Error from "./pages/Error.tsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MixCards from "./pages/MixCards.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/AI", element: <Ai /> },
      { path: "/games", element: <Game /> },
      { path: "*", element: <Error /> },
      { path: "/mix-cards", element: <MixCards /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
