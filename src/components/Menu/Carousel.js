import React from "react";
import { Carousel } from "@material-tailwind/react";

import CarouselItem from "./CarouselItem";

const MenuCarousel = (props) => {
  return (
    <Carousel className="w-screen max-h-[50vh]">
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </Carousel>
  );
};
export default MenuCarousel;
