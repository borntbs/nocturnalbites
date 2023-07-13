import React, { useEffect, useState, useRef } from "react";

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
  "Grilled Cheese Sandwich": {
    price: 5,
    desc: " Immerse yourself in pure comfort as golden, buttery bread embraces a molten blend of premium cheeses. Indulge in this timeless classic and rediscover the simple joy of a perfectly grilled cheese sandwich.",
    type: "Mains",
    subType: "Sandwiches",
  },
  "Grilled Pork Burger": {
    price: 9.5,
    desc: "",
    type: "Mains",
    subType: "Burgers",
  },
  "Lemon Thyme Chicken": {
    price: 12,
    desc: "",
    type: "Mains",
    subType: "Chicken",
  },
  "Pesto Rice Bowl": {
    price: 14.5,
    desc: "",
    type: "Mains",
    subType: "Rice",
  },
  "Crunchy Potato Salad": {
    price: 4,
    desc: "",
    type: "Sides",
    subType: "Salad",
  },
  "French Fries": {
    price: 4,
    desc: "Homemade french fries cut thin and deep fried until golden brown, then sprinkled with seasonings.",
    type: "Sides",
    subType: "Fries",
  },
  "Garlic Butter Eggplant": {
    price: 4,
    desc: "",
    type: "Sides",
    subType: "",
  },
  "Parmesan Asparagus": {
    price: 4,
    desc: "",
    type: "Sides",
    subType: "",
  },
  "Berry Smoothie": {
    price: 5,
    desc: "",
    type: "Drinks",
    subType: "Smoothies",
  },
  "Iced Matcha Latte": {
    price: 7,
    desc: "",
    type: "Drinks",
    subType: "Tea",
  },
  "Vanilla Chai Latte": {
    price: 7,
    desc: "",
    type: "Drinks",
    subType: "Tea",
  },
  "Apple Pie": {
    price: 6.8,
    desc: "Filled above the rim with fresh granny smith apples, sweetened with sugar and spices to enhance the flavor of the apples to perfection, sealed with our buttery flaky crust.",
    type: "Dessert",
    subType: "Pie",
  },
  "Lava Cake": {
    price: 4.5,
    desc: "",
    type: "Dessert",
    subType: "Cake",
  },
  "Vanilla Ice Cream": {
    price: 3.5,
    desc: "",
    type: "Dessert",
    subType: "Ice Cream",
  },
  "Chocolate Ice Cream": {
    price: 3.5,
    desc: "",
    type: "Dessert",
    subType: "Ice Cream",
  },
  "Chocolate Chip Ice Cream": {
    price: 3.5,
    desc: "",
    type: "Dessert",
    subType: "Ice Cream",
  },
  "Ravioli Pomodoro": {
    price: 16,
    desc: "Handmade thin pasta stuffed with fresh spinach and creamy ricotta cheese. Tossed in a pan with a fresh sauce made from tomato halves and basil.",
    type: "Mains",
    subType: "Pasta",
  },
};

const Mains = require.context("../assets/Mains");
const Drinks = require.context("../assets/Drinks");
const Sides = require.context("../assets/Sides");
const Dessert = require.context("../assets/Dessert");
export const AllImages = {
  Mains: Mains.keys().map((image) => Mains(image)),
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
const Categories = ["Mains", "Sides", "Drinks", "Dessert"];
const Menu = (props) => {
  const [Category, setCategory] = useState(Object.keys(AllImages)[0]);
  const menuRefs = useRef([]);

  const AllItems = genAllItems();

  useEffect(() => {
    if (props.category) {
      setCategory(props.category);
    } else {
      setCategory(Object.keys(AllImages)[0]);
    }
  }, [props.category]);

  const genMenu = () => {
    const menu = [];

    // menuRefs.current = Categories.map((ref, index) => {
    //   menuRefs.current[index] = React.createRef();
    // });

    Categories.forEach((cat, index) => {
      const itemArr = [];
      const images = AllImages[cat];
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
            <div
              className="py-[3em] text-center font-bold text-2xl flex flex-row justify-center"
              ref={(ref) => {
                menuRefs.current[index] = ref;
              }}
            >
              <span>{"["}</span>
              <span className="px-10 text-2xl">{cat}</span>
              <span>{"]"}</span>
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

  const scrollTo = (e) => {
    const scrollToCat = e.currentTarget.innerHTML;
    const refIndex = Categories.indexOf(scrollToCat);
    menuRefs.current[refIndex].scrollIntoView();
  };

  return (
    <div className="">
      <MenuNav scrollTo={scrollTo} />
      <div>
        {/* className="grid grid-cols-1 justify-items-center sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4" */}
        {genMenu()}
      </div>
    </div>
  );
};

export default Menu;
