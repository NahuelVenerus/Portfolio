import Slider from "react-slick";
import "../styles/aboutStyles.css";
import "../styles/swiperStyles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SwiperSlide from "../commons/SwiperSlide";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { exportDictionary } from "../dictionary";

const ClubDelPlan = require("../assets/ClubDelPlan.png");
const GeekCentralStore = require("../assets/GeekCentralStore.png");
const ClubDelPlanMobile = require("../assets/ClubDelPlanMobile.png");
const GeekCentralStoreMobile = require("../assets/GeekCentralStoreMobile.png");

export const Projects = ({lang, isHidden}) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 500);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = [
    {
      image: isMobile ? ClubDelPlanMobile : ClubDelPlan,
      name: "El Club del Plan",
      link: "https://github.com/alba-97/ceibo-back",
    },
    {
      image: isMobile ? GeekCentralStoreMobile : GeekCentralStore,
      name: "Geek Central Store",
      link: "https://github.com/NahuelVenerus/GeekCentralStore",
    },
  ];

  const settings = {
    className: "swiper",
    infinite: false,
    slidesToShow: 1.1,
    speed: 500,
    useCSS: true,
    prevArrow: <IoIosArrowBack color="#86CC7B" />,
    nextArrow: <IoIosArrowForward color="#86CC7B" />,
  };
  
  

  return (
    <div className="swiper">
      <h1 className="inner-title">{exportDictionary(lang, "projects")}</h1>
      <div className="swiper-container">
        <Slider {...settings}>
          {images.map((image) => (
            <SwiperSlide image={image} key={image} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
