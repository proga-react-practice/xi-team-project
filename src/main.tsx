import React from "react";
import ReactDOM from "react-dom/client";
import Ai from "./pages/AI.tsx";
import RootLayout from "./pages/Root.tsx";
import Home from "./pages/Home.tsx";
import Game from "./pages/Games.tsx";
import Error from "./pages/Error.tsx";

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
      { path: "*", element: <Error /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
