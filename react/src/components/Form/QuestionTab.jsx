import Header from './Header.jsx';
import Footer from './Footer.jsx';

import { useState } from 'react';

import './Content/Content.css'
import RatingTab from './Content/RatingTab';
import ShortAnswer from './Content/ShortAnswer';
import Paragraph from './Content/Paragraph';
import MultipleChoice from "./Content/MultipleChoice"
import DropdownTab from "./Content/DropdownTab";
import Checkbox from "./Content/Checkbox";
import TimeTab from "./Content/TimeTab";
import DateTab from "./Content/DateTab.jsx";

export default function QuestionTab(){
    const [tabType, setTabType] = useState(0);
    const getComponent = () => {
        switch(tabType) {
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
    return (
        <div className='form-tab'>
            <Header tabState = {[tabType, setTabType]} />
            {getComponent()}
            <Footer />
        </div>
    );
}