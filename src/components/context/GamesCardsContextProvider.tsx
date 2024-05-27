import React, { createContext, useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "cards";

export interface Card {
  name: string;
  difficulty: string;
  price: number;
  currency: string;
  levelOfAI?: string[];
  whereAIIsUsed?: string[];
  TypeOfAI?: string;
  rateAIIntelligence?: number;
  id: string;
}

export interface MixedCard {
  name: string;
  difficulty: string;
  price: number;
  currency: string;
  levelOfAI: string[];
  whereAIIsUsed: string[];
  TypeOfAI: string;
  rateAIIntelligence: number;
  id: string;
}

interface CardsContextType {
  cards: Card[];
  addCard: (card: Card) => void;
  updateCard: (updatedCard: Card) => void;
  deleteCard: (id: string) => void;
  editingCard: Card | null;
  setEditingCard: (card: Card | null) => void;
  reorderCards: (newOrder: Card[]) => void;
  mixedCard: MixedCard | null;
  setMixedCard: React.Dispatch<React.SetStateAction<MixedCard | null>>;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchTerms: string[];
  setSearchTerms: (terms: string[]) => void;
}

export const GamesCardsContext = createContext<CardsContextType | undefined>(
  undefined
);

export const CardsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cards, setCards] = useState<Card[]>(() => {
    const savedCards = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedCards ? JSON.parse(savedCards) : [];
  });
  const [editingCard, setEditingCard] = useState<Card | null>(null);
  const [mixedCard, setMixedCard] = useState<MixedCard | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchTerms, setSearchTerms] = useState<string[]>([]);

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

  const reorderCards = (newOrder: Card[]) => {
    setCards(newOrder);
  };

  return (
    <GamesCardsContext.Provider
      value={{
        cards,
        addCard,
        updateCard,
        deleteCard,
        editingCard,
        setEditingCard,
        mixedCard,
        setMixedCard,
        reorderCards,
        searchQuery,
        setSearchQuery,
        searchTerms,
        setSearchTerms,
      }}
    >
      {children}
    </GamesCardsContext.Provider>
  );
};
