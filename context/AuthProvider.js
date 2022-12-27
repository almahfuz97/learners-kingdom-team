import React, { createContext } from 'react'

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const authInfo = {}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
