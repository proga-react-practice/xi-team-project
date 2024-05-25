import ReactDOM from "react-dom/client";
import router from "./router.tsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { AICardsProvider } from "./components/context/AICardsContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AICardsProvider>
    <DndProvider backend={HTML5Backend}>
      <RouterProvider router={router} />
    </DndProvider>
  </AICardsProvider>
);
