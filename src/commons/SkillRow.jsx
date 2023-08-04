import React from "react";
import "../styles/skillsStyles.css";

const SkillRow = ({ icon: IconComponent, name }) => {
  return (
    <div className="skill-row">
      <IconComponent className="skill-icon" />
      {name}
    </div>
  );
};

export default SkillRow;
