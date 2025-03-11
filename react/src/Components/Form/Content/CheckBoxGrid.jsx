import { useState } from 'react';
import FlexBox from '../../Layout/FlexBox';
import MaterialIcon  from '../../Elements/MaterialIcon';
import Input from '../../Elements/Input';
import './MultipleChoiceGrid.css';
import './MultipleChoice.css';
export default function CheckboxGrid() {
    const [rows, setRows] = useState(['Row 1']);
    const [columns, setColumns] = useState(['Column 1']);
    
    const renderOption = (option, index, type) => {
        const options = type === 'rows' ? rows: columns;
        const inputProps = {
            className: "option-container__option-bar",
            attributes: {
                value: option
            },
            handlers:{ 
                onChange: (e) => {
                    if(type === 'rows'){
                        setRows((prevOptions) => {
                            const newOptions = [...prevOptions];
                            newOptions[index] = e.target.value;
                            return newOptions;
                        });
                    }
                    else {
                        setColumns((prevOptions) => {
                            const newOptions = [...prevOptions];
                            newOptions[index] = e.target.value;
                            return newOptions;
                        });
                    }
                }
            },
            options: {
                variant: 'borderless'
            }
        }
        return (
            <FlexBox key={index} className="option-container">
                {type === 'rows' ? 
                    <span className="option-container__dropdown-option-number">{`${index+1}.`}</span>:
                    <MaterialIcon name = 'check_box_outline_blank' />
                }
                <Input {...inputProps}/>
                <MaterialIcon className = 'option-container__image-icon' style={{ visibility: (options.length == 1 ? 'hidden' : 'visible') }} handlers = {{onClick: () => deleteOption(index, type)}} name = 'close'/>
            </FlexBox>
        );
    }

    const addOption = (type) => {
        if(type === 'rows') setRows(prevOptions => [...prevOptions, `Row ${prevOptions.length + 1}`]);
        else setColumns(prevOptions => [...prevOptions, `Column ${prevOptions.length + 1}`]);
    }

    const deleteOption = (index, type) => {
        if(type === 'rows'){
            setRows(prevOptions => {
                return prevOptions.filter((_, i) => i != index);
            });
        }
        else {
            setColumns(prevOptions => {
                return prevOptions.filter((_, i) => i != index);
            });  
        }

    };

    const renderAddOption = (type) => {
        const options = type === 'rows' ? rows: columns;
        return (
            <FlexBox key={options.length} className="option-container">
                {type === 'rows' ? 
                    <span className="option-container__dropdown-option-number">{`${options.length + 1}.`}</span>:
                    <MaterialIcon name = 'check_box_outline_blank' />
                }
                <div className="add-option-container">
                    <span className="add-option-container__add-option" onClick = {() => addOption(type)}>Add option</span>
                </div>
            </FlexBox>
        );
    }

    const renderOptions = (type) => {
        return (
            <>
                {
                    type === 'rows' ? 
                        rows.map((option, index) => renderOption(option, index, type)):
                        columns.map((option, index) => renderOption(option, index, type))
                }
                {
                    renderAddOption(type)
                }
            </>
        );
    }

    return (
        <div className='tab-content'>
            <FlexBox align='start'>
                <FlexBox direction='column' align='stretch' className='multiple-choice-grid-subsection'>
                    <p className='multiple-choice-grid-subsection__header'>Rows</p>
                    {renderOptions('rows')}
                </FlexBox>
                <FlexBox direction='column' align='stretch' className='multiple-choice-grid-subsection'>
                    <p className='multiple-choice-grid-subsection__header'>Columns</p>
                    {renderOptions('columns')}
                </FlexBox>
            </FlexBox>
        </div>
    );
}