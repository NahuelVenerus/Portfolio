import React from "react";
import "../styles/skillsStyles.css";

const SkillRow = ({ icon: IconComponent, name }) => {
  const isScreenSizeLessThan500px = window.innerWidth < 500;

  return (
    <div className="skill-row">
      <IconComponent className="skill-icon" />
      {isScreenSizeLessThan500px ? null : name}
    </div>
  );
};

export default SkillRow;
