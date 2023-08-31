import React from "react";
import "../styles/swiperStyles.css";

const SwiperSlide = ({ image }) => {
  return (
    <>
      <div className="inner-subtitle">{image.name}</div>
      <div
        // style={{
        //   border: "0.2vw solid",
        //   padding: "1vw",
        //   borderRadius: "1vw",
        //   overflow: "hidden",
        //   margin: "10px",
        //   maxWidth: "700px",
        //   maxHeight: "400px",
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        // }}
        className="swiperBorder"
      >
        <a href={image.link} target="_blank" rel="noopener noreferrer">
          <img
            style={{ zIndex: "-1" }}
            src={image.image}
            alt="Project Slide"
            // style={{
            //   maxWidth: "100%",
            //   height: "auto",
            // }}
            className="swiperImage"
          />
        </a>
      </div>
    </>
  );
};

export default SwiperSlide;
