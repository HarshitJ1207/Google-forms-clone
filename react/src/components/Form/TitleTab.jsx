import { useState } from "react";
import TextToolBar from "../util/TextToolBar";

export default function TitleTab() {
    const [focusedField, setFocusedField] = useState(null);

    return (
        <div className="form-tab title-tab">
            <div className="tab__textbox-container">
                <input 
                    className="tab__title-bar" 
                    placeholder="Untitled form"
                    onFocus={() => setFocusedField("title")}
                    onBlur={() => setFocusedField(null)}
                />
                {focusedField === "title" && <TextToolBar />}
            </div>

            <div className="tab__textbox-container">
                <input 
                    className="tab__description-bar" 
                    placeholder="Form description"
                    onFocus={() => setFocusedField("description")}
                    onBlur={() => setFocusedField(null)}
                />
                {focusedField === "description" && <TextToolBar />}
            </div>
        </div>
    );
};
