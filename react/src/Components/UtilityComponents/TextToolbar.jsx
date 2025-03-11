import './TextToolbar.css'
import MaterialIcon from '../Elements/MaterialIcon'
import FlexBox from '../Layout/FlexBox';
export default function TextToolBar (){
    return (
        <FlexBox className='text-toolbar'>
            <MaterialIcon className='icon-button' name = 'format_bold' />
            <MaterialIcon className='icon-button' name = 'format_italic' />
            <MaterialIcon className='icon-button' name = 'format_underlined' />
            <MaterialIcon className='icon-button' name = 'link' />
            <MaterialIcon className='icon-button' name = 'format_clear' />
        </FlexBox>
    );
}