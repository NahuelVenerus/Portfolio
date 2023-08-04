import backgroundImage1 from "../assets/pink_background.png";
import backgroundImage2 from "../assets/red_background.png";
import backgroundImage3 from "../assets/blue_background.png";
import backgroundImage4 from "../assets/green_background.png";
import backgroundImage5 from "../assets/black_background.png";
import React, { useEffect, useState } from "react";
import { NavbarName } from "../commons/NavbarName";
import { IoIosArrowForward } from "react-icons/io";
import HomeArrow from "../commons/HomeArrow";
import "../styles/backgroundChanger.css";
import { useDispatch } from "react-redux";
import { setColor } from "../store/color";

const BackgroundChanger = () => {
  const dispatch = useDispatch();
  const [currentBackground, setCurrentBackground] = useState(backgroundImage1);
  const [navbarPosition, setNavbarPosition] = useState(0);

  const handleBackgroundChange = (newBackground) => {
    setCurrentBackground(newBackground);
  };

  useEffect(() => {
    dispatch(setColor("pink"));
  }, []);

  return (
    <div
      style={{
        backgroundPosition: "center",
        backgroundImage: `url(${currentBackground})`,
        backgroundSize: "cover",
        transition: "background-image 1s ease",
        height: "100vh",
        width: "100vw",
      }}
    >
      {currentBackground != backgroundImage1 ? (
        <div
          onClick={() => {
            dispatch(setColor("pink"));
            handleBackgroundChange(backgroundImage1);
            setNavbarPosition(0);
          }}
        >
          <HomeArrow />
        </div>
      ) : (
        ""
      )}
      <nav className="navbar" style={{ bottom: navbarPosition }}>
        <div onClick={() => setNavbarPosition("75%")}>
          <NavbarName
            icon={<IoIosArrowForward />}
            image={backgroundImage2}
            newBackground={handleBackgroundChange}
            newColor="#E97979"
            title="ACERCA DE"
            currentBackground={currentBackground}
          />
        </div>
        <div onClick={() => setNavbarPosition("75%")}>
          <NavbarName
            icon={<IoIosArrowForward />}
            image={backgroundImage3}
            newBackground={handleBackgroundChange}
            newColor="#B0A0FF"
            title="SKILLS"
            currentBackground={currentBackground}
          />
        </div>
        <div onClick={() => setNavbarPosition("75%")}>
          <NavbarName
            icon={<IoIosArrowForward />}
            image={backgroundImage4}
            newBackground={handleBackgroundChange}
            newColor="#86CC7B"
            title="PROYECTOS"
            currentBackground={currentBackground}
          />
        </div>
        <div onClick={() => setNavbarPosition("75%")}>
          <NavbarName
            icon={<IoIosArrowForward />}
            image={backgroundImage5}
            newBackground={handleBackgroundChange}
            newColor="white"
            title="CONTACTO"
            currentBackground={currentBackground}
          />
        </div>
      </nav>
    </div>
  );
};

export default BackgroundChanger;
