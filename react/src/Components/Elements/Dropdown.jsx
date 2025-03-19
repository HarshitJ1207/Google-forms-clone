import { useState, useRef, useEffect } from 'react';
import './Dropdown.css';


//menu[i] : {key: '', label: '', onClick, division: }
export default function Dropdown({
    children,
    menu = [],
    placement = 'left',
    selectedKeys = [],
    trigger = []
}) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
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

    useEffect(() => {
        if (!trigger.includes('hover')) return;

        const handleMouseEnter = () => setOpen(true);
        const handleMouseLeave = () => setOpen(false);

        if (dropdownRef.current) {
            dropdownRef.current.addEventListener('mouseenter', handleMouseEnter);
            dropdownRef.current.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (dropdownRef.current) {
                dropdownRef.current.removeEventListener('mouseenter', handleMouseEnter);
                dropdownRef.current.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [trigger]);
    return (
        <div className={`dropdown`} ref={dropdownRef}>
            <div onClick={() => setOpen(!open)} className="trigger">
                {children}
            </div>
            {open && (
                <div className={`dropdown-menu dropdown-menu--${placement}`}>
                    {
                        menu.map((item, ix) => (
                            <div key={ix}>
                                {item.divider && <hr className='dropdown-divider'/>}
                                <div className={selectedKeys.includes(item.key) ? 'selectOption selectOption--selected' : 'selectOption'} 
                                    onClick={() => {
                                        if (item.onClick) item.onClick();
                                        setOpen(false);
                                    }}
                                >
                                    {item.label}
                                </div>
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    );
}

Dropdown.PLACEMENT = {
    LEFT: 'left',
    RIGHT: 'right'
}
