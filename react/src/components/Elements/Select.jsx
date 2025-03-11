import { useState, useRef, useEffect } from 'react';
import './Select.css';
import Button from './Button';

export default function Select({
    children = [],
    handlers = {},
    className = '',
    style = {},
    options = {},
    node = null,
}) {
    const {
        stateManagement = 'display', // display || manage || none
        placeholder = 'Choose an option',
        syncState = null,
        align = 'left',
        divisions = [] 
    } = options;
    
    const isControlled = syncState !== null;

    // Uncontrolled state (Only used when syncState is not provided)
    const [internalSelectedIndex, setInternalSelectedIndex] = useState(-1);
    const selectedIndex = isControlled ? syncState[0] : internalSelectedIndex;
    const setSelectedIndex = isControlled ? syncState[1] : setInternalSelectedIndex;

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    
    // Ensure selectedIndex stays within valid range when children change
    useEffect(() => {
        if (stateManagement !== 'none') {
            setSelectedIndex((prev) => Math.min(Math.max(0, prev), children.length - 1));
        }
    }, [syncState, children.length]);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    let trigger;
    if (node) {
        trigger = node;
    } else if (stateManagement === 'display') {
        trigger = (
            <Button className="trigger-button">
                {selectedIndex >= 0 ? children[selectedIndex] : placeholder}
            </Button>
        );
    } else {
        trigger = <Button className="trigger-button">{placeholder}</Button>;
    }

    const getOptionProps = (ix) => ({
        onClick: () => {
            if (stateManagement !== 'none') setSelectedIndex(ix);
            setOpen(false);
        },
        className: selectedIndex === ix ? 'selectOption selectOption--selected' : 'selectOption',
    });

    return (
        <div className={`dropdown ${className}`.trim()} ref={dropdownRef} style={style}>
            <div onClick={() => setOpen(!open)} {...handlers} className="trigger">
                {trigger}
            </div>
            {open && (
                <div className={`dropdown-menu dropdown-menu--${align}`}>
                    {children.map((item, ix) => (
                        <div key={ix}>
                            {divisions.includes(ix) && <div className="dropdown-divider"></div>}
                            <div {...getOptionProps(ix)}>
                                {item}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
