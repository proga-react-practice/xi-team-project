import { useContext } from "react";
import { AICardsContext } from "./AICardsContextProvider.tsx";

export const useAICardsContext = () => {
  const context = useContext(AICardsContext);
  if (context === undefined) {
    throw new Error("useCardsContext must be used within a AICardsProvider");
  }
  return context;
};
