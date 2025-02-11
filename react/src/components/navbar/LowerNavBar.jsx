function UpperNavBar(){
    return (  
        <div class = 'navbar-lower'>
            <button className = 'navbar-lower__button navbar-lower__button--selected'>Questions</button>
            <button className = 'navbar-lower__button'>Responses</button>
            <button className = 'navbar-lower__button'>Settings</button>
        </div>
    );
};

export default UpperNavBar;