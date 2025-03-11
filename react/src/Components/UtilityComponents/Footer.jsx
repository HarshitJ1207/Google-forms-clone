import './Footer.css'
import ToggleSlider from "../UtilityComponents/ToggleSlider";
import MaterialIcon from "../Elements/MaterialIcon";
import { useState } from 'react';
export default function Footer() {
    const [toggleState, setToggleState] = useState(false);
    return (
        <div className = 'tab-footer'>
            <MaterialIcon name = 'content_copy' className='icon-button' />
            <MaterialIcon name = 'delete' className='icon-button' />
            <hr className = 'tab-footer__divider'/>
            <label className="tab-footer__required-label" onClick={() => setToggleState(!toggleState)}>Required</label>
            <ToggleSlider size='large' state = {toggleState}/>
            <MaterialIcon name = 'more_vert'className='icon-button'  />
        </div>
    );


};