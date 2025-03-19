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
import HeaderInactive from './HeaderInactive.jsx';
export default function QuestionTab({onClickCapture, tabIndex}){
    const {formData} = useContext(FormDataContext);
    const {selectedTab} = useContext(SelectedTabContext)
    const tabType = formData.formTabs[tabIndex].type;
    const getComponent = () => {
        switch(tabType) {
            case 'short-answer':
                return <ShortAnswer tabIndex = {tabIndex}/>;
            case 'paragraph':
                return <Paragraph tabIndex = {tabIndex}/>;
            case 'multiple-choice':
                return <MultipleChoice tabIndex = {tabIndex}/>;
            case 'checkbox':
                return <Checkbox tabIndex = {tabIndex}/>;
            case 'dropdown':
                return <DropdownTab tabIndex = {tabIndex}/>;
            case 'file-upload':
                return <FileUpload tabIndex = {tabIndex}/>;
            case 'linear-scale':
                return <LinearScaleTab tabIndex = {tabIndex}/>;
            case 'rating':
                return <RatingTab tabIndex = {tabIndex}/>;
            case 'multiple-choice-grid':
                return <MultipleChoiceGrid tabIndex = {tabIndex}/>;
            case 'checkbox-grid':
                return <CheckboxGrid tabIndex = {tabIndex}/>;
            case 'date':
                return <DateTab tabIndex = {tabIndex}/>;
            case 'time':
                return <TimeTab tabIndex = {tabIndex}/>;
        }
    }
    const selected = selectedTab && selectedTab[0] === tabIndex
    return (
        <div className={`form-tab ${selected ? 'form-tab--selected' : ''}`.trim()} onClickCapture = {onClickCapture}>
            {selected ? <Header tabIndex = {tabIndex} /> : <HeaderInactive tabIndex = {tabIndex}/>}
            {getComponent()}
            {selected && <Footer tabIndex = {tabIndex}/>}
        </div>
    );
}