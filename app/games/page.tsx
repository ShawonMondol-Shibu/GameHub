import GameCard from "@/components/layout/GameCard";
import React from "react";
import games from "@/json/games.json";
export default function Page() {
  return (
    <main className="space-y-20 pt-40">
      <div className="text-center space-y-4">

      <h1 className="text-2xl font-semibold  capitalize">all available games</h1>
      <p>Choose you favourite games and install it.</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {games.games.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            title={game.title}
            coverPhoto={game.coverPhoto}
            category={game.category}
            ratings={game.ratings}
          />
        ))}
      </div>
    </main>
  );
}
