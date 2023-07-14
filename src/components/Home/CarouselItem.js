import React from "react";
import { Typography /*Button*/ } from "@material-tailwind/react";

/*
props:
.desc : "string"
.header : "string"
.Image: image object
*/

const CarouselItem = (props) => {
  return (
    <div className="relative h-[50vh] w-full group bg-black">
      <img
        src={props.img}
        alt="altimg1"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 group-hover:opacity-0  h-full w-full bg-black/75 opacity-100 transition-opacity flex items-end">
        <div className="ml-[3em] w-3/4 md:w-2/4 flex flex-col text-left">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-xl md:text-2xl lg:text-3xl"
          >
            {props.title}
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 opacity-80 text-lg"
          >
            {props.desc}
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default CarouselItem;
