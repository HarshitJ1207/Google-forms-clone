import './Button.css';

export default function Button ({children, style = {}, className = '', handlers = {}, options = {variant: 'default'}}){
    const {variant} = options;
    const localClassName = `${variant}-button ${className}`.trim();
    return (
        <>
            <button className={localClassName} style={style} {...handlers}>{children}</button>
        </>
    );
}