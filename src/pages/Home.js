import React from "react";

import MenuCarousel from "../components/Home/Carousel";
import Banner from "../components/Home/Banner";
import { getItemNameFromImage } from "./Menu";

const CarouselImages = require.context("../assets/Carousel");
const ImgArr = CarouselImages.keys().map((image) => CarouselImages(image));

const AllImageDesc = {
  "Dining Hall": {
    title: "Open Space Dining Experience",
    desc: "Open space dining area is designed to provide a spacious, airy, and inviting setting. Natural light floods the space, creating a warm and welcoming ambiance. The carefully curated interior design, with its tasteful decor and contemporary aesthetics, adds to the overall charm.",
  },
  Drinks: {
    title: "Experience the Ultimate Night Out",
    desc: "Immerse yourself in a world of excitement, laughter, and unforgettable moments. Get ready to embark on an extraordinary journey filled with tantalizing libations and a vibrant atmosphere that will leave you craving for more.",
  },
  "Live Band": {
    title: "Live Entertainment",
    desc: "Groove to the beats of talented DJs, enjoy captivating live performances, or engage in lively conversations with fellow revelers. Our curated lineup of entertainment ensures there's always something to keep you entertained and the energy levels soaring throughout the night.",
  },
};

ImgArr.map((img, index) => {
  AllImageDesc[getItemNameFromImage(img)]["img"] = img;
});

console.log(AllImageDesc);

const Home = (props) => {
  return (
    <div className="pb-[2em]">
      <Banner />
      <div className="justify-center font-bold text-3xl mb-[2.5em] flex flex-row gap-5 bg-white">
        <span>{"["}</span>
        <span>About</span>
        <span>{"]"}</span>
      </div>
      <MenuCarousel ImgArr={AllImageDesc} />
    </div>
  );
};

export default Home;
