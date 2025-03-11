import './ShortAnswer.css';
import Input from '../../Elements/Input';

export default function ShortAnswer (){
    return (
        <div className="tab-content">
            <Input className = 'tab-content__short-answer-bar' attributes = {{value: 'Short answer text'}} options = {{readOnly: true}} />
        </div>
    );
}