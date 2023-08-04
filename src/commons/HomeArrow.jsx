import React from "react";
import { AiFillHome } from "react-icons/ai";
import { useSelector } from "react-redux";

const HomeArrow = () => {
  const color = useSelector((state) => state.color);
  return (
    <AiFillHome
      style={{
        cursor: "pointer",
        border: "1vw solid",
        borderRadius: "100%",
        padding: "0.5%",
        fontSize: "5vw",
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
