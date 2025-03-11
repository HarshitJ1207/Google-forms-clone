import './UpperNavbar.css';
import FlexBox from '../Layout/FlexBox.jsx';
import formIcon from '/forms-icon.svg';
import Input from '../Elements/Input.jsx';
import MaterialIcon from '../Elements/MaterialIcon.jsx';
import Button from '../Elements/Button.jsx';
import Select from '../Elements/Select.jsx';
import { useState } from 'react';
function UpperLeftNavbar(){
    const [formName, setFormName] = useState('Untitled form');
    const formNameInputProps = {
        className: 'navbar__form-name-input',
        attributes: {
            type: 'text',
            value: formName
        },
        handlers: {
            onChange: (e) => setFormName(e.target.value),
            onBlur: () => {
                if(formName === '') setFormName('Untitled Form');
            }
        },
        options: {
            variant: 'borderless'
        }
    }
    const materialIconOutlinedProps = {
        className: 'icon-button'
    }
    return (
        <FlexBox gap = '0.5rem'>
            <img className = 'google-forms-icon' src = {formIcon}/>
            <Input {...formNameInputProps} />
            <MaterialIcon {...materialIconOutlinedProps} name = 'folder' />
            <MaterialIcon {...materialIconOutlinedProps} name = 'star' />
        </FlexBox>
    );
}

function UpperRightNavbar() {
    const props = {
        node: <span className="material-symbols-outlined navbar-upper__icon">more_vert</span>,
        options: {
            align: 'right',
            stateManagement: 'none'
        },
        style: {
            fontSize: '0.9rem'
        },
        className: 'icon-button'
    }
    const materialIconOutlinedProps = {
        className: 'icon-button'
    }
    const publishButtonProps = {
        options: {
            variant: 'primary'
        },
    }
    return (
        <FlexBox gap = '0.5rem'>
            <MaterialIcon {...materialIconOutlinedProps} name = 'palette' />
            <MaterialIcon {...materialIconOutlinedProps} name = 'visibility' />
            <MaterialIcon {...materialIconOutlinedProps} name = 'undo' />
            <MaterialIcon {...materialIconOutlinedProps} name = 'redo' />
            <MaterialIcon {...materialIconOutlinedProps} name = 'link' />
            <MaterialIcon {...materialIconOutlinedProps} name = 'person_add' />
            <Button {...publishButtonProps}>Publish</Button>
            <Select {...props}>
                <FlexBox className='option'><span className="material-symbols-outlined">content_copy</span><span>Make a copy</span></FlexBox>
                <FlexBox className='option'><span className="material-symbols-outlined">delete</span><span>Move to thrash</span></FlexBox>
                <FlexBox className='option'><span className="material-symbols-outlined">extension</span><span>Get Add ons</span></FlexBox>
            </Select>
            <MaterialIcon {...materialIconOutlinedProps} name = 'account_circle' />
        </FlexBox>
    );
}



export default function UpperNavbar(){
    const flexBoxProps = {
        gap:'3rem',
        justify:'space-between'
    }
    return (
        <FlexBox {...flexBoxProps} style={{padding: '0.5rem'}}>
            <UpperLeftNavbar />
            <UpperRightNavbar />
        </FlexBox>
    );
}