import './Content/Content.css'
import Header from "./Header";
import Footer from "./Footer";
import RatingTab from './Content/RatingTab';

export default function QuestionTab(){
    return(
        <div className="form-tab">
            <Header/>
            <RatingTab />
            <Footer/>
        </div>
    );
}