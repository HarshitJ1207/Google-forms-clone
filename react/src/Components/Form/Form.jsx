import QuestionTab from './QuestionTab';
import './Form.css'
import TitleTab from "./TitleTab";
import FlexBox from '../Layout/FlexBox';
export default function Form (){
    const flexboxProps = {
        direction: 'column',
        style: {
            marginTop: '2.5rem',
            fontSize: '0.9rem'
        }
    }
    return (
        <FlexBox {...flexboxProps}>
            <TitleTab />
            <QuestionTab />
        </FlexBox>
    );
}