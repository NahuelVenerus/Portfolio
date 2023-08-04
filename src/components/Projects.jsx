import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SwiperSlide from "../commons/SwiperSlide";

const ClubDelPlan = require("../assets/ClubDelPlan.png");
const GeekCentralStore = require("../assets/GeekCentralStore.png");

export const Projects = () => {
  const images = [
    {
      image: ClubDelPlan,
      name: "El Club del Plan",
      link: "https://elclubdelplan.netlify.app/",
    },
    {
      image: GeekCentralStore,
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
    <div className="title-container">
      <div className="inner-title">PROJECTS</div>
      <div className="inner-subtitle"></div>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Slider {...settings}>
          {images.map((image) => (
            <SwiperSlide image={image} key={image} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
