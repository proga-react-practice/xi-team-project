import React from "react";
import ReactDOM from "react-dom/client";
import Ai from "./pages/AI.tsx";
import RootLayout from "./pages/Root.tsx";
import Home from "./pages/Home.tsx";
import Game from "./pages/Games.tsx";
import Error from "./pages/Error.tsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PlaygroundRoute } from "./pages/dev/PlaygroundRoute.tsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/AI", element: <Ai /> },
      { path: "/games", element: <Game /> },
      { path: "/playground", element: <PlaygroundRoute /> },
      { path: "*", element: <Error /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <RouterProvider router={router} />
    </DndProvider>
  </React.StrictMode>
);
