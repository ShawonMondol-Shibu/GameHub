"use client";

import { useState } from "react";
import { Heart, Download, Share2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import gamesData from "@/json/games.json";

export default function GameDetailsPage({ id }: { id: string }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showInstallSuccess, setShowInstallSuccess] = useState(false);

  const game = gamesData.games.find((g) => g.id === id);

  if (!game) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Game not found</h1>
            <Link href="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const handleInstall = () => {
    setIsInstalled(true);
    setShowInstallSuccess(true);
    setTimeout(() => setShowInstallSuccess(false), 3000);
    window.open(game.downloadLink, "_blank");
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: game.title,
        text: `Check out ${game.title} - ${game.description}`,
        url: window.location.href,
      });
    }
  };

  const ratingNumber = Number.parseFloat(game.ratings);

  return (
    <main className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              ← Back
            </Button>
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Game image and details */}
          <div className="lg:col-span-2">
            {/* Cover image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <Image
                src={game.coverPhoto || "/placeholder.svg"}
                alt={game.title}
                width={600}
                height={400}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">About this game</h2>
              <p className="text-slate-300 leading-relaxed">
                {game.description}
              </p>
            </div>
          </div>

          {/* Right column - Install card and info */}
          <div>
            {/* Install card */}
            <Card className="bg-slate-900 border-slate-800 p-6 mb-6 sticky top-4">
              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(ratingNumber)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-slate-600"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-bold">{game.ratings}</span>
              </div>

              {/* Install button */}
              <Button
                onClick={handleInstall}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-3 py-6 text-lg"
                disabled={isInstalled}
              >
                <Download className="w-5 h-5 mr-2" />
                {isInstalled ? "Installed" : "Install Now"}
              </Button>

              {/* Success message */}
              {showInstallSuccess && (
                <div className="bg-green-900 border border-green-700 text-green-200 px-4 py-2 rounded-lg mb-3 text-sm">
                  ✓ Opening download link...
                </div>
              )}

              {/* Wishlist button */}
              <Button
                onClick={handleWishlist}
                variant="outline"
                className="w-full mb-3 border-slate-700 hover:bg-slate-800 bg-transparent"
              >
                <Heart
                  className={`w-5 h-5 mr-2 ${
                    isWishlisted ? "fill-red-500 text-red-500" : ""
                  }`}
                />
                {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
              </Button>

              {/* Share button */}
              <Button
                onClick={handleShare}
                variant="outline"
                className="w-full border-slate-700 hover:bg-slate-800 bg-transparent"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </Button>

              {/* Game info */}
              <div className="mt-6 pt-6 border-t border-slate-800 space-y-4">
                <div>
                  <p className="text-slate-400 text-sm">Developer</p>
                  <p className="text-white font-semibold">{game.developer}</p>
                </div>

                <div>
                  <p className="text-slate-400 text-sm">Category</p>
                  <p className="text-white font-semibold">{game.category}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
