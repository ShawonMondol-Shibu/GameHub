'use client'
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const bannerVideo = [
  {url:"/images/pubg.mp4", game:"pubg"},
  {url:"/images/arena4.mp4", game:"shadow fight 4 arena"},
  {url:"/images/coc.mp4", game:"COC"},
]

export default function Header() {
  console.log(window.screen.width===100);
  
  return (
    <header className=" h-[80vh]">
      <Carousel className="w-full h-[80vh] items-center">
        <CarouselContent>
          {bannerVideo.map((banner) => (
            <CarouselItem key={banner.game} >
                  <video src={banner.url} loop autoPlay={false} className="object-cover saturate-150"></video>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </header>
  );
}
