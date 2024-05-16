import { useCallback, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrop } from "react-dnd";
import { Card } from "./Test";

const ITEMS = [
  {
    id: 1,
    text: "Write a cool JS library",
  },
  {
    id: 2,
    text: "Make it generic enough",
  },
  {
    id: 3,
    text: "Write README",
  },
  {
    id: 4,
    text: "Create some examples",
  },
  {
    id: 5,
    text: "Spam in Twitter and IRC to promote it",
  },
  {
    id: 6,
    text: "???",
  },
  {
    id: 7,
    text: "PROFIT",
  },
];

export const PlaygroundRoute = () => {
  const [cards, setCards] = useState(ITEMS);

  const findCard = useCallback(
    (id: string) => {
      const card = cards.filter((c) => `${c.id}` === id)[0] as {
        id: number;
        text: string;
      };
      return {
        card,
        index: cards.indexOf(card),
      };
    },
    [cards]
  );

  const moveCard = useCallback(
    (id: string, atIndex: number) => {
      const { card, index } = findCard(id);
      
      // Create a shallow copy of the cards array
      const updatedCards = [...cards];
      
      // Remove the card from its original position
      updatedCards.splice(index, 1);
      
      // Insert the card at the new position
      updatedCards.splice(atIndex, 0, card);
      
      // Update the state with the modified array
      setCards(updatedCards);
    },
    [findCard, cards, setCards],
  );

  const [, drop] = useDrop(() => ({ accept: "card" }));

  return (
    <div ref={drop}>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={`${card.id}`}
          text={card.text}
          moveCard={moveCard}
          findCard={findCard}
        />
      ))}
    </div>
  );
};
