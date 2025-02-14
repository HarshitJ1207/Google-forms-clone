import { useRef, useState } from "react";

export default function ToggleSlider({ height = 5 }) {
    const toggle = useRef(null);
    const slider = useRef(null);
    const [isActive, setIsActive] = useState(false); 

    const toggleStyles = {
        height: `${height}rem`,
        width: `${2 * height}rem`,
        borderRadius: `${height / 2}rem`,
        background: isActive ? "var(--background-color)" : "#ccc",
        cursor: "pointer",
        transition: "background 0.2s ease-in-out",
    };

    const sliderStyles = {
        height: `${height}rem`,
        width: `${height}rem`,
        borderRadius: "50%",
        background: isActive ? "var(--primary-color)" : "white",
        boxShadow: "0 0.2rem 0.3rem rgba(0, 0, 0, 0.2)",
        float: isActive ? 'right' : 'left'
    };

    const handleClick = () => {
        setIsActive((prev) => !prev);  
    };

    return (
        <div ref={toggle} style={toggleStyles} onClick={handleClick}>
            <div ref={slider} style={sliderStyles}></div>
        </div>
    );
}
