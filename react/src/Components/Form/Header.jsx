import './Header.css';
import { useContext, useState } from "react";
import TextToolBar from "../UtilityComponents/TextToolbar.jsx";
import MaterialIcon from '../Elements/MaterialIcon.jsx';
import Input from '../Elements/Input.jsx';
import Dropdown from '../Elements/Dropdown.jsx';
import FlexBox from '../Layout/FlexBox.jsx';
import FormDataContext from '../../Context/FormDataContext.jsx';
import FormDataUtils from '../../Utility/FormDataUtils.js'
import Button from '../Elements/Button.jsx';

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

    const state = formData.formTabs[tabIndex].type;
    const setState = (val) => setFormData(prev => {
        const next = structuredClone(prev);
        next.formTabs[tabIndex] = FormDataUtils.convertObject(next.formTabs[tabIndex], val);
        return next;
    })

    const props = {
        menu: [
            {
                key: 'short-answer',
                label: <FlexBox className={'option'}>
                            <span className="material-symbols-outlined">short_text</span><span>Short answer</span>
                        </FlexBox>,
                onClick(){setState(this.key)},
                divider: false
            },
            {
                key: 'paragraph',
                label: <FlexBox className={'option'}>
                            <span className="material-symbols-outlined">segment</span><span>Paragraph</span>
                        </FlexBox>,
                onClick(){setState(this.key)},
                divider: false
            },
            {
                key: 'multiple-choice',
                label: <FlexBox className={'option'}>
                            <span className="material-symbols-outlined">radio_button_checked</span><span>Multiple choice</span>
                        </FlexBox>,
                onClick(){setState(this.key)},
                divider: true
            },
            {
                key: 'checkbox',
                label: <FlexBox className={'option'}>
                            <span className="material-symbols-outlined">check_box</span><span>Checkboxes</span>
                        </FlexBox>,
                onClick(){setState(this.key)},
                divider: false
            },
            {
                key: 'dropdown',
                label: <FlexBox className={'option'}>
                            <span className="material-symbols-outlined">arrow_drop_down_circle</span><span>Dropdown</span>
                        </FlexBox>,
                onClick(){setState(this.key)},
                divider: false
            },
            {
                key: 'file-upload',
                label: <FlexBox className={'option'}>
                            <span className="material-symbols-outlined">cloud_upload</span><span>File upload</span>
                        </FlexBox>,
                onClick(){setState(this.key)},
                divider: true
            },
            {
                key: 'linear-scale',
                label: <FlexBox className={'option'}>
                            <span className="material-symbols-outlined">linear_scale</span><span>Linear scale</span>
                        </FlexBox>,
                onClick(){setState(this.key)},
                divider: true
            },
            {
                key: 'rating',
                label: <FlexBox className={'option'}>
                            <span className="material-symbols-outlined">star</span><span>Rating</span>
                        </FlexBox>,
                onClick(){setState(this.key)},
                divider: false
            },
            {
                key: 'multiple-choice-grid',
                label: <FlexBox className={'option'}>
                            <span className="material-symbols-outlined">apps</span><span>Multiple Choice Grid</span>
                        </FlexBox>,
                onClick(){setState(this.key)},
                divider: true
            },
            {
                key: 'checkbox-grid',
                label: <FlexBox className={'option'}>
                            <span className="material-symbols-outlined">grid_view</span><span>Checkbox Grid</span>
                        </FlexBox>,
                onClick(){setState(this.key)},
                divider: false
            },
            {
                key: 'date',
                label: <FlexBox className={'option'}>
                            <span className="material-symbols-outlined">event</span><span>Date</span>
                        </FlexBox>,
                onClick(){setState(this.key)},
                divider: true
            },
            {
                key: 'time',
                label: <FlexBox className={'option'}>
                            <span className="material-symbols-outlined">schedule</span><span>Time</span>
                        </FlexBox>,
                onClick(){setState(this.key)},
                divider: false
            }
        ],
        selectedKeys: [state]
    }

    return (
        <div className="tab-header">
            <div className="tab__textbox-container">
                <Input {...inputProps} />
                {focusedField && <TextToolBar />}
            </div>
            <MaterialIcon name='image' className='icon-button' />
            <Dropdown {...props}>
                <Button view = {Button.VIEW.DEFAULT}>
                    <FlexBox>
                        {props.menu.find(ele => ele.key === state).label}
                        <MaterialIcon name = 'arrow_drop_down' className='dropdown-arrow'/>
                    </FlexBox>
                </Button>
            </Dropdown>
        </div>
    );
};
