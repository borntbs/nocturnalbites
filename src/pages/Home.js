import React from "react";

import MenuCarousel from "../components/Home/Carousel";
import Banner from "../components/Home/Banner";
import { getItemNameFromImage } from "./Menu";
import { NavLink } from "react-router-dom";
import AboutImg from "../assets/Misc/About.webp";
import RestaurantImg from "../assets/Misc/Outside Restaurant.png";

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

const Home = (props) => {
  const goToMenu = (e) => {
    const navBar = document.querySelector(".#navBar");
    navBar.forEach((link) => {
      link.querySelector(".navFooter").className = CSS.linkFooter;
    });
  };

  return (
    <div className="pb-[2em] h-full flex flex-col mt-[2em] p-3 items-center gap-[3em]">
      <MenuCarousel ImgArr={AllImageDesc} className="hidden" />
      <div>
        <div className="text-center font-bold text-2xl flex flex-row justify-center">
          <span>{"["}</span>
          <span className="px-10 text-2xl">About</span>
          <span>{"]"}</span>
        </div>
        <div className="flex flex-col justify-items-center xl:flex-row justify-around gap-10 md:gap-0 p-[2em]">
          <div className="text-black font-bold w-full 2xl:max-w-[50%] text-center 2xl:pr-5">
            At Nocturnal Bites, we invite you to indulge in a dining experience
            like no other. Our night-themed restaurant is a haven for those who
            appreciate the enchanting allure of the nocturnal world.
            <br />
            <br />
            Step into a realm where delectable flavors, captivating ambiance,
            and the mystique of the night seamlessly intertwine. Immerse
            yourself in an atmosphere that embraces the magic of moonlit nights
            and starry skies. Our carefully curated interior, with its dimly lit
            ambiance and carefully placed lighting, sets the stage for an
            extraordinary dining journey. <br />
            <br />
            Surrender to the captivating charm that unfolds as the night unfolds
            around you. Prepare your taste buds for an adventure that transcends
            the ordinary. <br />
            <br />
            Our culinary team crafts a menu that is a celebration of flavors,
            expertly combining locally sourced ingredients with innovative
            techniques. From succulent bites to tantalizing main courses and
            exquisite desserts, every dish is a work of art designed to awaken
            your senses and ignite your palate.
          </div>
          <div className="hidden 2xl:inline bg-black h-30 w-[4px]"></div>
          <img
            src={AboutImg}
            className="w-full max-h-[20em] xl:max-w-[50%] object-cover xl:justify-self-center self-center lg:object-none"
          ></img>
        </div>
      </div>
      <div className="flex flex-col justify-start w-full">
        <div className="text-center font-bold text-2xl flex flex-row justify-center">
          <span>{"["}</span>
          <span className="px-10 text-2xl">Location</span>
          <span>{"]"}</span>
        </div>
        <div className="flex flex-col xl:flex-row mt-[2em] xl:gap-20">
          <img
            src={RestaurantImg}
            className="w-full max-h-[20em] xl:max-w-[50%] object-cover rounded-2xl"
          ></img>
          <iframe
            className="w-full xl:w-[50%] h-80 "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49550606.47093838!2d-152.05645539999998!3d40.710773200000034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19b684cf65%3A0xd2962999c22f1521!2sNobu%20Downtown!5e0!3m2!1sen!2ssg!4v1689353102389!5m2!1sen!2ssg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
