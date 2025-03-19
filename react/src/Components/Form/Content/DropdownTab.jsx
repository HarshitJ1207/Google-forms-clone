import './MultipleChoice.css';
import { useState, useContext, useEffect } from "react";
import FlexBox from "../../Layout/FlexBox";
import MaterialIcon from "../../Elements/MaterialIcon";
import Input from "../../Elements/Input";
import FormDataContext from '../../../Context/FormDataContext';

export default function DropdownTab({tabIndex}) {
    const {formData, setFormData} = useContext(FormDataContext);
    const options = formData.formTabs[tabIndex].options || [];
    const setOptions = (f) => setFormData(prev => {
        const next = structuredClone(prev);
        next.formTabs[tabIndex].options = f(next.formTabs[tabIndex].options);
        return next;
    });

    // const addedOther = formData.formTabs[tabIndex].other;
    // const setAddedOther = (val) => setFormData(prev => {
    //     const next = structuredClone(prev);
    //     next.formTabs[tabIndex].other = val;
    //     return next;
    // });
    // useEffect(() => {
    //     setFormData(prev => {
    //         const next = structuredClone(prev);
    //         next.formTabs[tabIndex].options = options;
    //         return next;
    //     })
    // }, [options])

    // useEffect(() => {
    //     setOptions(formData.formTabs[tabIndex].options);
    // }, [formData])
    
    const addOption = () => {
        setOptions(prevOptions => [...prevOptions, `Option ${prevOptions.length + 1}`])
    }
    const deleteOption = (index) => {
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
                view:  Input.VIEW.BORDERLESS
            }
        }
        return (
            <FlexBox key={index}>
                <span className="option-container__dropdown-option-number">{`${index+1}.`}</span>
                <Input {...inputProps}/>
                <MaterialIcon className={options.length === 1 ? 'visiblity-hidden': ''} onClick = {() => deleteOption(index)} name = 'close'/>
            </FlexBox>
        );
    }
    const renderAddOption = () => {
        return <>
            <FlexBox key={options.length}>
            <span className="option-container__dropdown-option-number">{`${options.length+1}.`}</span>
            <div className="add-option-container">
                <span className="add-option-container__add-option" onClick={addOption}>Add option</span>
            </div>
            </FlexBox>
        </>
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