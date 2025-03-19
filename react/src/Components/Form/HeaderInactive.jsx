import './Header.css';
import { useContext} from "react";
import FormDataContext from '../../Context/FormDataContext.jsx';
export default function Header({tabIndex}) {
    const {formData, setFormData} = useContext(FormDataContext);
    const question = formData.formTabs[tabIndex].question || 'Question';
    return (
        <div className="tab-header-inactive">
            <div>
                {question}
            </div>
        </div>
    );
};
