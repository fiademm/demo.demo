import React, { useState } from 'react';

const ErrorBoundary = ({ children }) => {
    const [errorEncountered, setErrorEncountered] = useState(false);

    const handleOnError = () => {
        setErrorEncountered(true);
    };

    if(errorEncountered) {
        return <div>Oops! Something went wrong.</div>
    }

    return(
        <div onError={handleOnError}>
            {children}
        </div>
    );
}

export default ErrorBoundary;