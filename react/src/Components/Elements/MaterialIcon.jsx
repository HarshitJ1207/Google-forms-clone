import './MaterialIcon.css';

export default function MaterialIcon({ name = '', className = '', attributes = {}, handlers, options = {}, style = {} }) {
    const { variant = 'outlined', size = 'medium' } = options;

    let localClassName = '';

    switch (variant) {
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

    return <span className={localClassName} {...attributes} {...handlers} style = {style}>{name}</span>;
}
