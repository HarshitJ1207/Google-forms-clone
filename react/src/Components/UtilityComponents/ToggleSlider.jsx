import {useEffect, useState} from "react";
import "./ToggleSlider.css";

export default function ToggleSlider({ size = "medium", handlers = {}, toggleClassName = '', sliderClassName = '', state = false}) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive((prev) => !prev);
    };

    useEffect(() => {
        setIsActive(state);
    }, [state])

    return (
        <>
            <div
                className={`toggle toggle-${size} ${isActive ? "toggle--active" : ""} ${toggleClassName}`}
                onClick={handleClick} {...handlers}
            >
                <div className={`slider slider-${size} ${isActive ? "slider--active" : ""} ${sliderClassName}`}></div>
            </div>
        </>
    );
}
