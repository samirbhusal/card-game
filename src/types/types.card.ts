export interface Pokemon {
  id: number;
  name: string;
  image: string;
}

export interface ScoreState {
  currentScore: number;
  bestScore: number;
}

// Interfaces for the raw PokeAPI response
export interface PokemonListResponse {
  results: { url: string }[];
}

export interface PokemonDetailResponse {
  id: number;
  name: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

export interface GameStatusProps {
  status: "loading" | "playing" | "error" | "won";
  score: number;
  onRestart: () => void;
}