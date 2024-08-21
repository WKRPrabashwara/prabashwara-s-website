import React, { useRef, useState, useEffect } from "react";
import { HiCheckBadge } from "react-icons/hi2";
import useOnScreen from "./useOnScreen"; // Import the hook

const Educational = () => {
    const skillsRef = useRef();
    const isVisible = useOnScreen(skillsRef, "-100px"); // Adjust the root margin as needed
    const [loaded, setLoaded] = useState(false); // Track if the progress bars have been loaded

    // Define progress values for each skill
    const progressValues = {
        Mathematics: {
            progress: 0,
            level: 'Still Learning...'
        },
        Physics: {
            progress: 0,
            level: 'Still Learning...'
        },
        Chemistry: {
            progress: 0,
            level: 'Still Learning...'
        },
        Languages: {
            progress: 0,
            level: 'Still Learning...'
        },
        NodeJs: {
            progress: 30,
            level: 'Basic'
        },
        Git: {
            progress: 60,
            level: 'Intermediate'
        }
    };

    useEffect(() => {
        if (isVisible && !loaded) {
            setLoaded(true);
        }
    }, [isVisible, loaded]);

    return (
        <div className="skills__content" ref={skillsRef}>
            <h3 className="skills__title">Educational</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Mathematics</h3>
                            <span className="skills__level still__learning">{progressValues.Mathematics.level}</span>
                            <br />
                            <progress
                                className="progress-bar"
                                value={loaded ? progressValues.Mathematics.progress : 0}
                                max={100}
                            ></progress>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Physics</h3>
                            <span className="skills__level still__learning">{progressValues.Physics.level}</span>
                            <br />
                            <progress
                                className="progress-bar"
                                value={loaded ? progressValues.Physics.progress : 0}
                                max={100}
                            ></progress>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Chemistry</h3>
                            <span className="skills__level still__learning">{progressValues.Chemistry.level}</span>
                            <br />
                            <progress
                                className="progress-bar"
                                value={loaded ? progressValues.Chemistry.progress : 0}
                                max={100}
                            ></progress>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Languages</h3>
                            <span className="skills__level still__learning">{progressValues.Languages.level}</span>
                            <br />
                            <progress
                                className="progress-bar"
                                value={loaded ? progressValues.Languages.progress : 0}
                                max={100}
                            ></progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Educational;
