import { useState } from "react";
import Dropdown from "../../util/Dropdown";

export default function RatingTab() {
    const [count, setCount] = useState(2);
    const [symbol , setSymbol] = useState(0);
    const symbols = ['grade', 'favorite', 'thumb_up'];
    console.log(count);
    console.log(symbol);
    const props1 = {
        trigger: (children) => <div className='tab__rating-dropdown'>{children}</div>,
        alignRight: false,
        itemList: [
            <p>3</p>,
            <p>4</p>,
            <p>5</p>,
            <p>6</p>,
            <p>7</p>,
            <p>8</p>,
        ],
        fillContent: true,
        manageState: true,
        initialState: 2,
        state: {
            value: count,
            setValue: setCount
        }
    }
    const props2 = {
        trigger: (children) => <div className='tab__rating-dropdown'>{children}</div>,
        alignRight: false,
        itemList: [
            <span className="material-icons grade-icon">grade</span>,
            <span className="material-icons favorite-icon">favorite</span>,
            <span className="material-icons thumb_up-icon">thumb_up</span>
        ],
        fillContent: true,
        manageState: true,
        initalState: 2,
        state: {
            value: symbol,
            setValue: setSymbol
        }
    }
    return (
        <div className='tab-content'>
            <div className="rating-tab-dropdown-container">
                <Dropdown {...props1}></Dropdown>
                <Dropdown {...props2}></Dropdown>
            </div>
            <div className="rating-container">
                {[...Array(count + 3)].map((_, index) => <p key={index}>{index + 1}</p>)}
            </div>
            <div className="rating-container">
                {[...Array(count + 3)].map((_, index) => <span key={index} className="material-symbols-outlined">{symbols[symbol]}</span>)}
            </div>
        </div>
    );
}