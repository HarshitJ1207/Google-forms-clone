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
import getTabType from '../../Utility/GetTabType.js';

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