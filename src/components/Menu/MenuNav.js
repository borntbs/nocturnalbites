import React, { useState, useEffect } from "react";
// outline-dashed outline-red-500 outline-2

const MenuNav = ({ props }) => {
  const [Categories, setCategories] = useState([]);

  // const CSS = {
  //   menuDiv:
  //     "font-bold lg:text-2xl hover:cursor-pointer text-center px-5 py-3 border-x-[1px] border-black",
  //   rDiv: "sm:border-r-[2px] sm:px-5 sm:h-auto sm:bg-transparent sm:visible border-solid border-black bg-black invisible h-0",
  //   lDiv: "sm:border-l-[1px] sm:border-y-0 sm:px-5 sm:bg-transparent sm:h-auto sm:w-auto border-solid border-black border-y-[1px] w-[5em] self-center",
  // };

  useEffect(() => {
    setCategories(props.Categories);
  }, [props]);

  const genNav = () => {
    const nav = [];
    Categories.forEach((cat, index) => {
      switch (index) {
        case 0:
          nav.push(
            <div className="group text-center" key={crypto.randomUUID()}>
              <div
                className="font-bold lg:text-2xl hover:cursor-pointer px-5 py-3 border-solid border-black group border-r-[1px]"
                onClick={props.scrollTo}
              >
                <span className="group-hover:opacity-50">{cat}</span>
              </div>
              <div className="lg:text-2xl border-0 font-bold h-5 invisible group-hover:visible">
                ^
              </div>
            </div>
          );
          break;
        case Categories.length - 1:
          nav.push(
            <div className="group text-center" key={crypto.randomUUID()}>
              <div
                className="font-bold lg:text-2xl hover:cursor-pointer px-5 py-3 border-solid border-black group border-l-[1px]"
                onClick={props.scrollTo}
              >
                <span className="group-hover:opacity-50">{cat}</span>
              </div>
              <div className="lg:text-2xl border-0 font-bold h-5 invisible group-hover:visible">
                ^
              </div>
            </div>
          );
          break;
        default:
          nav.push(
            <div className="group text-center" key={crypto.randomUUID()}>
              <div
                className="font-bold lg:text-2xl hover:cursor-pointer px-5 py-3 border-solid border-black group border-x-[1px]"
                onClick={props.scrollTo}
              >
                <span className="group-hover:opacity-50">{cat}</span>
              </div>
              <div className="lg:text-2xl border-0 font-bold h-5 invisible group-hover:visible">
                ^
              </div>
            </div>
          );
          break;
      }
    });
    return nav;
  };

  return (
    <div className="flex flex-row justify-center menuNav mt-[2em] ">
      {genNav()}
    </div>
  );
};
export default MenuNav;
