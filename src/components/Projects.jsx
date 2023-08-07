import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SwiperSlide from "../commons/SwiperSlide";
import "../styles/swiperStyles.css";
import "../styles/aboutStyles.css";

const ClubDelPlan = require("../assets/ClubDelPlan.png");
const GeekCentralStore = require("../assets/GeekCentralStore.png");
const ClubDelPlanMobile = require("../assets/ClubDelPlanMobile.png");
const GeekCentralStoreMobile = require("../assets/GeekCentralStoreMobile.png");

export const Projects = () => {
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
      link: "https://elclubdelplan.netlify.app/",
    },
    {
      image: isMobile ? GeekCentralStoreMobile : GeekCentralStore,
      name: "Geek Central Store",
      link: "https://github.com/NahuelVenerus/GeekCentralStore",
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <div>
      <div className="inner-title">PROJECTS</div>
      <div className="inner-subtitle"></div>
      <div className="swiper">
        <Slider {...settings}>
          {images.map((image) => (
            <SwiperSlide image={image} key={image} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
