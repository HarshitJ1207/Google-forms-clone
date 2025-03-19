import './TitleTab.css'
import { useContext, useState} from "react";
import Input from "../Elements/Input";
import TextToolbar from '../UtilityComponents/TextToolbar';
import FormDataContext from '../../Context/FormDataContext';
import SelectedTabContext from '../../Context/SelectedTabContext';

export default function TitleTab({ onClickCapture }) {
    const {selectedTab} = useContext(SelectedTabContext);
    const [active, setActive] = useState(null);
    const { formData, setFormData } = useContext(FormDataContext);

    const title = formData.formTitle;
    const description = formData.formDescription;

    const setTitle = (val) => setFormData(prev => {
        const next = structuredClone(prev);
        return {...next, formTitle: val};
    }) ;
    const setDescription = (val) => setFormData(prev => {
        const next = structuredClone(prev);
        return {...next, formDescription: val};
    });
    const handleBlur = () => {
        setActive(null);
        setFormData(prev => ({
            ...prev,
            formTitle: prev.formTitle.trim() || 'Untitled form'
        }));
    };

    const titleBarProps = {
        className: 'tab__title-bar',
        onFocus: () => setActive('title'),
        onBlur: handleBlur,
        onChange: (e) => setTitle(e.target.value),
        attributes: { value: title },
        options: { size: Input.SIZE.XL, view: Input.VIEW.BORDERLESS }
    };

    const descriptionBarProps = {
        className: 'tab__description-bar',
        onFocus: () => setActive('description'),
        onBlur: () => setActive(null),
        onChange: (e) => setDescription(e.target.value),
        attributes: { value: description, placeholder: 'Form description' },
        options: { view: Input.VIEW.BORDERLESS }
    };

    if(selectedTab && selectedTab[0] === 0) return (
        <div className='form-tab title-tab form-tab--selected' onClickCapture={onClickCapture}>
            <div>
                <Input {...titleBarProps} />
                {active === 'title' && <TextToolbar />}
            </div>
            <div>
                <Input {...descriptionBarProps} />
                {active === 'description' && <TextToolbar />}
            </div>
        </div>
    );
    else return (
        <div className='form-tab title-tab' onClickCapture={onClickCapture}>
            <div>
                <Input {...titleBarProps} />
                {active === 'title' && <TextToolbar />}
            </div>
            <div>
                <Input {...descriptionBarProps} />
                {active === 'description' && <TextToolbar />}
            </div>
        </div>
    );
}
