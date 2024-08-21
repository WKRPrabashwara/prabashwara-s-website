import React from 'react';
import "./skills.css";
import Frontend from './Educational';
import Backend from './Other';
import { FaChartSimple } from "react-icons/fa6";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title"><FaChartSimple className='title__icon'/> Skills</h2>
        <span className="section__subtitle">Progress of skills</span>
        <div className="skills__container container grid">
            <Frontend />
            <Backend /> 
        </div>
    </section>
  );
}

export default Skills;