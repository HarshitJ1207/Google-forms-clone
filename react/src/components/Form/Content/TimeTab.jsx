import MaterialIcon from '../../Elements/MaterialIcon';
import Input from '../../Elements/Input';
import FlexBox from '../../Layout/FlexBox';
import './DateTime.css';
export default function TimeTab(){
    const inputProps = {
        options: {
            readOnly: true,
            variant: 'borderless'
        },
        attributes: {
            value: 'Time'
        },
        className: 'tab-content__time-bar'

    }
    return (
        <FlexBox className="tab-content time-tab-container">
             <Input {...inputProps}/>
            <MaterialIcon name = 'schedule'/>
        </FlexBox>
    );
}