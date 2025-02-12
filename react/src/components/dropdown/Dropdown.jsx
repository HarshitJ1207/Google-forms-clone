import { useState, useRef, useEffect } from "react";
import "./Dropdown.css";

function Dropdown({ trigger, itemList, alignRight = false }) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <div className="dropdown__trigger" onClick={() => setOpen(!open)}>
                {trigger}
            </div>
            {open && (
                <ul className={`dropdown__menu ${alignRight ? "dropdown__menu--right" : ""}`}>
                    {itemList.map((item, index) => (
                        <li key={index} className="dropdown__item">{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;
