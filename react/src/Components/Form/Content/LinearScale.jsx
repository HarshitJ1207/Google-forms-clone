import './RatingTab.css';
import Dropdown from "../../Elements/Dropdown";
import FlexBox from "../../Layout/FlexBox";
import Input from '../../Elements/Input';
import { useContext } from 'react';
import FormDataContext from '../../../Context/FormDataContext';
import Button from '../../Elements/Button';
import MaterialIcon from '../../Elements/MaterialIcon';



export default function LinearScaleTab({tabIndex}){
    // const [minValue, setMinValue] = useState(0);
    // const [maxValue, setMaxValue]this.key= useState(8);
    // const [minValueLabel, setMinValueLabel] = useState('');
    // const [maxValueLabel, setMaxValueLthis.keybel] = useState('');
    const {formData, setFormData} = useContext(FormDataContext);
    const minValue = formData.formTabs[tabIndex].minValue;
    const maxValue = formData.formTabs[tabIndex].maxValue;
    const minValueLabel = formData.formTabs[tabIndex].minValueLabel;
    const maxValueLabel = formData.formTabs[tabIndex].maxValueLabel;
    const setMinValue = (val) => setFormData(prev => {
        const next = structuredClone(prev);
        next.formTabs[tabIndex].minValue = val;
        return next;
    });
    const setMaxValue = (val) => setFormData(prev => {
        const next = structuredClone(prev);
        next.formTabs[tabIndex].maxValue = val;
        return next;
    });
    const setMinValueLabel = (val) => setFormData(prev => {
        const next = structuredClone(prev);
        next.formTabs[tabIndex].minValueLabel = val;
        return next;
    });
    const setMaxValueLabel = (val) => setFormData(prev => {
        const next = structuredClone(prev);
        next.formTabs[tabIndex].maxValueLabel = val;
        return next;
    });

    const props1 = {
        menu: [
            {
                key: 0,
                label: <p className='linear-scale-tab__dropdown-item'>0</p>,
                onClick(){setMinValue(this.key);}
            },
            {
                key: 1,
                label: <p className='linear-scale-tab__dropdown-item'>1</p>,
                onClick(){setMinValue(this.key);}
            },
        ],
        selectedKeys: [minValue]
    }
    const props2 = {
        menu: [
            {
                key: 2,
                label: <p className='linear-scale-tab__dropdown-item'>2</p>,
                onClick(){setMaxValue(this.key);}
            },
            {
                key: 3,
                label: <p className='linear-scale-tab__dropdown-item'>3</p>,
                onClick(){setMaxValue(this.key);}
            },
            {
                key: 4,
                label: <p className='linear-scale-tab__dropdown-item'>4</p>,
                onClick(){setMaxValue(this.key);}
            },
            {
                key: 5,
                label: <p className='linear-scale-tab__dropdown-item'>5</p>,
                onClick(){setMaxValue(this.key);}
            },
            {
                key: 6,
                label: <p className='linear-scale-tab__dropdown-item'>6</p>,
                onClick(){setMaxValue(this.key);}
            },
            {
                key: 7,
                label: <p className='linear-scale-tab__dropdown-item'>7</p>,
                onClick(){setMaxValue(this.key);}
            },
            {
                key: 8,
                label: <p className='linear-scale-tab__dropdown-item'>8</p>,
                onClick(){setMaxValue(this.key);}
            },
            {
                key: 9,
                label: <p className='linear-scale-tab__dropdown-item'>9</p>,
                onClick(){setMaxValue(this.key);}
            },
            {
                key: 10,
                label: <p className='linear-scale-tab__dropdown-item'>10</p>,
                onClick(){setMaxValue(this.key);}
            },
        ],
        selectedKeys: [maxValue]
    }

    const inputProps1 = {
        attributes: {
            placeholder: 'Label (optional)',
            value: minValueLabel
        },
        className: 'linear-scale-tab__label-bar',
        onChange: (e) => setMinValueLabel(e.target.value)
    }

    const inputProps2 = {
        attributes: {
            placeholder: 'Label (optional)',
            value: maxValueLabel
        },
        className: 'linear-scale-tab__label-bar',
        onChange: (e) => setMaxValueLabel(e.target.value)
    }
    return (
        <div className='tab-content'>
            <FlexBox align="stretch">
                <Dropdown {...props1}>
                     <Button view = {Button.VIEW.DEFAULT} className="linear-scale-tab__dropdown">
                        <FlexBox gap = '0'>
                            {props1.menu.find(ele => ele.key === minValue).label}
                            <MaterialIcon name = 'arrow_drop_down' className='dropdown-arrow'/>
                        </FlexBox>
                    </Button>
                </Dropdown>
                <Dropdown {...props2}>
                <Button view = {Button.VIEW.DEFAULT} className="linear-scale-tab__dropdown">
                        <FlexBox gap = '0'>
                            {props2.menu.find(ele => ele.key === maxValue).label}
                            <MaterialIcon name = 'arrow_drop_down' className='dropdown-arrow'/>
                        </FlexBox>
                    </Button>
                </Dropdown>
            </FlexBox>
            <FlexBox direction='column' gap='2rem' align='start' className='linear-scale-tab__section-two'>
                <FlexBox>
                    <span className={minValueLabel === '' ? 'linear-scale-tab__label-span linear-scale-tab__label-span--empty' : 'linear-scale-tab__label-span'}>{minValue}</span>
                    <Input {...inputProps1}/>
                </FlexBox>
                <FlexBox>
                    <span className={maxValueLabel === '' ? 'linear-scale-tab__label-span linear-scale-tab__label-span--empty' : 'linear-scale-tab__label-span'}>{maxValue}</span>
                    <Input {...inputProps2}/>
                </FlexBox>
            </FlexBox>
        </div>
    );
}