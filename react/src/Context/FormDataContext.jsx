import React, { createContext, useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "formData"; 

const defaultFormData = {
    formName: 'New form',
    formTitle: 'New survey',
    formDescription: 'A random survey',
    formTabs: [
        {
            question: 'question 1',
            type: 'multiple-choice',
            options: ['option 1', '2nd option', '3rd option'],
            other: true,
            required: false
        },
        { question: '2nd question', type: 'short-answer', required:false},
        { question: 'date of submission', type: 'date', required:false}
    ]
};

const FormDataContext = createContext(null);

export function FormDataProvider({ children }) {
    const [formData, setFormData] = useState(() => {
        const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
        return savedData ? JSON.parse(savedData) : defaultFormData;
        // return defaultFormData;
    });

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
        };

        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => window.removeEventListener("beforeunload", handleBeforeUnload);
    }, [formData]); 

    console.log('root', formData);

    return (
        <FormDataContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormDataContext.Provider>
    );
}

export default FormDataContext;
