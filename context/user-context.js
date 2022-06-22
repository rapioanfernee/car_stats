import React, { useState, useContext } from 'react'

const UserContext = React.createContext();

export const useUser = () => {
    return useContext(UserContext)
}

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const userValues = {
        currentUser,
        setCurrentUser
    }

    return <UserContext.Provider value={userValues}>
        {children}
    </UserContext.Provider>
}