import React from "react";

import NavBar from "../components/Shared/Navbar";
import ItemCard from "../components/Menu/ItemCard";

const Dev = (props) => {
  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-2">
        <ItemCard topRow={true} />
        <ItemCard topRow={true} />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
};

export default Dev;
