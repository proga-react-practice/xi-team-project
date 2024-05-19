import { createContext, useContext } from "react";
import { Card } from "../Games/Cards";

export const CardsContext = createContext<Card[] | undefined>(undefined);

export function useCardsContext() {
  const cards = useContext(CardsContext);

  if (cards === undefined) {
    throw new Error("useCardsContext must be used with a CardsContext");
  }

  return cards;
}
