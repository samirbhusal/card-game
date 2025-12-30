import type { Pokemon } from "../types/types.card";
import { Card } from "./Card";

interface CardGridProps {
  cards: Pokemon[];
  onCardClick: (id: number) => void;
}

export const CardGrid: React.FC<CardGridProps> = ({ cards, onCardClick }) => {
  return (
    <div className="card-grid">
      {cards.map((poke) => (
        <Card
          key={poke.id}
          pokemon={poke}
          onClick={() => onCardClick(poke.id)}
        />
      ))}
    </div>
  );
};
