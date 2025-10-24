"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Zap, Gamepad2, Trophy } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      setMessage("Please enter your email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email");
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      setMessage("Welcome to the gaming community! Check your email.");
      setEmail("");

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden mt-40">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gamepad2 className="w-6 h-6 text-primary" />
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">
              Level Up Your Gaming
            </h2>
            <Zap className="w-6 h-6 text-accent" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Get exclusive game releases, early access to new titles, special
            discounts, and gaming tips delivered to your inbox.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
            <Trophy className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-sm">Exclusive Deals</h3>
              <p className="text-xs text-muted-foreground">
                Early access to discounts
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
            <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-sm">New Releases</h3>
              <p className="text-xs text-muted-foreground">
                First to know about launches
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
            <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-sm">Weekly Tips</h3>
              <p className="text-xs text-muted-foreground">
                Gaming strategies & guides
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="flex-1 h-12 text-base"
              aria-label="Email address"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="h-12 px-8 whitespace-nowrap"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>

          {/* Status Messages */}
          {status === "success" && (
            <div className="mt-4 p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
              <p className="text-sm font-medium text-green-800 dark:text-green-200">
                ✓ {message}
              </p>
            </div>
          )}

          {status === "error" && (
            <div className="mt-4 p-4 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
              <p className="text-sm font-medium text-red-800 dark:text-red-200">
                ✕ {message}
              </p>
            </div>
          )}
        </form>

        {/* Footer Text */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
