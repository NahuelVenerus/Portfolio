import React from "react";
import "../styles/skillsStyles.css";
import { useState, useEffect } from "react";

const SkillRow = ({ icon: IconComponent, name }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup para evitar fugas de memoria
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="skill-row">
      <IconComponent className="skill-icon" />
      {!isMobile && <span>{name}</span>}
    </div>
  );
};

export default SkillRow;
