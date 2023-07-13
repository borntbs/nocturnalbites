import React from "react";
// outline-dashed outline-red-500 outline-2

const MenuNav = (props) => {
  const CSS = {
    menuDiv: "font-bold lg:text-2xl hover:cursor-pointer text-center px-5 py-3",
    rDiv: "sm:border-r-[1px] sm:px-5  sm:h-auto sm:bg-transparent sm:visible border-solid border-black bg-black invisible h-0",
    lDiv: "sm:border-l-[1px] sm:border-y-0 sm:px-5 sm:bg-transparent sm:h-auto sm:w-auto border-solid border-black border-y-[1px] w-[5em] self-center",
  };
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center menuNav mt-3 mb-5">
      <div className="font-bold lg:text-2xl hover:cursor-pointer text-center px-5 py-3">
        Mains
      </div>
      <div className={CSS.rDiv}></div>
      <div className={CSS.lDiv}></div>
      <div className={CSS.menuDiv}>Sides</div>
      <div className={CSS.rDiv}></div>
      <div className={CSS.lDiv}></div>
      <div className={CSS.menuDiv}>Drinks</div>
      <div className={CSS.rDiv}></div>
      <div className={CSS.lDiv}></div>
      <div className={CSS.menuDiv}>Dessert</div>
    </div>
  );
};
export default MenuNav;
