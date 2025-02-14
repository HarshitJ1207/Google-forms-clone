import './Content/Content.css'
import Header from "./Header";
import Footer from "./Footer";
import MultipleChoice from "./Content/MultipleChoice";

export default function QuestionTab(){
    return(
        <div className="form-tab">
            <Header/>
            <MultipleChoice />
            <Footer/>
        </div>
    );
}