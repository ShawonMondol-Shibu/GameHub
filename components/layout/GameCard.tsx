import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Star } from "lucide-react";
import Link from "next/link";
interface gameType {
  id: string;
  coverPhoto: string;
  title: string;
  category: string;
  ratings: string;
}

export default function GameCard({
  id,
  coverPhoto,
  title,
  category,
  ratings,
}: gameType) {
  return (
    <Link href={`/game-details/${id}`}>
      <Card className="w-96 group overflow-hidden ">
        <CardHeader className=" overflow-hidden">
          <Image
            src={coverPhoto}
            alt={title}
            width={500}
            height={500}
            className="w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:contrast-50"
          />
        </CardHeader>
        <CardContent>
          <CardTitle>{title}</CardTitle>
        </CardContent>
        <CardFooter className="justify-between">
          <span className="flex items-center gap-2">
            <Star size={16} /> {ratings}
          </span>
          <Badge variant={"outline"}>{category}</Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}
