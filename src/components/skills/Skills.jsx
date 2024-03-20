import React from "react";
import './Skills.css';
import Frontend from "./Frontend";
import Backend from "./Backend";
import Other from "./Other";

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">My Skills</h2>
      <span className="section__subtitle">Things I know</span>
      
      <div className="skills__container container grid">
        <Frontend />
        {/* <Backend /> */}
        <Other />
      </div>
    </section>
  );
};

export default Skills;
