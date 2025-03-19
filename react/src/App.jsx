import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicPage from "./Components/Form/PublicPage";
import EditorPage from "./Components/Form/EditorPage";
import './App.css';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<EditorPage />} />
                <Route path="/public" element={<PublicPage />} />
            </Routes>
        </Router>
    );
}
export default App;
