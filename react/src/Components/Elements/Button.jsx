import './Button.css';

export default function Button ({children, className = '', onClick, options = {view: 'default'}}){
    const {view} = options;
    const localClassName = `${view}-button ${className}`.trim();
    return (
        <>
            <button className={localClassName}  onClick={onClick}>{children}</button>
        </>
    );
}

const VIEW = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
}

Button.VIEW = VIEW;

// nomenclature
// put all classes in a single css file or use module based classes
// remove style from components
// use prop types