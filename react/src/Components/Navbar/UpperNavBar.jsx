import './UpperNavbar.css';
import FlexBox from '../Layout/FlexBox.jsx';
import formIcon from '/forms-icon.svg';
import Input from '../Elements/Input.jsx';
import MaterialIcon from '../Elements/MaterialIcon.jsx';
import Button from '../Elements/Button.jsx';
import Dropdown from '../Elements/Dropdown.jsx';
import { useContext, useEffect } from 'react';
import FormDataContext from '../../Context/FormDataContext.jsx';
function UpperLeftNavbar(){
    const {formData, setFormData} = useContext(FormDataContext);
    const formName = formData.formName;
    const setFormName = (val) => setFormData((prev) => {
        const next = structuredClone(prev);
        return {...next, formName: val}
    })

    useEffect(() => {
        formData.formName = formName;
    })
    const formNameInputProps = {
        className: 'navbar__form-name-input',
        attributes: {
            type: 'text',
            value: formName
        },
        onChange: (e) => setFormName(e.target.value),
        onBlur: () => {
            if(formName === '') setFormName('Untitled Form');
        },
        options: {
            view: Input.VIEW.BORDERLESS
        }
    }
    const materialIconOutlinedProps = {
        className: 'icon-button'
    }
    return (
        <FlexBox gap = '1.2rem'>
            <img className = 'google-forms-icon' src = {formIcon}/>
            <Input {...formNameInputProps} />
            <MaterialIcon {...materialIconOutlinedProps} name = 'folder' />
            <MaterialIcon {...materialIconOutlinedProps} name = 'star' />
        </FlexBox>
    );
}

function UpperRightNavbar() {
    const materialIconOutlinedProps = {
        className: 'icon-button'
    }
    const publishButtonProps = {
        options: {
            view: Button.VIEW.PRIMARY
        },
    }
    const props = {
        menu: [
            {   key: 0,
                label: <FlexBox className='option'><span className="material-symbols-outlined">content_copy</span><span>Make a copy</span></FlexBox>
            },
            {
                key: 1,
                label: <FlexBox className='option'><span className="material-symbols-outlined">delete</span><span>Move to thrash</span></FlexBox>
            },
            {
                key: 2,
                label: <FlexBox className='option'><span className="material-symbols-outlined">extension</span><span>Get Add ons</span></FlexBox>
            }
        ],
        placement: Dropdown.PLACEMENT.RIGHT,
        trigger: ['hover']
    }
    return (
        <FlexBox gap = '1.2rem'>
            <MaterialIcon {...materialIconOutlinedProps} name = 'palette' />
            <MaterialIcon {...materialIconOutlinedProps} name = 'visibility' />
            <MaterialIcon {...materialIconOutlinedProps} name = 'undo' />
            <MaterialIcon {...materialIconOutlinedProps} name = 'redo' />
            <MaterialIcon {...materialIconOutlinedProps} name = 'link' />
            <MaterialIcon {...materialIconOutlinedProps} name = 'person_add' />
            <Button {...publishButtonProps}>Publish</Button>
            <Dropdown {...props}>
                <MaterialIcon {...materialIconOutlinedProps} name = 'more_vert'/>
            </Dropdown>
            <MaterialIcon {...materialIconOutlinedProps} name = 'account_circle' />
        </FlexBox>
    );
}



export default function UpperNavbar(){
    const flexBoxProps = {
        gap:'3rem',
        justify:'space-between',
        className: 'upper-navbar'
    }
    return (
        <FlexBox {...flexBoxProps}>
            <UpperLeftNavbar />
            <UpperRightNavbar />
        </FlexBox>
    );
}