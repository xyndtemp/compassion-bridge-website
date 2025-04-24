
import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

const slides = [
  {
    id: 1,
    title: "Community Support",
    image: "/lovable-uploads/1fa23470-a077-4813-b4a2-058336afb4d0.png",
  },
  {
    id: 2,
    title: "Building Hope",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Creating Change",
    image: "/placeholder.svg",
  },
];

const ImageSlideshow = () => {
  return (
    <Carousel className="w-full max-w-lg animate-fade-in">
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div className="p-1">
              <div className="flex aspect-square items-center justify-center rounded-md">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ImageSlideshow;
