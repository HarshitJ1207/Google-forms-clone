import './RatingTab.css';
import Dropdown from "../../Elements/Dropdown";
import FlexBox from "../../Layout/FlexBox";
import Input from '../../Elements/Input';
import { useState } from 'react';


export default function LinearScaleTab(){
    const [startValue, setStartValue] = useState(0);
    const [endValue, setEndValue] = useState(8);
    const [startLabelVal, setStartLabelVal] = useState('');
    const [endLabelVal, setEndLabelVal] = useState('');
    const props1 = {
        className: 'linear-scale-tab__dropdown',
        options:{
            syncState: [startValue, setStartValue]
        }
    }
    const props2 = {
        className: 'linear-scale-tab__dropdown',
        options:{
            syncState: [endValue, setEndValue]
        }
    }

    const inputProps1 = {
        attributes: {
            placeholder: 'Label (optional)',
            value: startLabelVal
        },
        className: 'linear-scale-tab__label-bar',
        onChange: (e) => setStartLabelVal(e.target.value)
    }

    const inputProps2 = {
        attributes: {
            placeholder: 'Label (optional)',
            value: endLabelVal
        },
        className: 'linear-scale-tab__label-bar',
        onChange: (e) => setEndLabelVal(e.target.value)
    }
    return (
        <div className='tab-content'>
            <FlexBox align="stretch">
                <Dropdown {...props1}>
                    <p className='linear-scale-tab__dropdown-item'>0</p>
                    <p className='linear-scale-tab__dropdown-item'>1</p>
                </Dropdown>
                <Dropdown {...props2}>
                    <p className='linear-scale-tab__dropdown-item'>2</p>
                    <p className='linear-scale-tab__dropdown-item'>3</p>
                    <p className='linear-scale-tab__dropdown-item'>4</p>
                    <p className='linear-scale-tab__dropdown-item'>5</p>
                    <p className='linear-scale-tab__dropdown-item'>6</p>
                    <p className='linear-scale-tab__dropdown-item'>7</p>
                    <p className='linear-scale-tab__dropdown-item'>8</p>
                    <p className='linear-scale-tab__dropdown-item'>9</p>
                    <p className='linear-scale-tab__dropdown-item'>10</p>
                </Dropdown>
            </FlexBox>
            <FlexBox direction='column' gap='2rem' align='start' className='linear-scale-tab__section-two'>
                <FlexBox>
                    <span className={startLabelVal === '' ? 'linear-scale-tab__label-span--empty' : 'linear-scale-tab__label-span'}>{startValue}</span>
                    <Input {...inputProps1}/>
                </FlexBox>
                <FlexBox>
                    <span className={startLabelVal === '' ? 'linear-scale-tab__label-span--empty' : 'linear-scale-tab__label-span'}>{endValue + 2}</span>
                    <Input {...inputProps2}/>
                </FlexBox>
            </FlexBox>
        </div>
    );
}