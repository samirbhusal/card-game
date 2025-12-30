import type { Pokemon } from "../types/types.card";

interface CardProps {
  pokemon: Pokemon;
  onClick: () => void;
}

export const Card: React.FC<CardProps> = ({ pokemon, onClick }) => {
  return (
    <div className="card-container" onClick={onClick}>
      <div className="card-inner">
        <div className="card-front">
          <img src={pokemon.image} alt={pokemon.name} />
          <h3>{pokemon.name}</h3>
        </div>
        <div className="card-back">
          {/* You can put a Pokeball logo here */}
          <div className="pokeball-logo"></div>
        </div>
      </div>
    </div>
  );
};
