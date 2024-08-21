import React, { useRef, useState, useEffect } from "react";
import { HiCheckBadge } from "react-icons/hi2";
import useOnScreen from "./useOnScreen"; // Import the hook

const Other = () => {
    const skillsRef = useRef();
    const isVisible = useOnScreen(skillsRef, "-100px"); // Adjust the root margin as needed
    const [loaded, setLoaded] = useState(false); // Track if the progress bars have been loaded

    // Define progress values for each skill
    const progressValues = {
        Programming: {
            progress: 40,
            level: 'Basic'
        },
        Scripting: {
            progress: 25,
            level: 'Basic'
        },
        Networking: {
            progress: 20,
            level: 'Basic'
        },
        Graphic: {
            progress: 40,
            level: 'Basic'
        },
        Content: {
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
            <h3 className="skills__title">Other</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Programming</h3>
                            <span className="skills__level">{progressValues.Programming.level}</span>
                            <br />
                            <progress
                                className="progress-bar"
                                value={loaded ? progressValues.Programming.progress : 0}
                                max={100}
                            ></progress>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Scripting</h3>
                            <span className="skills__level">{progressValues.Scripting.level}</span>
                            <br />
                            <progress
                                className="progress-bar"
                                value={loaded ? progressValues.Scripting.progress : 0}
                                max={100}
                            ></progress>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Networking</h3>
                            <span className="skills__level">{progressValues.Networking.level}</span>
                            <br />
                            <progress
                                className="progress-bar"
                                value={loaded ? progressValues.Networking.progress : 0}
                                max={100}
                            ></progress>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Graphic Design</h3>
                            <span className="skills__level">{progressValues.Graphic.level}</span>
                            <br />
                            <progress
                                className="progress-bar"
                                value={loaded ? progressValues.Graphic.progress : 0}
                                max={100}
                            ></progress>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Content Creating</h3>
                            <span className="skills__level">{progressValues.Content.level}</span>
                            <br />
                            <progress
                                className="progress-bar"
                                value={loaded ? progressValues.Content.progress : 0}
                                max={100}
                            ></progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Other;