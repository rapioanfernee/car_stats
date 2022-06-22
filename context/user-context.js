import React, { useState, useContext } from 'react'

const UserContext = React.createContext();

export const useUser = () => {
    return useContext(UserContext)
}

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});

    const userValues = {
        currentUser,
        setCurrentUser
    }

    return <UserContext.Provider value={userValues}>
        {children}
    </UserContext.Provider>
}