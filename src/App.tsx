import React, { useState, useEffect } from "react";
import { fetchPokemon } from "./services/pokemanServices";
import type { Pokemon } from "./types/types.card";
import Header from "./components/Header";
import { CardGrid } from "./components/CardGrid";

const App: React.FC = () => {
  const CARD_COUNT = 12;
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [clickedIds, setClickedIds] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  // Added "won" to the status type
  const [status, setStatus] = useState<"loading" | "playing" | "error" | "won">(
    "loading"
  );

  // Single useEffect for mounting
  useEffect(() => {
    const loadGame = async () => {
      try {
        setStatus("loading");
        const data = await fetchPokemon(CARD_COUNT);
        setPokemon(data);
        setStatus("playing");
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    };
    loadGame();
  }, []); // Only runs once on mount

  const handleCardClick = (id: number) => {
    if (status !== "playing") return;

    if (clickedIds.includes(id)) {
      setScore(0);
      setClickedIds([]);
      // Optional: Add a shake effect or "Game Over" toast here
    } else {
      const newScore = score + 1;
      const newClicked = [...clickedIds, id];

      setScore(newScore);
      setClickedIds(newClicked);

      if (newScore > bestScore) setBestScore(newScore);

      if (newClicked.length === CARD_COUNT) {
        setStatus("won");
        return;
      }
    }
    // Shuffle logic
    setPokemon((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  const restartGame = () => {
    setScore(0);
    setClickedIds([]);
    setStatus("playing");
    setPokemon((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  // Conditional Rendering
  if (status === "loading") {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <p>Catching 'em all...</p>
      </div>
    );
  }

  if (status === "error") {
    return <div className="error">Failed to load Pokemon. Please refresh.</div>;
  }

  return (
    <div className="app">
      <Header currentScore={score} bestScore={bestScore} />

      <main>
        <CardGrid cards={pokemon} onCardClick={handleCardClick} />
      </main>

      {status === "won" && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>🏆 Master Memory!</h2>
            <p>You caught all {CARD_COUNT} Pokémon!</p>
            <button onClick={restartGame} className="restart-btn">
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
