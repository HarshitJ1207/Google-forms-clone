import formIcon from '/forms-icon.svg';
import Dropdown from '../dropdown/Dropdown';

function UpperLeftNavBar() {
    return (
        <div className="navbar-upper__left">
            <img src={formIcon} className="google-forms-icon" />
            <input type="text" className="form-name-textbox" defaultValue="Untitled Form" />
            <span className="material-symbols-outlined navbar-upper__icon">folder</span>
            <span className="material-symbols-outlined navbar-upper__icon">star</span>
        </div>
    );
}

function UpperRightNavBar() {
    const props = {
        trigger: <span className="material-symbols-outlined navbar-upper__icon">more_vert</span>,
        alignRight: true,
        itemList: [
            <><span className="material-symbols-outlined">content_copy</span><p>Make a copy</p></>,
            <><span className="material-symbols-outlined">delete</span><p>Move to thrash</p></>,
            <><span className="material-symbols-outlined">extension</span><p>Get Add ons</p></>,
        ]
    }
    return (
        <div className="navbar-upper__right">
            <span className="material-symbols-outlined navbar-upper__icon">palette</span>
            <span className="material-symbols-outlined navbar-upper__icon">visibility</span>
            <span className="material-symbols-outlined navbar-upper__icon">undo</span>
            <span className="material-symbols-outlined navbar-upper__icon">redo</span>
            <span className="material-symbols-outlined navbar-upper__icon">link</span>
            <span className="material-symbols-outlined navbar-upper__icon">person_add</span>
            <button className="publish-button">Publish</button>
            <Dropdown {...props}/>
            <span className="material-symbols-outlined navbar-upper__icon">account_circle</span>
        </div>
    );
}

function UpperNavBar() {
    return (
        <div className="navbar-upper">
            <UpperLeftNavBar />
            <UpperRightNavBar />
        </div>
    );
}

export default UpperNavBar;
