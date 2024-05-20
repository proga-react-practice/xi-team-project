import React, { createContext, useContext, useState, useEffect } from "react";
import { Card } from "../Games/Cards";

const LOCAL_STORAGE_KEY = "cards";

interface CardsContextType {
  cards: Card[];
  addCard: (card: Card) => void;
  updateCard: (updatedCard: Card) => void;
  deleteCard: (id: string) => void;
  editingCard: Card | null;
  setEditingCard: (card: Card | null) => void;
}

const CardsContext = createContext<CardsContextType | undefined>(undefined);

export const useCardsContext = () => {
  const context = useContext(CardsContext);
  if (context === undefined) {
    throw new Error("useCardsContext must be used within a CardsProvider");
  }
  return context;
};

export const CardsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cards, setCards] = useState<Card[]>(() => {
    const savedCards = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedCards ? JSON.parse(savedCards) : [];
  });
  const [editingCard, setEditingCard] = useState<Card | null>(null);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cards));
  }, [cards]);

  const addCard = (card: Card) => {
    setCards((prevCards) => [...prevCards, card]);
  };

  const updateCard = (updatedCard: Card) => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    );
    setEditingCard(null);
  };

  const deleteCard = (id: string) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  return (
    <CardsContext.Provider
      value={{
        cards,
        addCard,
        updateCard,
        deleteCard,
        editingCard,
        setEditingCard,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};
