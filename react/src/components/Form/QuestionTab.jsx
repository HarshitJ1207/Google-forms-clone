import './Content/Content.css'
import Header from "./Header";
import Footer from "./Footer";
import { useState } from 'react';
import RatingTab from './Content/RatingTab';
import ShortAnswer from './Content/ShortAnswer';
import Paragraph from './Content/Paragraph';
import MultipleChoice from "./Content/MultipleChoice"
import DropdownTab from "./Content/DropdownTab";
import Checkbox from "./Content/Checkbox";
import TimeTab from "./Content/TimeTab";
import DateTab from "./Content/DateTab";

export default function QuestionTab(){
    const [type, setType] = useState(0);
    const headerProps = {
        value: type,
        setValue: setType
    }

    const getComponent = () => {
        switch(type) {
            case 0:
                return <ShortAnswer />;
            case 1:
                return <Paragraph />;
            case 2:
                return <MultipleChoice />;
            case 3:
                return <Checkbox />;
            case 4:
                return <DropdownTab />;
            case 7:
                return <RatingTab />;
            case 10:
                return <DateTab />;
            case 11:
                return <TimeTab />;
            default: 
                return <ShortAnswer />;
        }
    }
    console.log('tabType', type);
    return(
        <div className="form-tab">
            <Header state={headerProps}/>
            {
                getComponent()
            }
            <Footer/>
        </div>
    );
}
