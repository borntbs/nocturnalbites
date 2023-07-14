import React from "react";

const ItemCard = ({ props }) => {
  return (
    <div className={props.className + " flex-grow"}>
      <img
        src={props.img}
        alt="Menu Item"
        className="w-28 h-28 rounded-full"
      ></img>
      <div className="pl-2 textHolder flex flex-col gap-2 h-full">
        <div className="flex flex-col">
          <span className="text-lg ">{props.name}</span>
          <span className="border-solid border-b-black border-b-2 w-[50%] pt-2"></span>
        </div>
        <div className="text-md">{`$${props.price.toFixed(1)}`}</div>
        <div className="text-xs break-normal">{props.desc}</div>
      </div>
    </div>
  );
};
export default ItemCard;
