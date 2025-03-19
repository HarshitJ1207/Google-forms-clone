import { FormDataProvider } from "../../Context/FormDataContext";
import { SelectedTabProvider } from "../../Context/SelectedTabContext";
import Navbar from "../Navbar/Navbar";
import Form from "./Form";
export default function EditorPage() {
    return (
        <FormDataProvider>
            <Navbar/>
            <SelectedTabProvider>
                <Form /> 
            </SelectedTabProvider>
        </FormDataProvider>
    );
}