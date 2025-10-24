import React from "react";
import games from "@/json/games.json";
import GameCard from "./GameCard";
import Link from "next/link";
import { Button } from "../ui/button";

export default function PopulerGames() {
  const populer = games.games.filter((game) => Math.max(Number(game.ratings)));

  return (
    <section className="container m-auto mt-40 p-5">
      <h2 className="text-2xl font-semibold text-center mb-10"> Populer Games</h2>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {populer.slice(0, 3).map((game) => (
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
      <Button variant={"link"} asChild className="float-right mt-5">
        <Link href={"/games"}>See all games</Link>
      </Button>

    </section>
  );
}
