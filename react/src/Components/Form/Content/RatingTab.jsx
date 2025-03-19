import { useContext } from "react";
import Dropdown from "../../Elements/Dropdown";
import './RatingTab.css';
import FlexBox from "../../Layout/FlexBox";
import Button from '../../Elements/Button';
import MaterialIcon from '../../Elements/MaterialIcon';
import FormDataContext from '../../../Context/FormDataContext'
export default function RatingTab({tabIndex}) {
    // const [count, setCount] = useState(5);
    // const [symbol , setSymbol] = useState('grade');
    const {formData, setFormData} = useContext(FormDataContext);
    const count = formData.formTabs[tabIndex].count;
    const setCount = (val) => setFormData(prev => {
        const next = structuredClone(prev);
        next.formTabs[tabIndex].count = val;
        return next;
    })
    const symbol = formData.formTabs[tabIndex].symbol;
    const setSymbol = (val) => setFormData(prev => {
        const next = structuredClone(prev);
        next.formTabs[tabIndex].symbol = val;
        return next;
    })
    const props1 = {
        menu:[
            {
                key: 3,
                label:<p className="rating-tab__dropdown-item">3</p>,
                onClick(){setCount(this.key);},
            },
            {
                key: 4,
                label:<p className="rating-tab__dropdown-item">4</p>,
                onClick(){setCount(this.key);},
            },
            {
                key: 5,
                label:<p className="rating-tab__dropdown-item">5</p>,
                onClick(){setCount(this.key);},
            },
            {
                key: 6,
                label:<p className="rating-tab__dropdown-item">6</p>,
                onClick(){setCount(this.key);},
            },
            {
                key: 7,
                label:<p className="rating-tab__dropdown-item">7</p>,
                onClick(){setCount(this.key);},
            },
            {
                key: 8,
                label:<p className="rating-tab__dropdown-item">8</p>,
                onClick(){setCount(this.key);},
            },
        ],
        selectedKeys: [count]
    }
    const props2 = {
        menu: [
            {
                key: 'grade',
                label: <span className="material-icons grade-icon rating-tab__dropdown-item">grade</span>,
                onClick(){setSymbol(this.key);},
            },
            {
                key: 'favorite',
                label: <span className="material-icons favorite-icon rating-tab__dropdown-item">favorite</span>,
                onClick(){setSymbol(this.key);}
            },
            {
                key: 'thumb_up',
                label: <span className="material-icons thumb_up-icon rating-tab__dropdown-item">thumb_up</span>,
                onClick(){setSymbol(this.key);}
            },
        ],
        selectedKeys: [symbol]
    }
    return (
        <div className='tab-content'>
            <FlexBox align="stretch">
                <Dropdown {...props1}>
                    <Button view = {Button.VIEW.DEFAULT} className="rating-tab__dropdown-button">
                        <FlexBox>
                            {props1.menu.find(ele => ele.key === count).label}
                            <MaterialIcon name = 'arrow_drop_down' className='dropdown-arrow'/>
                        </FlexBox>
                    </Button>
                </Dropdown>
                <Dropdown {...props2}>
                    <Button view = {Button.VIEW.DEFAULT} className="rating-tab__dropdown-button">
                        <FlexBox>
                            {props2.menu.find(ele => ele.key === symbol).label}
                            <MaterialIcon name = 'arrow_drop_down' className='dropdown-arrow'/>
                        </FlexBox>
                    </Button>
                </Dropdown>
            </FlexBox>
            <div style={{marginTop: '2rem'}}>
                <FlexBox justify="space-around">
                    {[...Array(count)].map((_, index) => <p key={index}>{index + 1}</p>)}
                </FlexBox>
                <FlexBox justify="space-around">
                    {[...Array(count)].map((_, index) => <span key={index} className="material-symbols-outlined">{symbol}</span>)}
                </FlexBox>
            </div>
        </div>
    );
}