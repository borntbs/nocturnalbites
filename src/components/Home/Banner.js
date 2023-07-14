import React from "react";
import bannerImg from "../../assets/Misc/nocturnalBanner.png";

const Banner = () => {
  return (
    <div className="w-full bg-white flex justify-center align-middle py-[5em] my-[5em] border-y-2 border-y-blue-gray-700">
      <img src={bannerImg} className="w-160 h-80" alt="banner"></img>
    </div>
  );
};

export default Banner;
