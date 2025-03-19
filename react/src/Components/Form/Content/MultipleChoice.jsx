import './MultipleChoice.css';
import { useContext} from "react";
import FlexBox from "../../Layout/FlexBox";
import MaterialIcon from "../../Elements/MaterialIcon";
import Input from "../../Elements/Input";
import FormDataContext from '../../../Context/FormDataContext';
export default function MultipleChoice({tabIndex}) {
    const {formData, setFormData} = useContext(FormDataContext);
    const options = formData.formTabs[tabIndex].options || [];
    const setOptions = (f) => setFormData(prev => {
        const next = structuredClone(prev);
        next.formTabs[tabIndex].options = f(next.formTabs[tabIndex].options);
        return next;
    });
    
    const addedOther = formData.formTabs[tabIndex].other;
    const setAddedOther = (val) => setFormData(prev => {
        const next = structuredClone(prev);
        next.formTabs[tabIndex].other = val;
        return next;
    });

    const addOption = () => {
        setOptions(prevOptions => [...prevOptions, `Option ${prevOptions.length + 1}`])
    }

    const deleteOption = (index) => {
        if(index === -1){
            return setAddedOther(false);
        }
        setOptions(prevOptions => {
            return prevOptions.filter((_, i) => i != index);
        });
    };
    const renderOption = (option, index) => {
        const inputProps = {
            className: "option-container__option-bar",
            attributes: {
                value: option
            },
            onChange: (e) => {
                setOptions((prevOptions) => {
                const newOptions = [...prevOptions];
                newOptions[index] = e.target.value;
                return newOptions;
                });
            },
            options: {
                view: Input.VIEW.BORDERLESS
            }
        }
        return (
            <FlexBox key={index} className="option-container">
                <MaterialIcon name = 'radio_button_unchecked' />
                <Input {...inputProps}/>
                <MaterialIcon className = 'option-container__image-icon' name = 'image'/>
                <MaterialIcon className={options.length === 1 ? 'visiblity-hidden': ''} onClick = {() => deleteOption(index)} name = 'close'/>
            </FlexBox>
        );
    }
    const renderAddOption = () => {
        if(!addedOther){
            return (
                <FlexBox key={options.length} className="option-container">
                    <MaterialIcon name = 'radio_button_unchecked' />
                    <div className="add-option-container">
                        <span className="add-option-container__add-option" onClick={addOption}>Add option</span>
                        or
                        <span className="add-option-container__add-other" onClick={() => setAddedOther(true)}>add "Other"</span>
                    </div>
                </FlexBox>
            );
        }
        else {
            return <>
                <FlexBox key={options.length} className="option-container">
                    <MaterialIcon name = 'radio_button_unchecked' />
                    <span className="option-container__other-option">Other...</span>
                    <MaterialIcon onClick = {() => deleteOption(-1)} name = 'close'/>
                </FlexBox>
                <FlexBox key={options.length+1} className="option-container">
                    <MaterialIcon name = 'radio_button_unchecked' />
                    <div className="add-option-container">
                        <span className="add-option-container__add-option" onClick={addOption}>Add option</span>
                    </div>
                </FlexBox>
            </>

        }
    }

    const renderOptions = () => {
        return (
            <>
                {
                    options.map((option, index) => renderOption(option, index))
                }
                {
                    renderAddOption()
                }
            </>
        );
    }
    return (
        <div className="tab-content">
            <FlexBox direction="column" align="stretch">
                {renderOptions()}
            </FlexBox>
        </div>
    );

}