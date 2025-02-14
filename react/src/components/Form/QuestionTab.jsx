import './Content/Content.css'
import Header from "./Header";
import Footer from "./Footer";
import DropdownTab from "./Content/DropdownTab"

export default function QuestionTab(){
    return(
        <div className="form-tab">
            <Header/>
            <DropdownTab />
            <Footer/>
        </div>
    );
}