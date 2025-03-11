import './TextToolbar.css'
import MaterialIcon from '../Elements/MaterialIcon'
export default function TextToolBar (){
    return (
        <div className = 'text-toolbar'>
            <MaterialIcon className='icon-button' name = 'format_bold' />
            <MaterialIcon className='icon-button' name = 'format_italic' />
            <MaterialIcon className='icon-button' name = 'format_underlined' />
            <MaterialIcon className='icon-button' name = 'link' />
            <MaterialIcon className='icon-button' name = 'format_clear' />
        </div>
    );
}