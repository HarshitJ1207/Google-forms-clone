import './Input.css';

// options: {
//     size:  xl:2rem || large: 1.25rem || medium:1rem  || small:0.875 || xs: 0.6rem
//     view: outlined | borderless | filled | underlined
// }


export default function Input({className = '', attributes = {}, options = {}, onFocus, onBlur, onChange }) {
    const { size = 'medium', view = 'underlined' , disabled = false, readOnly = false} = options;
    const localClassName = `input input-${size} input-${view} ${className}`.trim();
    return (
        <input className={localClassName} {...attributes} onFocus={onFocus} onBlur = {onBlur} onChange = {onChange} disabled={disabled} readOnly = {readOnly}/>
    );
}

Input.SIZE = {
    XL: 'xl',
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small',
    XS: 'xs'
}

Input.VIEW = {
    OUTLINED: 'outlined',
    UNDERLINED: 'underlined',
    FILLED: 'filled',
    BORDERLESS: 'borderless',
}
