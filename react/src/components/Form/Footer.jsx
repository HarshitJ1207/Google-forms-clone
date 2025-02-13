import ToggleSlider from "../util/ToggleSlider";

export default function Footer() {
    return (
        <div className = 'tab-footer'>
            <span className="material-symbols-outlined">content_copy</span>
            <span className="material-symbols-outlined">delete</span>
            <hr className = 'tab-footer__divider'/>
            <label className="tab-footer__required-label">Required</label>
            <ToggleSlider height={1.5}/>
            <span className="material-symbols-outlined">more_vert</span>
        </div>
    );


};