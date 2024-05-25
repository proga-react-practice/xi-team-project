import React, { createContext, useContext, useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "ai_cards";

export interface AICard {
  //   name: string;
  //   difficulty: string;
  //   price: number;
  //   currency: string;
  levelOfAI: string[];
  whereAIIsUsed: string[];
  TypeOfAI: string;
  rateAIIntelligence: number;
  id: string;
}

interface AICardsContextType {
  AICards: AICard[];
  addCard: (card: AICard) => void;
  updateCard: (updatedCard: AICard) => void;
  deleteCard: (id: string) => void;
  editingCard: AICard | null;
  setEditingCard: (card: AICard | null) => void;
  reorderCards: (newOrder: AICard[]) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchTerms: string[];
  setSearchTerms: (terms: string[]) => void;
}

const AICardsContext = createContext<AICardsContextType | undefined>(undefined);

export const useAICardsContext = () => {
  const context = useContext(AICardsContext);
  if (context === undefined) {
    throw new Error("useCardsContext must be used within a AICardsProvider");
  }
  return context;
};

export const AICardsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [AICards, setCards] = useState<AICard[]>(() => {
    const savedCards = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedCards ? JSON.parse(savedCards) : [];
  });
  const [editingCard, setEditingCard] = useState<AICard | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchTerms, setSearchTerms] = useState<string[]>([]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(AICards));
  }, [AICards]);

  const addCard = (card: AICard) => {
    setCards((prevCards) => [...prevCards, card]);
  };

  const updateCard = (updatedCard: AICard) => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    );
    setEditingCard(null);
  };

  const deleteCard = (id: string) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  const reorderCards = (newOrder: AICard[]) => {
    setCards(newOrder);
  };

  return (
    <AICardsContext.Provider
      value={{
        AICards,
        addCard,
        updateCard,
        deleteCard,
        editingCard,
        setEditingCard,
        reorderCards,
        searchQuery,
        setSearchQuery,
        searchTerms,
        setSearchTerms,
      }}
    >
      {children}
    </AICardsContext.Provider>
  );
};
