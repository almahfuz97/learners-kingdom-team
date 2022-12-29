import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userEmail, setUserEmail] = useState('');

    // const token = localStorage.getItem('lk-token')
    const login = (data) => {

    }

    const logout = () => {
        localStorage.removeItem('lk-token');
        setUser(null);
        setUserEmail('');
    }

    console.log(userEmail)

    useEffect(() => {
        if (userEmail) {
            fetch(`${process.env.URL}/api/user/userInfo?email=${userEmail}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('lk-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        setUser(data.data);
                        console.log(user)
                    }
                })
        }
    }, [userEmail])

    const authInfo = {
        user,
        setUser,
        setUserEmail,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
