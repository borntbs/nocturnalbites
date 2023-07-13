import React from "react";

import MenuCarousel from "../components/Menu/Carousel";
import ItemCard from "../components/Menu/ItemCard";
import { genAllItems, AllImages } from "./Menu";
const AllItems = genAllItems();
const Categories = ["Mains", "Sides", "Drinks", "Dessert"];
console.log(AllImages);
const Dev = (props) => {
  const genMenu = () => {
    const menu = [];

    Categories.forEach((cat) => {
      const itemArr = [];
      const images = AllImages[cat];
      console.log(cat, ":", images);
      if (images) {
        for (let i = 0; i < images.length; i++) {
          const Image = images[i];
          //console.log(Image, typeof Image);

          const props = AllItems[Image];

          switch (i) {
            case 0:
              props["className"] = "toprow menuItem";
              break;
            case 1:
              props["className"] = "sm:toprow menuItem";
              break;
            case 2:
              props["className"] = "md:toprow menuItem";
              break;
            case 3:
              props["className"] = "lg:toprow menuItem";
              break;
            default:
              props["className"] = "menuItem";
              break;
          }
          itemArr.push(<ItemCard props={props} key={crypto.randomUUID()} />);
        }
        menu.push(
          <div className="" key={crypto.randomUUID()}>
            <div className="py-[3em] text-center font-bold text-2xl flex flex-row justify-center gap-10">
              <span>{"{"}</span>
              <span>{cat}</span>
              <span>{"}"}</span>
            </div>
            <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {itemArr}
            </div>
          </div>
        );
      }
    });

    return menu;
  };
  return (
    <div>
      <MenuCarousel />
      {genMenu()}
    </div>
  );
};

export default Dev;
