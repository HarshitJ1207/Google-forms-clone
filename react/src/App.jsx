import './App.css'
import Dropdown from './components/dropdown/Dropdown';
import NavBar from './components/navbar/NavBar';

function App() {
	return (
		<>
            <NavBar />
            <div style = {{margin: '10rem'}}>
                <Dropdown />
            </div>
		</>
	)
}

export default App
