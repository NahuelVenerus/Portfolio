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
import "../styles/containerStyles.css";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../store/color";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

const BackgroundChanger = () => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.color);
  const [currentBackground, setCurrentBackground] = useState(backgroundImage1);
  const [navbarPosition, setNavbarPosition] = useState(0);
  const [top, setTop] = useState("10%");
  const [borderTop, setBorderTop] = useState("140%");
  const [isHidden, setIsHidden] = useState(true);
  const [currentContent, setCurrentContent] = useState("");

  const handleBackgroundChange = (newBackground) => {
    setCurrentBackground(newBackground);
  };

  const handleNavbarClick = (content) => {
    setNavbarPosition("75%");
    setBorderTop("60%");
    setTop("-50%");
    setIsHidden(true);
    setTimeout(() => setCurrentContent(content), 500);
    setTimeout(() => setIsHidden(false), 1000);
  };

  useEffect(() => {
    dispatch(setColor("pink"));
  }, [dispatch]);

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
      <div className="top-section" style={{ top: top }}>
        <div className="title">NAHUEL VENERUS</div>
        <div className="subtitle">FULL STACK DEVELOPER</div>
      </div>
      {currentBackground !== backgroundImage1 ? (
        <div
          onClick={() => {
            dispatch(setColor("pink"));
            handleBackgroundChange(backgroundImage1);
            setNavbarPosition(0);
            setTop("10%");
            setBorderTop("140%");
          }}
        >
          <HomeArrow />
        </div>
      ) : (
        ""
      )}
      <nav className="navbar" style={{ bottom: navbarPosition }}>
        <div onClick={() => handleNavbarClick("About")}>
          <NavbarName
            icon={<IoIosArrowForward />}
            image={backgroundImage2}
            newBackground={handleBackgroundChange}
            newColor="#E97979"
            title="ABOUT"
            currentBackground={currentBackground}
          />
        </div>
        <div onClick={() => handleNavbarClick("Skills")}>
          <NavbarName
            icon={<IoIosArrowForward />}
            image={backgroundImage3}
            newBackground={handleBackgroundChange}
            newColor="#B0A0FF"
            title="SKILLS"
            currentBackground={currentBackground}
          />
        </div>
        <div onClick={() => handleNavbarClick("Projects")}>
          <NavbarName
            icon={<IoIosArrowForward />}
            image={backgroundImage4}
            newBackground={handleBackgroundChange}
            newColor="#86CC7B"
            title="PROYECTOS"
            currentBackground={currentBackground}
          />
        </div>
        <div onClick={() => handleNavbarClick("Contact")}>
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

      {currentBackground !== backgroundImage2 || backgroundImage1 ? (
        <div
          className="border"
          style={{
            transition: "1.5s ease",
            top: borderTop,
            color: color,
            border: `${color} solid 10px`,
          }}
        >
          <div className={`${isHidden ? "transparent" : "not-transparent"}`}>
            {currentContent === "About" && <About />}
            {currentContent === "Skills" && <Skills />}
            {currentContent === "Projects" && <Projects />}
            {currentContent === "Contact" && <Contact />}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BackgroundChanger;
