import { createContext, useState } from "react";

const SelectedTabContext = createContext();

export function SelectedTabProvider ({children}){
    const [selectedTab, setSelectedTab] = useState(null);
    console.log('selected tab: ',selectedTab);
    return (
        <SelectedTabContext.Provider value = {{selectedTab, setSelectedTab}}>
            {children}
        </SelectedTabContext.Provider>
    );
}

export default SelectedTabContext;