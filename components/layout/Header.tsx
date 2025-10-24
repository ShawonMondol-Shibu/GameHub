'use client'
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const bannerVideo = [
  {url:"/images/pubg.mp4", game:"pubg"},
  {url:"/images/arena4.mp4", game:"shadow fight 4 arena"},
  {url:"/images/coc.mp4", game:"COC"},
]

export default function Header() {
  
  return (
    <header>
      <Carousel className="w-full items-center">
        <CarouselContent>
          {bannerVideo.map((banner) => (
            <CarouselItem key={banner.game} >
                  <video src={banner.url} loop autoPlay={true} className="w-full saturate-150"></video>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </header>
  );
}
