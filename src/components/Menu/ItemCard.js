import React from "react";

const ItemCard = ({ props }) => {
  return (
    <div className={props.className + " flex-grow group transition-all group"}>
      <img
        src={props.img}
        alt="Menu Item"
        className="w-28 h-28 rounded-[100%] group-hover:rounded-lg transition-all"
      ></img>
      <div className="pl-2 textHolder flex flex-col gap-2 h-full">
        <div className="flex flex-col">
          <div className="flex flex-row align-middle ">
            <span className="text-lg w-fit">{props.name}</span>
            <span className="text-lg self-center text-center font-bold pl-[1em] invisible group-hover:visible">
              {"<"}
            </span>
          </div>

          <span className="border-solid border-b-black border-b-2 w-[50%] pt-2"></span>
        </div>
        <div className="text-md">{`$${props.price.toFixed(1)}`}</div>
        <div className="text-xs break-normal">{props.desc}</div>
      </div>
    </div>
  );
};
export default ItemCard;
