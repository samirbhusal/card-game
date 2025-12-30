import React from "react";
import Scoreboard from "./Scoreboard";
import type { ScoreState } from "../types/types.card";

const Header: React.FC<ScoreState> = ({ currentScore, bestScore }) => {
  return (
    <header className="game-header">
      <div className="logo-section">
        <h1>PokéMemory</h1>
        <p>Don't click the same Pokémon twice!</p>
      </div>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
    </header>
  );
};

export default Header;
