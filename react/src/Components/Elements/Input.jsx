import './Input.css';

// options: {
//     size:  xl:2rem || large: 1.25rem || medium:1rem  || small:0.875 || xs: 0.6rem
//     variant: outlined | borderless | filled | underlined
// }

export default function Input({ handlers = {}, style = {}, className = '', attributes = {}, options = {} }) {
    const { size = 'medium', variant = 'underlined' , disabled = false, readOnly = false} = options;
    const localClassName = `input input-${size} input-${variant} ${className}`.trim();
    return (
        <input className={localClassName} style={style} {...handlers} {...attributes} disabled={disabled} readOnly = {readOnly}/>
    );
}
