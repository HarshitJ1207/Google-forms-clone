import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Form from './Components/Form/Form';
import { FormDataProvider } from './Context/FormDataContext';
import {SelectedTabProvider} from './Context/SelectedTabContext'
// import TestComponent from './Components/TestComponents'

export default function App(){    
    return (
        <FormDataProvider>
            <Navbar/>
            <SelectedTabProvider>
                <Form /> 
            </SelectedTabProvider>
        </FormDataProvider>
        // <TestComponent />   
    );
}

