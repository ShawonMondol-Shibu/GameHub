"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Login from "./Login";
import Register from "./Register";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const navLink = [
    { url: "/", title: "Home" },
    { url: "/games", title: "Games" },
    { url: "/contact", title: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "md:w-xl m-auto bg-[#fafafa50] dark:bg-[#2a2a2a50] flex items-center justify-between p-2 shadow-2xl border backdrop-saturate-150 dark:border fixed top-4 left-1/2 -translate-x-1/2 backdrop-blur-xl rounded-full z-20 w-[90%] "
      )}
    >
      {/* Logo */}
      <Link href={"/"}>
        <Avatar className="w-12 h-12 drop-shadow hover:drop-shadow-lg hover:scale-105 transition">
          <AvatarImage src={"/images/logo-64.png"} alt="logo image" />
          <AvatarFallback>Logo</AvatarFallback>
        </Avatar>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <ButtonGroup>
          {navLink.map((nav) => (
            <Button
              variant={"link"}
              key={nav.title}
              className={cn(
                "text-base font-medium transition hover:underline",
                pathName === nav.url && "underline"
              )}
              asChild
            >
              <Link href={nav.url}>{nav.title}</Link>
            </Button>
          ))}
        </ButtonGroup>

        <ButtonGroup>
          <ModeToggle />
          <Button variant={"outline"} >
            <Login/>
          </Button>
          <ButtonGroupSeparator />
          <Button variant={"outline"}>
            <Register/>
            </Button>
        </ButtonGroup>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full"
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "absolute top-[70px] right-0 bg-[#fafafa80] dark:bg-[#2a2a2a80] backdrop-blur-lg border dark:border-gray-700 rounded-2xl shadow-xl p-4 flex flex-col gap-4 items-center transition-all duration-300 ease-in-out md:hidden",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        {navLink.map((nav) => (
          <Link
            key={nav.title}
            href={nav.url}
            className={cn(
              "text-lg font-medium hover:underline transition",
              pathName === nav.url && "underline"
            )}
            onClick={() => setIsOpen(false)}
          >
            {nav.title}
          </Link>
        ))}

        <div className="flex items-center gap-2 mt-2">
          <ModeToggle />
          <Button variant={"outline"} size={"sm"}>
            Login
          </Button>
          <Button variant={"outline"} size={"sm"}>
            Register
          </Button>
        </div>
      </div>
    </nav>
  );
}
