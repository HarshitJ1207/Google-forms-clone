import './ShortAnswer.css';
import Input from "../../Elements/Input";
export default function Paragraph (){

    return (
        <div className="tab-content">
            <Input className = 'tab-content__long-answer-bar' attributes = {{value: 'Long answer text'}} options = {{readOnly: true}} />
        </div>
    );
}