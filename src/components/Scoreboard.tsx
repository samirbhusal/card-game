import React from "react";
import type { ScoreState } from "../types/types.card";

export const Scoreboard: React.FC<ScoreState> = ({
  currentScore,
  bestScore,
}) => {
  return (
    <div className="scoreboard">
      <div className="score-badge current">
        <span>Current Score</span>
        <strong>{currentScore}</strong>
      </div>
      <div className="score-badge best">
        <span>Best Score</span>
        <strong>{bestScore}</strong>
      </div>
    </div>
  );
};

export default Scoreboard;
