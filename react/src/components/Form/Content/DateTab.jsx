import Input from '../../Elements/Input';
import MaterialIcon from '../../Elements/MaterialIcon';
import FlexBox from '../../Layout/FlexBox';
import './DateTime.css';
export default function DateTab(){
    const inputProps = {
        options: {
            readOnly: true,
            variant: 'borderless'
        },
        attributes: {
            value: 'Month, day, year'
        },
        className: 'tab-content__date-bar'

    }
    return (
        <FlexBox className="tab-content date-tab-container">
            <Input {...inputProps}/>
            <MaterialIcon name = 'event' />
        </FlexBox>
    );
}