import React from "react";

import testImg from "../../assets/Drinks/Classic_Iced_Latte.jpg";

const ItemCard = (props) => {
  const CSS = {
    card: "max-w-[20em] m-0 flex flex-row p-1 items-center border-solid border-black ",
    itemImg: "",
    desc: "",
  };

  if (props.topRow) {
    CSS.card = CSS.card + "border-y-[2px]";
  } else {
    CSS.card = CSS.card + "border-b-[2px]";
  }

  return (
    <div className={CSS.card}>
      <img src={testImg} alt="Menu Item" className="w-20 h-20"></img>
      <div className="pl-2 textHolder flex flex-col gap-2">
        <div className="flex flex-col">
          <span>Classic Iced Latte</span>
          <span className="border-solid border-b-black border-b-2 w-[50%] pt-2"></span>
        </div>
        <div className="text-xs">$4.50</div>
        <div className="text-[8px] break-normal">
          Our Classic Iced Latte is a delightful harmony of rich espresso and
          chilled milk, meticulously crafted to perfection. Treat yourself to a
          moment of pure coffee indulgence with our exceptional iced latte.
        </div>
      </div>
    </div>
  );
};
export default ItemCard;
