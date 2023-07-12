import React from "react";
import noctLogo from "../../assets/nocturnalLogo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const CSS = {
    logo: "w-8 h-8",
    NavBar: "w-screen flex flex-row gap-2 pl-1 mt-2",
    li: "group flex navItem hover:scale-110 transition-all flex-col justify-center items-center hover:shadow-lg",
    NavLink: "px-3 m-auto",
    linkFooter: "min-w-full h-[.3em] group-hover:bg-[#27285C]",
  };

  return (
    <div className={CSS.NavBar}>
      <img src={noctLogo} className={CSS.logo}></img>
      <ul className="flex flex-row text-[11px]">
        <li className={CSS.li}>
          <NavLink to="/" className={CSS.NavLink}>
            Home
          </NavLink>
          <div className={CSS.linkFooter}></div>
        </li>
        <li className={CSS.li}>
          <NavLink to="/menu" className={CSS.NavLink}>
            Menu
          </NavLink>
          <div className={CSS.linkFooter}></div>
        </li>
        <li className={CSS.li}>
          <NavLink to="/reservations" className={CSS.NavLink}>
            Make a Reservation
          </NavLink>
          <div className={CSS.linkFooter}></div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
