import React, { useEffect, useState } from "react";

import ItemCard from "../components/Menu/ItemCard";

const AllPriceDesc = {
  "Classic Iced Latte": {
    price: 4.5,
    desc: "Our Classic Iced Latte is a delightful harmony of rich espresso and chilled milk, meticulously crafted to perfection. Treat yourself to a moment of pure coffee indulgence with our exceptional iced latte.",
  },
  "Iced Vanilla Latte": {
    price: 5.5,
    desc: "Vanilla syrup mixed perfectly with rich espresso and creamy milk, the Iced Vanilla Latte is a classic espresso beverage, just over ice. ",
  },
};

const Drinks = require.context("../assets/Drinks");
const DrinksList = Drinks.keys().map((image) => Drinks(image));
const AllImages = {
  Drinks: DrinksList,
};

/*
    {
        name: "",
        price: num
        desc: "",
        img: "",
    }
*/

const getItemNameFromImage = (imgFile) => {
  var removeExt = imgFile.split(".")[0];
  var pathSplit = removeExt.split("/");
  var itemName = pathSplit[pathSplit.length - 1];
  return itemName;
};

const genAllItems = () => {
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

  const genMenu = () => {
    const itemArr = [];
    const images = AllImages[Category];

    for (let i = 0; i < images.length; i++) {
      const Image = images[i];
      //console.log(Image, typeof Image);
      console.log(AllItems);
      const props = AllItems[Image];

      switch (i) {
        case 0:
          props["className"] = "toprow menuItem";
          break;
        case 1:
          props["className"] = "toprow menuItem";
          break;
        case 2:
          props["className"] = "toprow menuItem";
          break;
        case 3:
          props["className"] = "toprow menuItem";
          break;
        default:
          props["className"] = "menuItem";
          break;
      }
      itemArr.push(<ItemCard props={props} key={crypto.randomUUID()} />);
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
