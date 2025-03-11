import './Navbar.css'
import UpperNavbar from './UpperNavbar.jsx';
import LowerNavbar from './LowerNavbar.jsx';

export default function Navbar(){
    return (
        <nav className = 'navbar'>
            <UpperNavbar />
            <LowerNavbar />
        </nav>
    );
}