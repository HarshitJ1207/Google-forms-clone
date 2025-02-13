import { useState, useRef, useEffect} from "react";
import "./Dropdown.css";

function Dropdown({ trigger, itemList, alignRight = false, fillContent = false, manageState = false}) {
    if(fillContent && !manageState) {
        throw(new Error('invalid config'));
    }
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(manageState ? 0 : -1);
    
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

    const updatedTrigger = fillContent ? trigger(itemList[selectedIndex]) : trigger;

    return (
        <div className="dropdown" ref={dropdownRef}>
            <div className="dropdown__trigger" onClick={() => setOpen(!open)}>
                {updatedTrigger}
            </div>
            {open && (
                <ul className={`dropdown__menu ${alignRight ? "dropdown__menu--right" : ""}`}>
                    {itemList.map((item, index) => (
                        <li 
                            key={index} 
                            className={`dropdown__item ${(index == selectedIndex && manageState) ? "dropdown__item--selected" : ""}`}
                            onClick={() => {
                                if(manageState) setSelectedIndex(index);
                                setOpen(false);
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;
