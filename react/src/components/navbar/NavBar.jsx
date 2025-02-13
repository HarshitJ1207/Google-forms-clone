import UpperNavBar from './UpperNavBar.jsx';
import LowerNavBar from './LowerNavBar.jsx';
import './NavBar.css';

function NavBar(){
    return (
        <div className="navbar">
            <UpperNavBar/>
            <LowerNavBar/>
        </div>
    );
};

export default NavBar;