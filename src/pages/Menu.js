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
    type: "Mains",
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
    desc: "Sink your teeth into our Grilled Pork Burger, where smoky, tender pork meets a toasted bun. Experience the succulence of perfectly grilled meat, paired with your favorite toppings.",
    type: "Mains",
    subType: "Burgers",
  },
  "Pesto Rice Bowl": {
    price: 14.5,
    desc: "Fragrant basil pesto coats a bed of fluffy rice, accompanied by a medley of fresh vegetables.",
    type: "Mains",
    subType: "Rice",
  },
  "Lemon Thyme Chicken": {
    price: 12,
    desc: "Each succulent bite offers a zesty twist, as the vibrant flavors of lemon and thyme infuse the tender, juicy chicken. Indulge in this delightful dish that is sure to brighten your palate.",
    type: "Mains",
    subType: "Chicken",
  },
  "Crunchy Potato Salad": {
    price: 4,
    desc: "Crisp potatoes mingle with a tantalizing mix of vegetables, all coated in a creamy dressing. ",
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
    desc: "Infused with a rich garlic butter, each slice provides a melt-in-your-mouth sensation.",
    type: "Sides",
    subType: "",
  },
  "Parmesan Asparagus": {
    price: 4,
    desc: "Fresh asparagus roasted to perfection and topped with a sprinkle of Parmesan cheese.",
    type: "Sides",
    subType: "",
  },
  "Berry Smoothie": {
    price: 5,
    desc: "Bursting with the natural sweetness of fresh berries, this invigorating blend offers a cool and creamy treat that is as delightful to look at as it is to sip.",
    type: "Drinks",
    subType: "Smoothies",
  },
  "Iced Matcha Latte": {
    price: 7,
    desc: "Velvety matcha powder combined with chilled milk. Indulge in this refreshing and energizing beverage that will whisk you away to a state of tranquility.",
    type: "Drinks",
    subType: "Tea",
  },
  "Vanilla Chai Latte": {
    price: 7,
    desc: "Fragrant spices meld with a touch of sweet vanilla, perfectly infused in steamed milk.",
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
    desc: "With a molten, gooey center and a delicate, moist exterior, this dessert is a chocolate lover's dream.",
    type: "Dessert",
    subType: "Cake",
  },
  "Vanilla Ice Cream": {
    price: 3.5,
    desc: "Indulge in the pure simplicity of vanilla, allowing each spoonful to transport you to a place of pure bliss.",
    type: "Dessert",
    subType: "Ice Cream",
  },
  "Chocolate Ice Cream": {
    price: 3.5,
    desc: "Made with premium, velvety chocolate, Chocolate Ice Cream provides a rich and intense flavor to every scoop.",
    type: "Dessert",
    subType: "Ice Cream",
  },
  "Chocolate Chip Ice Cream": {
    price: 3.5,
    desc: "With each spoonful, discover a delightful interplay of velvety ice cream and luscious chocolate chips",
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

    Categories.forEach((cat, index) => {
      const itemArr = [];
      const images = AllImages[cat];
      if (images) {
        for (let i = 0; i < images.length; i++) {
          const Image = images[i];
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
          itemArr.push(
            <div className="flex flex-col">
              <ItemCard props={props} key={crypto.randomUUID()} />
            </div>
          );
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
