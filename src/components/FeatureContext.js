import React, { useState, createContext } from 'react';

export const FeatureContext = createContext();

export const FeatureProvider = props => {
    const [feature, setFeature] = useState({});
    const [elaMethod, setElaMethod] = useState(null);
    const [elaURL, setElaURL] = useState(null);
    const [elaFeature, setElaFeature] = useState({});


    return <FeatureContext.Provider 
        value={{ 
            feature: [feature, setFeature], 
            elaMethod: [elaMethod, setElaMethod], 
            elaURL: [elaURL, setElaURL], 
            elaFeature: [elaFeature, setElaFeature]
        }}> 
            {props.children} 
        </FeatureContext.Provider>
}



