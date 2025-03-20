import {useEffect, useState} from "react";
import "./ToggleSlider.css";

export default function ToggleSlider({ size = "medium", onClick = () => {}, toggleClassName = '', sliderClassName = '', state = false}) {
    const [isActive, setIsActive] = useState(state);

    const handleClick = () => {
        setIsActive((prev) => !prev);
        onClick();
    };

    useEffect(() => {
        setIsActive(state);
    }, [state])

    return (
        <>
            <div
                className={`toggle toggle-${size} ${isActive ? "toggle--active" : ""} ${toggleClassName}`}
                onClick={handleClick}
            >
                <div className={`slider slider-${size} ${isActive ? "slider--active" : ""} ${sliderClassName}`}></div>
            </div>
        </>
    );
}
