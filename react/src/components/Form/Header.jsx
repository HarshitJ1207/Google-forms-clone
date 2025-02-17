import { useState } from "react";
import Dropdown from "./../util/Dropdown"
import TextToolBar from "./../util/TextToolBar"

export default function Header({state}){
    const [focusedField, setFocusedField] = useState(false);
    const props = {
        trigger: (children) => <div className = 'tab__type-dropdown'>{children}</div>,
        alignRight: true,
        itemList: [
            <><span className="material-symbols-outlined">short_text</span><p>Short answer</p></>,
            <><span className="material-symbols-outlined">segment</span><p>Paragraph</p></>,
            <><span className="material-symbols-outlined">radio_button_checked</span><p>Multiple choice</p></>,
            <><span className="material-symbols-outlined">check_box</span><p>Checkboxes</p></>,
            <><span className="material-symbols-outlined">arrow_drop_down_circle</span><p>Dropdown</p></>,
            <><span className="material-symbols-outlined">cloud_upload</span><p>File upload</p></>,
            <><span className="material-symbols-outlined">linear_scale</span><p>Linear scale</p></>,
            <><span className="material-symbols-outlined">star</span><p>Rating</p></>,
            <><span className="material-symbols-outlined">apps</span><p>Multiple Choice Grid</p></>,
            <><span className="material-symbols-outlined">grid_view</span><p>Checkbox Grid</p></>,
            <><span className="material-symbols-outlined">event</span><p>Date</p></>,
            <><span className="material-symbols-outlined">schedule</span><p>Time</p></>,
        ],
        fillContent: true,
        manageState: true,
        state: state
    }
    return (
        <div className="tab-header">
            <div className="tab__textbox-container">
                <input 
                    className="tab__question-bar" 
                    placeholder="Question"
                    onFocus={() => setFocusedField(true)}
                    onBlur={() => setFocusedField(false)}
                />
                {focusedField && <TextToolBar />}
            </div>
            <span className = 'material-symbols-outlined'>image</span>
            <Dropdown {...props}/>
        </div>
    );
};