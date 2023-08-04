import React from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import { useSelector } from "react-redux";

const HomeArrow = () => {
  const color = useSelector((state) => state.color);
  return (
    <BsArrowUpCircle
      style={{
        fontSize: "80px",
        position: "fixed",
        bottom: "5%",
        right: "2%",
        zIndex: 9999,
        color: color,
        transition: "0.5s ease",
      }}
    />
  );
};

export default HomeArrow;
