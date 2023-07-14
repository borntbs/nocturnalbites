import React from "react";
import { Carousel } from "@material-tailwind/react";

import CarouselItem from "./CarouselItem";

const MenuCarousel = (props) => {
  const genCarouselItems = () => {
    const item = [];
    Object.keys(props.ImgArr).forEach((key) => {
      item.push(
        <CarouselItem
          img={props.ImgArr[key].img}
          title={props.ImgArr[key].title}
          desc={props.ImgArr[key].desc}
          key={crypto.randomUUID()}
        />
      );
    });
    return item;
  };

  return (
    <Carousel className="w-full max-h-[60vh] mt-[2em]">
      {genCarouselItems()}
    </Carousel>
  );
};
export default MenuCarousel;
