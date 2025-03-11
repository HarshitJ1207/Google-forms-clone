import './Header.css';
import { useState } from "react";
import TextToolBar from "../UtilityComponents/TextToolbar.jsx";
import MaterialIcon from '../Elements/MaterialIcon.jsx';
import Input from '../Elements/Input.jsx';
import Select from '../Elements/Select.jsx';
import FlexBox from '../Layout/FlexBox.jsx';

export default function Header({tabState}) {
    const [state, setState] = tabState;
    const [focusedField, setFocusedField] = useState(false);
    const inputProps = {
        options: {
            variant: 'filled',
            size: 'medium'
        },
        handlers: {
            onFocus: () => setFocusedField(true),
            onBlur: () => setFocusedField(false)
        },
        className: 'tab__question-bar',
        attributes: {
            placeholder: 'Question'
        }
    }

    const props = {
        options: {
            syncState: [state, setState],
            align: 'right',
            divisions: [2, 5, 6, 10]
        },
        style: {
            fontSize: '0.9rem'
        },
        optionstyle: {
            width: '10rem'
        }
    }

    return (
        <div className="tab-header">
            <div className="tab__textbox-container">
                <Input {...inputProps} />
                {focusedField && <TextToolBar />}
            </div>
            <MaterialIcon name='image' className='icon-button' />
            <Select {...props}>
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
            </Select>
        </div>
    );
};