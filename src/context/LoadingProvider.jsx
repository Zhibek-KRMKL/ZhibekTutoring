import React, { createContext, useState } from "react";

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const startLoading = () => {
        setLoading(true);
    }

    const stopLoading = () => {
        setLoading(false);
        alert("I stopped fetching, yay!")
    }

    return (
        <LoadingContext.Provider value={{ loading, startLoading, stopLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

export { LoadingContext, LoadingProvider };