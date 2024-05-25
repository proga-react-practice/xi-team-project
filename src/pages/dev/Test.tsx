import type { CSSProperties, FC } from "react";
import { memo } from "react";
import { useDrag, useDrop } from "react-dnd";
import { CardComponent } from "../../components/Games/Cards";
import { CardsProvider } from "../../components/context/GamesCardsContextProvider";

const style: CSSProperties = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  cursor: "move",
};

export interface CardProps {
  id: string;
  text: string;
  moveCard: (id: string, to: number) => void;
  findCard: (id: string) => { index: number };
}

interface Item {
  id: string;
  originalIndex: number;
}

export const Card: FC<CardProps> = memo(function Card({
  id,
  text,
  moveCard,
  findCard,
}) {
  const originalIndex = findCard(id).index;
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "card",
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveCard(droppedId, originalIndex);
        }
      },
    }),
    [id, originalIndex, moveCard]
  );

  const [, drop] = useDrop(
    () => ({
      accept: "card",
      hover({ id: draggedId }: Item) {
        if (draggedId !== id) {
          const { index: overIndex } = findCard(id);
          moveCard(draggedId, overIndex);
        }
      },
    }),
    [findCard, moveCard]
  );

  const opacity = isDragging ? 0 : 1;
  return (
    <div ref={(node) => drag(drop(node))} style={{ ...style, opacity }}>
      <CardsProvider>
        <CardComponent
          card={{
            id: "string",
            name: "string",
            difficulty: "string",
            price: 123,
            currency: "string",
          }}
        />
      </CardsProvider>
    </div>
  );
});
