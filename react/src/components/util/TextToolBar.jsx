import './util.css'
export default function TextToolBar (){
    return (
        <div className = 'text-toolbar'>
            <span className = 'material-symbols-outlined'>format_bold</span>
            <span className = 'material-symbols-outlined'>format_italic</span>
            <span className = 'material-symbols-outlined'>format_underlined</span>
            <span className = 'material-symbols-outlined'>link</span>
            <span className = 'material-symbols-outlined'>format_clear</span>
        </div>
    );
}