import { useState } from "react";

export default function MultipleChoice() {
    const [options, setOptions] = useState(
        [
            'Option 1'
        ]
    );

    const [addedOther, setAddedOther] = useState(false);

    console.log(options);
    const addOption = () => {
        setOptions(prevOptions => [...prevOptions, `Option ${prevOptions.length + 1}`])
    }

    const deleteOption = (index) => {
        if(index === -1){
            setAddedOther(false);
        }
        setOptions(prevOptions => {
            console.log(prevOptions[index]);
            return prevOptions.filter((_, i) => i != index);
        });
    };
    const renderOption = (option, index) => {
        return (
            <div className="option-container" key={index}>
                <span className="material-symbols-outlined">radio_button_unchecked</span>
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

                <span className="material-symbols-outlined option-container__image-icon">
                    image
                </span>
                <span className="material-symbols-outlined" style={{ visibility: (options.length == 1 ? 'hidden' : 'visible') }} onClick={() => deleteOption(index)}>close</span>
            </div>
        );
    }
    const renderAddOption = () => {
        if(!addedOther){
            return (
                <div className="option-container" key={options.length}>
                    <span className="material-symbols-outlined">radio_button_unchecked</span>
                    <div className="add-option-container">
                        <span className="add-option-container__add-option" onClick={addOption}>Add option</span>
                        or
                        <span className="add-option-container__add-other" onClick={() => setAddedOther(true)}>add "Other"</span>
                    </div>
                </div>
            );
        }
        else {
            return <>
                <div className="option-container" key={options.length}>
                    <span className="material-symbols-outlined">radio_button_unchecked</span>
                    <span className="option-container__other-option">Other...</span>
                    <span className="material-symbols-outlined" onClick={() => deleteOption(-1)}>close</span>
                </div>
                <div className="option-container" key={options.length+1}>
                    <span className="material-symbols-outlined">radio_button_unchecked</span>
                    <div className="add-option-container">
                        <span className="add-option-container__add-option" onClick={addOption}>Add option</span>
                    </div>
                </div>
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
            <div className="options-container">
                {renderOptions()}
            </div>
        </div>
    );

}