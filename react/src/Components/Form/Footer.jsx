import './Footer.css'
import ToggleSlider from "../UtilityComponents/ToggleSlider";
import MaterialIcon from "../Elements/MaterialIcon";
import { useContext } from 'react';
import FlexBox from '../Layout/FlexBox';
import FormDataContext from '../../Context/FormDataContext';
import SelectedTabContext from '../../Context/SelectedTabContext';

export default function Footer({tabIndex}) {
    // const [toggleState, setToggleState] = useState(false);
    const {formData, setFormData} = useContext(FormDataContext);
    const {setSelectedTab} = useContext(SelectedTabContext);
    const toggleState = formData.formTabs[tabIndex].required;
    const setToggleState = (val) => setFormData(prev => {
        const next = structuredClone(prev);
        next.formTabs[tabIndex].required = val;
        return next;
    })
    const deleteTab = () => {
        setFormData(prev => {
            const next = structuredClone(prev);
            next.formTabs.splice(tabIndex, 1);
            return next;
        })
        setSelectedTab(null);
    }
    const cloneTab = () => {
        setFormData(prev => {
            const next = structuredClone(prev);
            const newTab = structuredClone(next.formTabs[tabIndex]);
            next.formTabs.splice(tabIndex + 1, 0, newTab);
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
        </FlexBox>
    );


};