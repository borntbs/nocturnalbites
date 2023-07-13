import React, { useEffect, useState } from "react";

import ItemCard from "../components/Menu/ItemCard";
import MenuNav from "../components/Menu/MenuNav";

const AllPriceDesc = {
  "Classic Iced Latte": {
    price: 4.5,
    desc: "Our Classic Iced Latte is a delightful harmony of rich espresso and chilled milk, meticulously crafted to perfection. Treat yourself to a moment of pure coffee indulgence with our exceptional iced latte.",
    type: "Drinks",
    subType: "Coffee",
  },
  "Iced Vanilla Latte": {
    price: 5.5,
    desc: "Vanilla syrup mixed perfectly with rich espresso and creamy milk, the Iced Vanilla Latte is a classic espresso beverage, just over ice. ",
    type: "Drinks",
    subType: "Coffee",
  },
  "Strawberry Ice Cream": {
    price: 3.5,
    desc: "Embark on a blissful journey with our luscious Strawberry Ice Cream. Each scoop is a burst of fruity delight, perfectly capturing the essence of sun-kissed strawberries.",
    type: "Dessert",
    subType: "Ice Cream",
  },
  "Grilled Chicken Salad": {
    price: 9.5,
    desc: "Tender grilled chicken, fresh greens, and an array of vibrant vegetables come together to provide a flavorful balance of protein and freshness, making it the perfect choice for a satisfying and nutritious meal.",
    type: "Sides",
    subType: "Salads",
  },
};

const Drinks = require.context("../assets/Drinks");
const Sides = require.context("../assets/Sides");
const Dessert = require.context("../assets/Dessert");
export const AllImages = {
  Drinks: Drinks.keys().map((image) => Drinks(image)),
  Sides: Sides.keys().map((image) => Sides(image)),
  Dessert: Dessert.keys().map((image) => Dessert(image)),
};

/*
    {
        name: "",
        price: num
        desc: "",
        img: "",
    }
*/

export const getItemNameFromImage = (imgFile) => {
  var removeExt = imgFile.split(".")[0];
  var pathSplit = removeExt.split("/");
  var itemName = pathSplit[pathSplit.length - 1];
  return itemName;
};

export const genAllItems = () => {
  const AllItems = {};
  Object.keys(AllImages).forEach((menuType) => {
    const menuTypeArr = AllImages[menuType];
    menuTypeArr.forEach((item) => {
      var itemName = getItemNameFromImage(item);
      AllItems[item] = { name: itemName, img: item };
      var itemDetails = AllPriceDesc[itemName];
      Object.keys(itemDetails).forEach((key) => {
        AllItems[item][key] = itemDetails[key];
      });
    });
  });
  return AllItems;
};

const Menu = (props) => {
  const [Category, setCategory] = useState(Object.keys(AllImages)[0]);

  const AllItems = genAllItems();
  useEffect(() => {
    if (props.category) {
      setCategory(props.category);
    } else {
      setCategory(Object.keys(AllImages)[0]);
    }
  }, [props.category]);
  console.log(AllItems);
  const genMenu = () => {
    const itemArr = [];
    const images = AllImages[Category];
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
    console.log("itemArr", itemArr);
    return itemArr;
  };

  return (
    <div>
      <MenuNav />
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {genMenu()}
      </div>
    </div>
  );
};

export default Menu;
