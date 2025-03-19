import Header from './Header.jsx';
import Footer from './Footer.jsx';

import { useContext } from 'react';

import RatingTab from './Content/RatingTab';
import ShortAnswer from './Content/ShortAnswer';
import Paragraph from './Content/Paragraph';
import MultipleChoice from "./Content/MultipleChoice"
import DropdownTab from "./Content/DropdownTab";
import Checkbox from "./Content/Checkbox";
import TimeTab from "./Content/TimeTab";
import DateTab from "./Content/DateTab.jsx";
import LinearScaleTab from "./Content/LinearScale.jsx";
import MultipleChoiceGrid from './Content/MultipleChoiceGrid';
import CheckboxGrid from './Content/CheckboxGrid';
import FileUpload from './Content/FileUpload.jsx';
import FormDataContext from '../../Context/FormDataContext.jsx';
import SelectedTabContext from '../../Context/SelectedTabContext.jsx';

const getTabType = (ix) => {
    switch (ix){
        case 'short-answer': return 0;
        case 'paragraph': return 1;
        case 'multiple-choice': return 2;
        case 'checkbox': return 3;
        case 'dropdown': return 4;
        case 'file-upload': return 5;
        case 'linear-scale': return 6;
        case 'rating': return 7;
        case 'multiple-choice-grid': return 8;
        case 'checkbox-grid': return 9;
        case 'date': return 10;
        case 'time': return 11;
        case 0: return 'short-answer';
        case 1: return 'paragraph';
        case 2: return 'multiple-choice';
        case 3: return 'checkbox';
        case 4: return 'dropdown';
        case 5: return 'file-upload';
        case 6: return 'linear-scale';
        case 7: return 'rating';
        case 8: return 'multiple-choice-grid';
        case 9: return 'checkbox-grid';
        case 10: return 'date';
        case 11: return 'time';
    } 
}

export default function QuestionTab({onClickCapture, tabIndex}){
    const {selectedTab} = useContext(SelectedTabContext);
    const { formData } = useContext(FormDataContext);

    const tabType = getTabType(formData.formTabs[tabIndex].type);
    const getComponent = () => {
        switch(tabType) {
            case 0:
                return <ShortAnswer tabIndex = {tabIndex}/>;
            case 1:
                return <Paragraph tabIndex = {tabIndex}/>;
            case 2:
                return <MultipleChoice tabIndex = {tabIndex}/>;
            case 3:
                return <Checkbox tabIndex = {tabIndex}/>;
            case 4:
                return <DropdownTab tabIndex = {tabIndex}/>;
            case 5:
                return <FileUpload tabIndex = {tabIndex}/>;
            case 6:
                return <LinearScaleTab tabIndex = {tabIndex}/>;
            case 7:
                return <RatingTab tabIndex = {tabIndex}/>;
            case 8:
                return <MultipleChoiceGrid tabIndex = {tabIndex}/>;
            case 9:
                return <CheckboxGrid tabIndex = {tabIndex}/>;
            case 10:
                return <DateTab tabIndex = {tabIndex}/>;
            case 11:
                return <TimeTab tabIndex = {tabIndex}/>;
        }
    }
    if(selectedTab && selectedTab[0] === tabIndex + 1) return (
        <div className='form-tab form-tab--selected' onClickCapture = {onClickCapture}>
            <Header tabIndex = {tabIndex} />
            {getComponent()}
            <Footer />
        </div>
    );
    else return (
        <div className='form-tab' onClickCapture = {onClickCapture}>
            <Header tabIndex = {tabIndex} />
            {getComponent()}
            <Footer />
        </div>
    );
}