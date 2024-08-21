import React from 'react';
import "./about.css";
import AboutImg from "../../assets/aboutBW.jpeg";
import Info from "./Info";
import { FaUser } from "react-icons/fa6";
import { LiaHandPointer } from "react-icons/lia";


const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title"><FaUser className='title__icon' /> About Me</h2>
            <span className="section__subtitle">A short introduction</span>
            <div className="about__container container grid">
                <img src={AboutImg} alt="about" className="about__img" />
                <div className="about__data">
                    <Info />
                    <p class="about__description">
                        I'm Rivibibu Prabashwara, currently studying at an advanced level. I explore whatever sparks my interest, embracing both similar and different ideas. I believe growth comes from learning something new every day and constantly evolving to become a better version of myself.
                    </p>
                    <p class="about__description">
                        This website is just a space to share my thoughts, much like many others. I believe that by exchanging ideas, we can all improve and grow. :&#41;
                    </p>
                    <p class="about__description">
                        &ldquo;I've seen monkeys struggling for food, and humans striving to be their best.&rdquo;
                    </p>

                    <a href="#contact" className="button button--flex">
                        Get in Touch <LiaHandPointer className='title__icon about__button__icon' />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;