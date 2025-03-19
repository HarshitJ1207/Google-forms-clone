import './Footer.css'
import ToggleSlider from "../UtilityComponents/ToggleSlider";
import MaterialIcon from "../Elements/MaterialIcon";
import { useContext, useState } from 'react';
import FlexBox from '../Layout/FlexBox';
import FormDataContext from '../../Context/FormDataContext';
import SelectedTabContext from '../../Context/SelectedTabContext';

export default function Footer() {
    const [toggleState, setToggleState] = useState(false);
    const {setFormData} = useContext(FormDataContext);
    const {selectedTab, setSelectedTab} = useContext(SelectedTabContext)
    const deleteTab = (e) => {
        console.log(e);
        e.stopPropagation();
        console.log(selectedTab);
        setFormData(prev => {
            const next = structuredClone(prev);
            next.formTabs.splice(selectedTab[0] - 1, 1);
            return next;
        })
        setSelectedTab(null);
    }
    const cloneTab = (e) => {
        console.log(e);
        e.stopPropagation();
        console.log(selectedTab);
        setFormData(prev => {
            const next = structuredClone(prev);
            next.formTabs.splice(selectedTab[0], 0, next.formTabs[selectedTab[0] - 1]);
            return next;
        })
        setSelectedTab(null);
    }

    return (
        <FlexBox justify='flex-end' gap='1.2rem' className = 'tab-footer'>
            <MaterialIcon name = 'content_copy' className='icon-button' onClick={cloneTab} />
            <MaterialIcon name = 'delete' className='icon-button' onClick={deleteTab} />
            <hr className = 'tab-footer__divider'/>
            <label className="tab-footer__required-label" onClick={() => setToggleState(!toggleState)}>Required</label>
            <ToggleSlider size='large' state = {toggleState}/>
            <MaterialIcon name = 'more_vert'className='icon-button'  />
        </FlexBox>
    );


};