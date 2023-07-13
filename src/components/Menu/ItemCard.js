import React from "react";

const ItemCard = (props) => {
  return (
    <div className={props.className}>
      <img
        src={props.Image}
        alt="Menu Item"
        className="w-28 h-28 rounded-full"
      ></img>
      <div className="pl-2 textHolder flex flex-col gap-2">
        <div className="flex flex-col">
          <span className="text-lg ">Classic Iced Latte</span>
          <span className="border-solid border-b-black border-b-2 w-[50%] pt-2"></span>
        </div>
        <div className="text-md">$4.50</div>
        <div className="text-xs break-normal">
          Our Classic Iced Latte is a delightful harmony of rich espresso and
          chilled milk, meticulously crafted to perfection. Treat yourself to a
          moment of pure coffee indulgence with our exceptional iced latte.
        </div>
      </div>
    </div>
  );
};
export default ItemCard;
