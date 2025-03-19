import './Header.css';
import { useContext, useState } from "react";
import TextToolBar from "../UtilityComponents/TextToolbar.jsx";
import MaterialIcon from '../Elements/MaterialIcon.jsx';
import Input from '../Elements/Input.jsx';
import Dropdown from '../Elements/Dropdown.jsx';
import FlexBox from '../Layout/FlexBox.jsx';
import FormDataContext from '../../Context/FormDataContext.jsx';
import FormDataUtils from '../../Utility/FormDataUtils.js'

const getTabType = (ix) => {
    switch (ix){
        case 'short-answer': return 0;
        case 'paragraph': return 1;
        case 'multiple-choice': return 2;
        case 'checkbox': return 3;
        case 'dropdown': return 4;
        case 'file-upload': return 5;
        case 'linear-scale': return 6;
        case 'rating': return 7;
        case 'multiple-choice-grid': return 8;
        case 'checkbox-grid': return 9;
        case 'date': return 10;
        case 'time': return 11;
        case 0: return 'short-answer';
        case 1: return 'paragraph';
        case 2: return 'multiple-choice';
        case 3: return 'checkbox';
        case 4: return 'dropdown';
        case 5: return 'file-upload';
        case 6: return 'linear-scale';
        case 7: return 'rating';
        case 8: return 'multiple-choice-grid';
        case 9: return 'checkbox-grid';
        case 10: return 'date';
        case 11: return 'time';
    } 
}

export default function Header({tabIndex}) {
    const {formData, setFormData} = useContext(FormDataContext);
    const question = formData.formTabs[tabIndex].question;
    const [focusedField, setFocusedField] = useState(false);
    const inputProps = {
        options: {
            view: Input.VIEW.FILLED,
            size: Input.SIZE.MEDIUM
        },
        onFocus: () => setFocusedField(true),
        onBlur: () => setFocusedField(false),
        onChange: (e) => {
            setFormData(prev => {
                const next = structuredClone(prev);
                next.formTabs[tabIndex].question = e.target.value;
                return next;
            })
        },
        className: 'tab__question-bar',
        attributes: {
            placeholder: 'Question',
            value: question
        }
    }

    const state = getTabType(formData.formTabs[tabIndex].type);
    const setState = (val) => setFormData(prev => {
        const next = structuredClone(prev);
        next.formTabs[tabIndex] = FormDataUtils.convertObject(next.formTabs[tabIndex], getTabType(val));
        return next;
    })

    const props = {
        options: {
            syncState: [state, setState],
            divisions: [2, 5, 6, 10]
        },
        align: Dropdown.ALIGN.RIGHT,
    }

    return (
        <div className="tab-header">
            <div className="tab__textbox-container">
                <Input {...inputProps} />
                {focusedField && <TextToolBar />}
            </div>
            <MaterialIcon name='image' className='icon-button' />
            <Dropdown {...props}>
                <FlexBox className='option'><span className="material-symbols-outlined">short_text</span><span>Short answer</span></FlexBox>
                <FlexBox className='option'><span className="material-symbols-outlined">segment</span><span>Paragraph</span></FlexBox>
                <FlexBox className='option'><span className="material-symbols-outlined">radio_button_checked</span><span>Multiple choice</span></FlexBox>
                <FlexBox className='option'><span className="material-symbols-outlined">check_box</span><span>Checkboxes</span></FlexBox>
                <FlexBox className='option'><span className="material-symbols-outlined">arrow_drop_down_circle</span><span>Dropdown</span></FlexBox>
                <FlexBox className='option'><span className="material-symbols-outlined">cloud_upload</span><span>File upload</span></FlexBox>
                <FlexBox className='option'><span className="material-symbols-outlined">linear_scale</span><span>Linear scale</span></FlexBox>
                <FlexBox className='option'><span className="material-symbols-outlined">star</span><span>Rating</span></FlexBox>
                <FlexBox className='option'><span className="material-symbols-outlined">apps</span><span>Multiple Choice Grid</span></FlexBox>
                <FlexBox className='option'><span className="material-symbols-outlined">grid_view</span><span>Checkbox Grid</span></FlexBox>
                <FlexBox className='option'><span className="material-symbols-outlined">event</span><span>Date</span></FlexBox>
                <FlexBox className='option'><span className="material-symbols-outlined">schedule</span><span>Time</span></FlexBox>
            </Dropdown>
        </div>
    );
};