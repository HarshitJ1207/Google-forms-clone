import './MaterialIcon.css';

export default function MaterialIcon({ name = '', className = '', attributes = {}, view = 'outlined', size = 'medium', onClick = () => {}}) {
    let localClassName = '';

    switch (view) {
        case 'outlined':
            localClassName += 'material-symbols-outlined ';
            break;
        case 'filled':
            localClassName += 'material-icons ';
            break;
        default:
            localClassName += 'material-symbols-outlined ';
    }

    localClassName += `icon-${size} ${className}`.trim();

    return <span className={localClassName} {...attributes} onClick={onClick}>{name}</span>;
}

MaterialIcon.VIEW = {
    OUTLINED: 'outlined',
    FILLED: 'filled'
}

MaterialIcon.SIZE = {
    XL: 'XL',
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small',
    XS: 'xs'
}