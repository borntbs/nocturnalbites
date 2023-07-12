import React from "react";
import bannerImg from "../../assets/nocturnalBanner.png";

const Banner = () => {
  return (
    <div className="w-screen bg-white flex justify-center align-middle">
      <img src={bannerImg} className="w-80 h-50"></img>
    </div>
  );
};

export default Banner;
