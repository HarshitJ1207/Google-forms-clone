import formIcon from '/forms-icon.svg';

function UpperLeftNavBar() {
    return (
        <div className="navbar-upper__left">
            <img src={formIcon} className="google-forms-icon" />
            <input type="text" className="form-name-textbox" value="Untitled Form" />
            <span className="material-symbols-outlined navbar-upper__icon">folder</span>
            <span className="material-symbols-outlined navbar-upper__icon">star</span>
        </div>
    );
}

function UpperRightNavBar() {
    return (
        <div className="navbar-upper__right">
            <span className="material-symbols-outlined navbar-upper__icon">palette</span>
            <span className="material-symbols-outlined navbar-upper__icon">visibility</span>
            <span className="material-symbols-outlined navbar-upper__icon">undo</span>
            <span className="material-symbols-outlined navbar-upper__icon">redo</span>
            <span className="material-symbols-outlined navbar-upper__icon">link</span>
            <span className="material-symbols-outlined navbar-upper__icon">person_add</span>
            <button className="publish-button">Publish</button>
            <span className="material-symbols-outlined navbar-upper__icon">more_vert</span>
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
