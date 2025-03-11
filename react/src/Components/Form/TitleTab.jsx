import './TitleTab.css'
import { useState } from "react";
import Input from "../Elements/Input";
import TextToolbar from '../UtilityComponents/TextToolbar';
export default function TitleTab (){
    const [active, setActive] = useState(null);
    const [title, setTitle] = useState('Untitled Form');
    const [description, setDescription] = useState('');
    const titleBarProps = {
        className: 'tab__title-bar',
        handlers: {
            onFocus: () => setActive('title'),
            onBlur: () => {
                setActive(null)
                if(title === '') setTitle('Untitled form');
            },
            onChange: (e) => setTitle(e.target.value),

        },
        attributes: {
            value: title
        },
        options: {
            size: 'xl',
            variant: 'borderless'
        }
    }
    const descriptionBarProps = {
        className: 'tab__description-bar',
        handlers: {
            onFocus: () => setActive('description'),
            onBlur: () => setActive(null),
            onChange: (e) => setDescription(e.target.value)
        },
        attributes: {
            value: description,
            placeholder: 'Form description'
        },
        options: {
            variant: 'borderless'
        }
    }
    return (
        <div className = 'form-tab title-tab'>
            <div>
                <Input {...titleBarProps} />
                {active === 'title' && <TextToolbar />}
            </div>
            <div>
                <Input {...descriptionBarProps}/>
                {active === 'description' && <TextToolbar />}
            </div>
        </div>
    );
}