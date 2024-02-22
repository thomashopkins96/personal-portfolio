import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            if (skills.fontAwesomeClassname) {
              // Render if fontAwesomeClassname is present
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i className={skills.fontAwesomeClassname}></i>
                  <p>{skills.skillName}</p>
                </li>
              );
            } else {
              // Render nothing if fontAwesomeClassname is not present
              <li
                key={i}
                className = "software-skill-inline"
                name={skills.skillName}
              >
                <i><img src={skills.imgSource} alt={skills.altTag} /></i> 
              </li>
            }
          })}
        </ul>
      </div>
    </div>
  );
}
