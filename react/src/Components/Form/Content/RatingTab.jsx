import { useState } from "react";
import Select from "../../Elements/Select";
import './RatingTab.css'
import FlexBox from "../../Layout/FlexBox";

export default function RatingTab() {
    const [count, setCount] = useState(2);
    const [symbol , setSymbol] = useState(0);
    const symbols = ['grade', 'favorite', 'thumb_up'];
    const props1 = {
        options: {
            syncState: [count, setCount]
        }
    }
    const props2 = {
        options: {
            syncState: [symbol, setSymbol]
        }
    }
    return (
        <div className='tab-content'>
            <FlexBox align="stretch">
                <Select {...props1}>
                    <p className="rating-tab__dropdown-item">3</p>
                    <p className="rating-tab__dropdown-item">4</p>
                    <p className="rating-tab__dropdown-item">5</p>
                    <p className="rating-tab__dropdown-item">6</p>
                    <p className="rating-tab__dropdown-item">7</p>
                    <p className="rating-tab__dropdown-item">8</p>
                </Select>
                <Select {...props2}>
                    <span className="material-icons grade-icon rating-tab__dropdown-item">grade</span>
                    <span className="material-icons favorite-icon rating-tab__dropdown-item">favorite</span>
                    <span className="material-icons thumb_up-icon rating-tab__dropdown-item">thumb_up</span>
                </Select>
            </FlexBox>
            <FlexBox justify="space-around">
                {[...Array(count + 3)].map((_, index) => <p key={index}>{index + 1}</p>)}
            </FlexBox>
            <FlexBox justify="space-around">
                {[...Array(count + 3)].map((_, index) => <span key={index} className="material-symbols-outlined">{symbols[symbol]}</span>)}
            </FlexBox>
        </div>
    );
}