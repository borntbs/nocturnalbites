import React, { useEffect, useState } from "react";

import ItemCard from "../components/Menu/ItemCard";

const Drinks = require.context("../assets/Drinks");
const DrinksList = Drinks.keys().map((image) => Drinks(image));
const AllItems = {
  Drinks: DrinksList,
};

const Menu = (props) => {
  const [Category, setCategory] = useState(Object.keys(AllItems)[0]);

  useEffect(() => {
    if (props.category) {
      setCategory(props.category);
    } else {
      setCategory(Object.keys(AllItems)[0]);
    }
  }, [props.category]);

  const genMenu = () => {
    const itemArr = [];
    const images = AllItems[Category];
    for (let i = 0; i < images.length; i++) {
      const Image = images[i];
      switch (i) {
        case 0:
          itemArr.push(
            <ItemCard
              className="toprow menuItem"
              Image={Image}
              key={crypto.randomUUID()}
            />
          );
          break;
        case 1:
          itemArr.push(
            <ItemCard
              className="sm:toprow menuItem"
              Image={Image}
              key={crypto.randomUUID()}
            />
          );
          break;
        case 2:
          itemArr.push(
            <ItemCard
              className="xl:toprow menuItem"
              Image={Image}
              key={crypto.randomUUID()}
            />
          );
          break;
        case 3:
          itemArr.push(
            <ItemCard
              className="2xl:toprow menuItem"
              Image={Image}
              key={crypto.randomUUID()}
            />
          );
          break;
        default:
          itemArr.push(
            <ItemCard
              className="menuItem"
              Image={Image}
              key={crypto.randomUUID()}
            />
          );
          break;
      }
    }
    return itemArr;
  };

  return (
    <div>
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {genMenu()}
      </div>
    </div>
  );
};

export default Menu;
