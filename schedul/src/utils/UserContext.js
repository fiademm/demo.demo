import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const userId = '0000000278';
    const userRole = 'Manager';
    const userName = 'Schedul Manager';

    const [user, setUser] = useState({
        id: userId,
        role: userRole,
        userName: userName,
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}