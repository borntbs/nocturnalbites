import React, { useEffect, useRef } from "react";
import noctLogo from "../../assets/nocturnalLogo.png";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname.replace("/", "");

  const navBarRef = useRef(null);

  const CSS = {
    logo: "ml-3 w-20 h-20",
    NavBar: "w-screen flex flex-row gap-2 pl-1 mt-2 justify-between",
    li: "group flex navItem transition-all flex-col justify-center items-center hover:shadow-lg hover:cursor-pointer",
    NavLink: "flex items-center h-full px-3 align-middle",
    linkFooter: "navFooter min-w-full h-[.3em] group-hover:bg-[#27285C]",
  };

  useEffect(() => {
    if (currentPath && currentPath !== "dev") {
      const currentLink = navBarRef.current;
      const footer = currentLink.querySelector(`[for='${currentPath}']`);
      footer.className += " bg-[#27285C]";
    }
  });

  const setActive = (e) => {
    const element = e.currentTarget;
    element.querySelector(".navFooter").className += " bg-[#27285C]";
    const parentElement = element.parentNode;
    const siblings = Array.from(parentElement.children).filter(
      (child) => child !== element
    );
    siblings.forEach((link) => {
      link.querySelector(".navFooter").className = CSS.linkFooter;
    });
  };

  return (
    <div className={CSS.NavBar} ref={navBarRef}>
      <img src={noctLogo} className={CSS.logo} alt="logo"></img>
      <ul className="flex flex-row text-sm mr-3 font-bold">
        <li className={CSS.li} onClick={setActive}>
          <NavLink to="/" className={CSS.NavLink}>
            Home
          </NavLink>
          <div htmlFor="home" className={CSS.linkFooter}></div>
        </li>
        <li className={CSS.li} onClick={setActive}>
          <NavLink to="/menu" className={CSS.NavLink}>
            Menu
          </NavLink>
          <div htmlFor="menu" className={CSS.linkFooter}></div>
        </li>
        <li className={CSS.li} onClick={setActive}>
          <NavLink to="/reservations" className={CSS.NavLink}>
            Make a Reservation
          </NavLink>
          <div htmlFor="reservations" className={CSS.linkFooter}></div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
