import React, { useState } from "react";
import "./qualification.css";
import { HiOutlineAcademicCap, HiOutlineCalendar } from "react-icons/hi";
import { TbBulb, TbTimeline } from "react-icons/tb";
import { FaExternalLinkAlt } from "react-icons/fa";
import otherq1pdf from "./data/Python_for_Beginners_E-Certificate.pdf";
import educationalq1pdf from "./data/Exam Results - Department of Examinations - Sri Lanka.pdf";


const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const EducationalList = {
        q1: {
            title: 'G.C.E (O/L) Examination',
            subtitle: 'GCE Ordinary Level in Sri Lanka',
            date: '2022(2023)',
            more: educationalq1pdf
        },
        q2: {
            title: 'Demo',
            subtitle: '"Ipsum" redirects here. For the car, see Toyota Ipsum.',
            date: '2030',
            more: educationalq1pdf
        },
        q3: {
            title: 'Demo',
            subtitle: '"Ipsum" redirects here. For the car, see Toyota Ipsum.',
            date: '2030',
            more: educationalq1pdf
        }
    };

    const OtherList = {
        q1: {
            title: 'Python for Beginners',
            subtitle: 'Open Learning Platform - UoM',
            date: 'June 28, 2023',
            more: otherq1pdf
        },
        q2: {
            title: 'Demo',
            subtitle: '"Ipsum" redirects here. For the car, see Toyota Ipsum.',
            date: '2030',
            more: otherq1pdf
        },
        q3: {
            title: 'Demo',
            subtitle: '"Ipsum" redirects here. For the car, see Toyota Ipsum.',
            date: '2030',
            more: otherq1pdf
        },
        q4: {
            title: 'Demo',
            subtitle: '"Ipsum" redirects here. For the car, see Toyota Ipsum.',
            date: '2030',
            more: otherq1pdf
        }
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">< TbTimeline className="title__icon" size="24" /> Qualification</h2>
            <span className="section__subtitle">My Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button button--flex qualification__active"
                        : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <HiOutlineAcademicCap className="qualification__icon" />
                        Educational
                    </div>
                    <div className={toggleState === 2 ? "qualification__button button--flex qualification__active"
                        : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <TbBulb className="qualification__icon" />
                        Other
                    </div>
                </div>

                <div className="qualification__sections">

                    <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                        : "qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{EducationalList.q1.title}</h3>
                                <span className="qualification__subtitle">{EducationalList.q1.subtitle}</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon title__icon" /> {EducationalList.q1.date}
                                </div>
                                <a download href={EducationalList.q1.more} aria-label="More details" role="button" className="more__details">
                                    <FaExternalLinkAlt className="more__icon" />
                                    <div className="more__text">More</div>
                                </a>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">{EducationalList.q2.title}</h3>
                                <span className="qualification__subtitle">{EducationalList.q2.subtitle}</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon title__icon" /> {EducationalList.q2.date}
                                </div>
                                <a download href={EducationalList.q2.more} aria-label="More details" role="button" className="more__details">
                                    <FaExternalLinkAlt className="more__icon" />
                                    <div className="more__text">More</div>
                                </a>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{EducationalList.q3.title}</h3>
                                <span className="qualification__subtitle">{EducationalList.q3.subtitle}</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon title__icon" /> {EducationalList.q3.date}
                                </div>
                                <a download href={EducationalList.q3.more} aria-label="More details" role="button" className="more__details">
                                    <FaExternalLinkAlt className="more__icon" />
                                    <div className="more__text">More</div>
                                </a>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                        : "qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{OtherList.q1.title}</h3>
                                <span className="qualification__subtitle">{OtherList.q1.subtitle}</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon title__icon" /> {OtherList.q1.date}
                                </div>
                                <a download href={OtherList.q1.more} aria-label="More details" role="button" className="more__details">
                                    <FaExternalLinkAlt className="more__icon" />
                                    <div className="more__text">More</div>
                                </a>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">{OtherList.q2.title}</h3>
                                <span className="qualification__subtitle">{OtherList.q2.subtitle}</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon title__icon" /> {OtherList.q2.date}
                                </div>
                                <a download href={OtherList.q2.more} aria-label="More details" role="button" className="more__details">
                                    <FaExternalLinkAlt className="more__icon" />
                                    <div className="more__text">More</div>
                                </a>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{OtherList.q3.title}</h3>
                                <span className="qualification__subtitle">{OtherList.q3.subtitle}</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon title__icon" /> {OtherList.q3.date}
                                </div>
                                <a download href={OtherList.q3.more} aria-label="More details" role="button" className="more__details">
                                    <FaExternalLinkAlt className="more__icon" />
                                    <div className="more__text">More</div>
                                </a>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">{OtherList.q4.title}</h3>
                                <span className="qualification__subtitle">{OtherList.q4.subtitle}</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon title__icon" /> {OtherList.q4.date}
                                </div>
                                <a download href={OtherList.q4.more} aria-label="More details" role="button" className="more__details">
                                    <FaExternalLinkAlt className="more__icon" />
                                    <div className="more__text">More</div>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Qualification;