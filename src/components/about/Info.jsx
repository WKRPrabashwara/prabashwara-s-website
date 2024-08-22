import React from 'react';
import { FaBrain } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <FaBrain className="about__icon title__icon" />
        <h3 className="about__title">Research & Learning</h3>
        <span className="about__subtitle">Ongoing Journey</span>
      </div>
      <div className="about__box">
        <IoRocketOutline className="about__icon title__icon" />
        <h3 className="about__title">Passion for Innovation</h3>
        <span className="about__subtitle">Driven by Curiosity</span>
      </div>
      <div className="about__box">
        <AiOutlineGlobal className="about__icon title__icon" />
        <h3 className="about__title">Community Involvement</h3>
        <span className="about__subtitle">Science Outreach</span>
      </div>
    </div>
  );
}

export default Info;