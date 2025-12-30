# 📝 PokéMemory - Memory Card Game

**PokéMemory** is a high-performance memory game built with React and TypeScript. The challenge is simple: click on every Pokémon card exactly once. If you click the same card twice, your score resets.

---

## 🚀 Features

- **Real-time Data**: Fetches high-quality sprites and data from the [PokéAPI](https://pokeapi.co/).
- **Persistent High Score**: Tracks your `Current Score` and maintains your `Best Score` across sessions.
- **Shuffle Logic**: Uses a Fisher-Yates inspired shuffle to reorder cards after every click.
- **Type Safety**: Fully typed with TypeScript to ensure predictable data structures.
- **Axios Interceptors**: Implements a custom Axios client to handle base URLs and global error catching.
- **Responsive UI**: A modern, dark-themed grid layout optimized for all screen sizes.

---

## 🛠️ Tech Stack

- **Core**: React 18
- **Language**: TypeScript
- **State Management**: React Hooks (`useState`, `useEffect`)
- **HTTP Client**: Axios (Instance + Interceptors)
- **Styling**: CSS3 (Grid & Flexbox)

---

## 📂 Folder Structure

```text
src/
├── components/
│   ├── Header.tsx      # Layout & Title
│   ├── Scoreboard.tsx  # Score logic
│   ├── CardGrid.tsx    # Responsive grid
│   └── Card.tsx        # Individual card logic
├── services/
│   ├── apiClient.ts    # Axios configuration
│   └── pokemonService.ts # API logic
├── types/
│   └── types.card.ts   # TS Interfaces
├── App.tsx             # Game state manager
└── index.css           # Global theme & animations
```
