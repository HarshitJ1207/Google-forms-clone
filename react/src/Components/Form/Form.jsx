import { useState, useEffect, useContext } from 'react';
import MaterialIcon from '../Elements/MaterialIcon';
import QuestionTab from './QuestionTab';
import './Form.css'
import TitleTab from "./TitleTab";
import FlexBox from '../Layout/FlexBox';
import FormDataContext from '../../Context/FormDataContext';
import SelectedTabContext from '../../Context/SelectedTabContext';

import FormDataUtils from '../../Utility/FormDataUtils';
export default function Form (){
    const {formData, setFormData} = useContext(FormDataContext);
    const [topOffset, setTopOffset] = useState(0);
    const [leftOffset, setLeftOffset] = useState(0);
    const {selectedTab, setSelectedTab} = useContext(SelectedTabContext);
    useEffect(() => {
        const handleResize = () => {
            if(!selectedTab) return;
            setTopOffset(selectedTab[1].offsetTop);
            setLeftOffset(selectedTab[1].offsetLeft + selectedTab[1].offsetWidth + 8);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [selectedTab])

    const handleDivClick = (e, index) => {
        const div = e.currentTarget;
        setSelectedTab([index, div]);
        setTopOffset(div.offsetTop);
        setLeftOffset(div.offsetLeft + div.offsetWidth + 8);
    };
    const flexboxProps = {
        direction: 'column',
        className: 'form'
    }
    function getFormTabs(){
        const tabs = formData.formTabs;
        return tabs.map((_, index) => <QuestionTab key = {index} tabIndex = {index} onClickCapture={(e) => handleDivClick(e,index)} />);
    }

    const addNewTab = () => {
        setFormData(prev => {
            const next = structuredClone(prev);
            next.formTabs.splice(selectedTab[0], 0, FormDataUtils.getDefaultObject('short-answer'));
            return next;
        })
    }

    return (
        <FlexBox {...flexboxProps}>
            <TitleTab onClickCapture = {(e) => handleDivClick(e,-1)}/>
            {
                getFormTabs()
            }
            {
                selectedTab &&
                <FlexBox direction = 'column' className="floating-window" style={{ '--top-offset': `${topOffset}px`, '--right-offset' : `${leftOffset}px` }}>
                    <MaterialIcon name = 'add_circle' className='icon-button' onClick={addNewTab}/>
                    <MaterialIcon name = 'format_size' className='icon-button'/>
                    <MaterialIcon name = 'image' className='icon-button'/>
                    <MaterialIcon name = 'smart_display' className='icon-button'/>
                    <MaterialIcon name = 'splitscreen' className='icon-button'/>
                </FlexBox>
            }
        </FlexBox>
    );
}