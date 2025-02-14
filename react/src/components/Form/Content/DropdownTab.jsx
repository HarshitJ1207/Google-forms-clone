import { useState } from "react";

export default function MultipleChoice() {
    const [options, setOptions] = useState(
        [
            'Option 1'
        ]
    );

    const addOption = () => {
        setOptions(prevOptions => [...prevOptions, `Option ${prevOptions.length + 1}`])
    }

    const deleteOption = (index) => {
        if(index === -1){
            setAddedOther(false);
        }
        setOptions(prevOptions => {
            return prevOptions.filter((_, i) => i != index);
        });
    };
    const renderOption = (option, index) => {
        return (
            <div className="option-container" key={index}>
                <span className="option-container__dropdown-option-number">{`${index+1}.`}</span>
                <input
                    type="text"
                    className="option-container__option-bar"
                    value={option}
                    onChange={(e) => {
                        setOptions((prevOptions) => {
                        const newOptions = [...prevOptions];
                        newOptions[index] = e.target.value;
                        return newOptions;
                        });
                    }}
                    />
                <span className="material-symbols-outlined" style={{ visibility: (options.length == 1 ? 'hidden' : 'visible') }} onClick={() => deleteOption(index)}>close</span>
            </div>
        );
    }
    const renderAddOption = () => {
        return <>
            <div className="option-container" key={options.length}>
            <span className="option-container__dropdown-option-number">{`${options.length+1}.`}</span>
                <div className="add-option-container">
                    <span className="add-option-container__add-option" onClick={addOption}>Add option</span>
                </div>
            </div>
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
            <div className="options-container">
                {renderOptions()}
            </div>
        </div>
    );

}