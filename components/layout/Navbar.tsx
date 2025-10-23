import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ModeToggle } from "../ModeToggle";

export default function Navbar() {
  const navLink = [
    { url: "#", title: "Home" },
    { url: "#", title: "Games" },
    { url: "#", title: "Contact" },
  ];
  return (
    <nav className="min-w-xl m-auto bg-[#fafafa10] flex items-center justify-between gap-10 p-2 drop-shadow-xl border fixed top-1 left-1/2 -translate-x-1/2  backdrop-blur rounded-full ">
      <Link href={"/"}>
        <Avatar className=" w-12 h-12 drop-shadow hover:drop-shadow-lg hover:scale-105">
          <AvatarImage src={"/images/logo-64.png"} alt="" />
          <AvatarFallback>logo</AvatarFallback>
        </Avatar>
      </Link>

      <div className="flex items-center space-x-10 ">
        <ButtonGroup className="space-x-5">
          {navLink.map((nav) => (
            <Button variant={"link"} key={nav.title} asChild>
              <Link href={nav.url}>{nav.title}</Link>
            </Button>
          ))}
        </ButtonGroup>

        <ButtonGroup>
          <ModeToggle />
          <Button variant={"outline"}>login</Button>
          <ButtonGroupSeparator />
          <Button variant={"outline"}>Register</Button>
        </ButtonGroup>
      </div>
    </nav>
  );
}
