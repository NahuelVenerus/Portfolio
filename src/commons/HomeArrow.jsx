import React from "react";
import { AiFillHome } from "react-icons/ai";
import { useSelector } from "react-redux";
import "../styles/homeArrowStyles.css";

const HomeArrow = () => {
  const color = useSelector((state) => state.color);
  return (
    <AiFillHome
      style={{ color: color, transition: "1s ease" }}
      className="homeButton"
    />
  );
};

export default HomeArrow;
