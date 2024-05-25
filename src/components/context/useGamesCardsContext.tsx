import { useContext } from "react";
import { GamesCardsContext } from "./GamesCardsContextProvider";

export const useGamesCardsContext = () => {
  const context = useContext(GamesCardsContext);
  if (context === undefined) {
    throw new Error("useCardsContext must be used within a CardsProvider");
  }
  return context;
};
