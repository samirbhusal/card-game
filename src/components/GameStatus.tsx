import React from "react";
import type { GameStatusProps } from "../types/types.card";

const GameStatus: React.FC<GameStatusProps> = ({
  status,
  score,
  onRestart,
}) => {
  if (status !== "won") {
    return null;
  }
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>🏆 Master Memory!</h2>
        <p>You caught all {score} Pokémon!</p>
        <button onClick={onRestart} className="restart-btn">
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameStatus;
