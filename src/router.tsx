import { createBrowserRouter } from "react-router-dom";
import Ai from "./pages/AI.tsx";
import RootLayout from "./pages/Root.tsx";
import Home from "./pages/Home.tsx";
import Game from "./pages/Games.tsx";
import Error from "./pages/Error.tsx";
import {
  HOME_ROUTE,
  AI_ROUTE,
  GAMES_ROUTE,
  ERROR_ROUTE,
  MIX_ROUTE,
} from "./routes.tsx";
import MixCards from "./pages/MixCards.tsx";

const router = createBrowserRouter([
  {
    path: HOME_ROUTE,
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: AI_ROUTE, element: <Ai /> },
      { path: GAMES_ROUTE, element: <Game /> },
      { path: ERROR_ROUTE, element: <Error /> },
      { path: MIX_ROUTE, element: <MixCards /> },
    ],
  },
]);

export default router;
